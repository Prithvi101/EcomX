import React from 'react'
import { Link } from 'react-router-dom'
const product = {
    title: "ADATA XPG Lancer RGB 16 GB (1*16 GB) DDR5 5200 MHz U-DIMM Desktop Memory RAM -" +
            " AX5U5200C3816G-CLARWH (White)",
    price: "6,850",
    image: "https://m.media-amazon.com/images/I/51s7lQfcvRL._SL200_.jpg"
}
function CardBox() {
  return (
  <Link to={'/product'}>
    <div className='cardbox bg-white w-[100%] flex flex-col border border-slate-300 m-5 hover:shadow-lg hover:scale-105 transition-all ease-in-out delay-50 ' >
        <img src={product.image} alt="" />
        <div className="cardbox__about flex flex-col items-center justify-center">
            <h1 className='md:text-[.8rem] text-[.3rem] text-ellipsis w-[80%] h-[20%] overflow-hidden text center whitespace-nowrap  ' >{product.title}</h1>
            <p className='md:mt-2 md:text-[1rem] text-[.5rem]' >⭐⭐⭐⭐⭐</p>
            <p className='md:mt-2 md:text-[1rem] text-[.5rem]' >Rs {product.price}</p>
            <button className='bg-primary text-white font-bold md:text-[1rem] text-[.3rem] md:py-2 py-1 md:m-4  m-2 rounded-md w-[80%]  hover:bg-secondary ' > Add to cart</button>
        </div>
      </div>
    </Link>
  )
}

export default CardBox