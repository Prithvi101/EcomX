import React from 'react'
// const product = {
//     title: "ADATA XPG Lancer RGB 16 GB (1*16 GB) DDR5 5200 MHz U-DIMM Desktop Memory RAM -" +
//         " AX5U5200C3816G-CLARWH (White)",
//     price: "6,850",
//     image: "https://m.media-amazon.com/images/I/51s7lQfcvRL._SL200_.jpg"
// }
function CardCart({ product, addQuantity, removeQuantity, deleteProductFromCart }) {


    return (
        <div className='cardcart__container flex bg-white mb-5'>
            <div className="cardcart__containerleft">
                <img className='px-2' src={product.image1} alt="" height={100} width={100} />
            </div>
            <div className="cardcart__containerright">
                <h1 className='cardnpmcart__title md:text-[.9rem] text-[.8rem]'>{product.title.toUpperCase()}</h1>
                <p className='my-2' >{`Rs ${product.price}`}</p>

                <p className='my-2 ' > <span className='mx-1'><button className='bg-red text-white rounded-md shadow-md px-2 mx-2 md:m-0 ' onClick={() => { removeQuantity(product.cart_id) }}>-</button></span>{`Quantity ${product.quantity}`}<span className='mx-1'>
                    <button onClick={() => { addQuantity(product.cart_id) }} className='bg-green text-white rounded-md shadow-md px-2 my-2 md:m-0 '>+</button>
                </span></p>
                <div className='my-4 space-x-2'>


                </div>



                <button className='bg-primary text-white md:w-[255px] w-[50vw] py-2 px-5 font-bold rounded-md hover:bg-secondary text-[.8rem]' onClick={() => { deleteProductFromCart(product.cart_id) }}>Remove</button>
                <hr className='mt-4 w-[100%]' />
            </div>
        </div>
    )
}

export default CardCart