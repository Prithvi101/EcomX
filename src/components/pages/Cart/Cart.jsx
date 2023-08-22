import React, { useContext, useEffect } from 'react'
import CardCart from '../../cards/CardCart'
import CardCartInfo from '../../cards/CardCartInfo'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { MyContext } from '../../../myContext';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { placeCartOrderHandler, placeOrderHandler } from '../../../redux/actions/order';
import CartOrderModel from './components/CartOrderModel';
function Cart() {

    const dispatch  = useDispatch()
const {user} = useSelector(state => state.user)
const {loading: OrderLoading} = useSelector(state => state.order)

    const { loading, setLoading } = useContext(MyContext)
    const [cartData, setCartData] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [key, setKey] = useState(null)
    const [qunatity, setQuantity] = useState(0);
    const addQuantity = async (cartId) => {
        try {


            const res = await fetch(`${process.env.REACT_APP_SERVER}/add-quantity-cart/${cartId}`, { credentials: "include", });
            const result = await res.json();
            setKey(Math.random())
            if (result.success) {
                toast.success(result.message)

            } else {
                toast.error(result.message ? result.message : "Something went wrong")
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    const removeQuantity = async (cartId) => {
        try {


            const res = await fetch(`${process.env.REACT_APP_SERVER}/remove-quantity-cart/${cartId}`, { credentials: "include", });
            const result = await res.json();
            setKey(Math.random())
            if (result.success) {
                toast.success(result.message)

            } else {
                toast.error(result.message ? result.message : "Something went wrong")
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    const getUserCartData = async () => {
        // setLoading(true)
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/get-all-cart-items`, { credentials: "include", });
            const result = await res.json();
            // setLoading(false)
            if (result.success) {


                setCartData(result.data.result)

                setSubTotal(result.data.subTotal)
            } else {

                toast.error(result.message)
            }
        } catch (error) {
            // setLoading(false)
        }


    }

    const deleteProductFromCart = async (cartId) => {
        try {
            setLoading(true)
            const res = await fetch(`${process.env.REACT_APP_SERVER}/delete-product-from-cart/${cartId}`, { method: "DELETE", credentials: "include", });
            const result = await res.json();

            if (result.success) {
                toast.success(result.message)
                await getUserCartData()
                setLoading(false)
                setKey(Math.random())



            } else {

                toast.error(result.message)
            }
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }

    }

    useEffect(() => {

        getUserCartData()


    }, [key, OrderLoading]);

const placeOrder  = async(address)=>{
    //get the products data from the cart 

const product_ids = cartData.map((item)=> item.id) 
    dispatch(placeCartOrderHandler(product_ids, address));
setKey(Math.random())
   
}

    return (
        <>
            {loading ? <CirclesWithBar
                height="100"
                width="100"
                color="#ff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
                :
                <div className='cart  flex  w-[100%] md:flex-row flex-col max-w-[1280px] h-[100vh]'>
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
                    <div className="cart__left md:w-[70%]  h-[100%]">
                        <div className="cart__title">
                            <h1 className='text-[3rem] font-bold m-5'>Your Cart</h1>
                        </div>
                        <div className="cartItems">
                            {cartData && cartData.map((item, index) => {
                                return (<CardCart key={item.id} product={item} addQuantity={addQuantity} removeQuantity={removeQuantity} deleteProductFromCart={deleteProductFromCart}></CardCart>)
                            })


                            }
                        </div>
                    </div>
                    <div className="cart__right  md:w-[30%] h-[100%]  relative">
                   
                        <CardCartInfo placeOrder={placeOrder} user={user} products={cartData} subTotal={subTotal}totalItems={cartData.length}></CardCartInfo>
                    </div>

                </div>}</>
    )
}

export default Cart