import React from 'react'
import "./css/cardbig.css"
import { Link } from 'react-router-dom'
function CardBig({ imageSource }) {

  return (
    <Link to={`/product?product_id=${imageSource.product_id}`} >
      <div className="cardBig w-[80%]" >
        <img className='cardBig__img' src={`${imageSource.poster}`} alt="" />
        <button className='cardBig__button' >BUY NOW</button>
      </div>
    </Link>
  )
}
export default CardBig