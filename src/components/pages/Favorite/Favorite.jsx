import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { MyContext } from '../../../myContext';
import { useContext } from 'react';
import Loading from '../../loader/Loading';
const Favorite = () => {
    const { loading, setLoading } = useContext(MyContext)
    const [favoriteItems, setFavoriteItems] = useState([]);
    const getFavoriteItemData = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.REACT_APP_SERVER}/get-all-favorite-products`, { credentials: "include" });

        const result = await res.json();
        setLoading(false)
        if (result.success) {
            setFavoriteItems(result.data);

        } else {
            setFavoriteItems([])

        }
    }

    const deleteFavoriteItem = async (id) => {
        try {

            setLoading(true)
            const res = await fetch(`${process.env.REACT_APP_SERVER}/delete-favorite-item/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            const result = await res.json();
            setLoading(false)
            if (result.success) {
                toast.success(result.message)
                getFavoriteItemData()
            } else {

                getFavoriteItemData()
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error("Something went wrong")
        }
    }
    useEffect(() => {
        getFavoriteItemData()

    }, []);
    return (
        <>

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
            <h3 className='text-2xl'>Favorite Items</h3>
            {favoriteItems && favoriteItems.map((item) => {
                return (

                    loading ? <Loading /> : <div className='m-4'>



                        <div className=" flex max-w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="p-6">

                                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
                                    {item.title}
                                </p>
                            </div>
                            <div className="p-6 pt-0 flex justify-center items-center">
                                <Link to={`/product?product_id=${item.product_id}`}>
                                    <button
                                        className="mx-2 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-green shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        View
                                    </button>
                                </Link>

                                <button onClick={() => {
                                    deleteFavoriteItem(item.product_id)
                                }}
                                    className="mx-2 select-none rounded-lg  py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white bg-red shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                    </div>)
            })}
        </>
    )
}

export default Favorite