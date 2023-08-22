import React, { useContext, useEffect, useState } from 'react'
import ProductZoom from './components/ProductZoom';
import ProductAbout from './components/ProductAbout';
import axios from "axios";
import ProductSpecReview from './components/ProductSpecReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { MyContext } from '../../../myContext';
import Loading from '../../loader/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToFavoriteHandler } from '../../../redux/actions/user';
const sizeNormal = 400;
const sizeZoom = 1200;



const product = {
    "id": 7,
    title: "Adata XPG Emix H20 RGB (Black)",
    brand: "ADATA",
    model: "EMIX-H20",
    price: 2135,
    describtion: [{ title: "Features", content: "Having situational awareness is key to winning on the battlefield. Without it, your adversaries will gain the upper hand and ambush you when you least expect it. Tip the scales in your favor by being able to hear your enemies with the EMIX H20 gaming headset equipped with virtual 7.1 surround sound.", },
    { title: "Positional Accuracy with Virtual 7.1 Surround Sound", content: "With virtual 7.1 surround sound, the EMIX H20 will help heighten your situational awareness. Hear your friends and foes alike, whether in front of or behind you, and never be caught off guard.", },
    { title: "Aural Immersion with High-Fidelity 50mm Drivers", content: "The EMIX H20 utilizes 50mm high-fidelity drivers that deliver superior sound quality with a wide range, excellent accuracy, and optimized bass for total aural immersion.", }],
    category: "Headset",
    review: [],
    qa: [],
    images: [
        { normal: `https://m.media-amazon.com/images/I/81OkU7x04EL._SX${sizeNormal}_.jpg`, zoomed: `https://m.media-amazon.com/images/I/81OkU7x04EL._SX${sizeZoom}_.jpg` },
        { normal: `https://m.media-amazon.com/images/I/71LNmWvZcwL._SL${sizeNormal}_.jpg`, zoomed: `https://m.media-amazon.com/images/I/71LNmWvZcwL._SL${sizeZoom}_.jpg` },
        { normal: `https://m.media-amazon.com/images/I/714BdrkyzdL._SL${sizeNormal}_.jpg`, zoomed: `https://m.media-amazon.com/images/I/714BdrkyzdL._SL${sizeZoom}_.jpg` },
    ],
    rating: {
        "rate": 3,
        "count": 400
    },

}



function ProductDescribtion() {
    // const { loading }=  useSelector(state => state.order)
    const { loading, setLoading } = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState(null);
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.user)
    useEffect(() => {
        //fetching single product 
        const getSingleProduct = async () => {
            setLoading(true)
            try {

                const queryParams = new URLSearchParams(location.search);
                const product_id = queryParams.get('product_id');

                
                const res = await fetch(`${process.env.REACT_APP_SERVER}/get-product/${product_id}`);
                const result = await res.json();
                setLoading(false)
                if (result.success) {

                    setProducts(result.data)
                } else {
                    setProducts([])
                }




            } catch (error) {
                setLoading(false)
                console.error("Error fetching product:", error);
            }
        };

        getSingleProduct();
    }, [location.search]);




    const addProductToCart = async () => {

        try {
            const queryParams = new URLSearchParams(location.search);
            const product_id = queryParams.get('product_id');
            const response = await fetch(`${process.env.REACT_APP_SERVER}/add-to-cart/${product_id}`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",

                },

                body: JSON.stringify({
                    quantity: 1,
                    price: products.price,
                }),
                credentials: "include",
            });

            const result = await response.json();
            if (result.success) {
                toast.success(result.message)
            } else {
                toast.error(result.message)
                const obj = { url: `/product?product_id=${products.id}` };
                localStorage.setItem("pendingPage", JSON.stringify(obj))
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.message)


            console.error("Error:", error);
        }
    }


    const addToFavorite = async (productId, title, price) => {
        //checking if user is login or not 

        const queryParams = new URLSearchParams(location.search);
        const product_id = queryParams.get('product_id');
        if (isAuthenticated) {
            dispatch(addProductToFavoriteHandler(title, product_id, price))

        } else {
            const obj = { url: `/product?product_id=${product_id}` };
            localStorage.setItem("pendingPage", JSON.stringify(obj));
            navigate("/login");
        }



    }
    useEffect(() => {
        localStorage.removeItem("pendingPage");
    }, []);



    return (

        <>
               <div className="product flex  w-[100%]   ">
            <div>

                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
            </div>
            {products === null ? <div className="w-full loading flex justify-center items-center">
                <Loading />
            </div>
                :
                <div
                    className="product__container   flex flex-col max-w-[1280px] ml-auto mr-auto ">

                    {
                        products === null || products.length === 0 ? <div>No product found</div>
                            :
                            <div>
                                <div className="product__info flex md:flex-row flex-col justify-center items-center">
                                    <ProductZoom product={products}></ProductZoom>
                                    <ProductAbout addProductToCart={addProductToCart} product={products} addToFavorite={addToFavorite}></ProductAbout>
                                </div>
                                <div className="product__specs felx">
                                    <ProductSpecReview product={product} ></ProductSpecReview>
                                </div>
                            </div>
                    }
                </div>
            }
        </div></>
    )
}

export default ProductDescribtion