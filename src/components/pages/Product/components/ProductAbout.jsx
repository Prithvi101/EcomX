import React from 'react'
import {
  FaHeart,
  FaShare
} from 'react-icons/fa';
import Model from './Model';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrderHandler, placeSingleProductOrderHandler } from '../../../../redux/actions/order';


function ProductAbout(props) {
  const navigate  = useNavigate()
const {user}=  useSelector(state => state.user)

  const dispatch  = useDispatch()
const placeOrder  = (address)=>{




dispatch(placeSingleProductOrderHandler(props.product.id, address))









}



  console.log(props, "in product about page")
  return (
    <div className='product__about__container flex flex-col ml-7 md:w-[50%] md:px-0 px-[10%] h-[100%] pt-[5%]'>



      <div className="product__aboutTitle text-center w-[100%]">
        <h1 className='font-bold text-3xl mb-10' >{props.product.title.toUpperCase()}</h1>
      </div>
      <div className="product__aboutBrand mb-10 flex justify-between text-xl">
        <h1 className='font-bold' >{"By " + props.product.brand}</h1>
        <div className="product__aboutBrandMenue flex justify-between ">
          <FaHeart className='cursor-pointer' onClick={() => { props.addToFavorite(props.product.id, props.product.title, props.product.price) }} ></FaHeart>
          <FaShare className='ml-5'></FaShare>
        </div>
      </div>
      <div className="product__aboutPrice ">
        <h1 className='font-bold text-[3rem]' >{"RS. " + props.product.price}</h1>
        <h1 className='font-bold text-[1.5rem] text-secondary opacity-50 mb-10'> Save ₹4,949 MSRP ₹9,999 (Inc of all taxes) </h1>
      </div>
      <div className="product__aboutDes">
  
        <p>{props.product.describtion[0].content}</p>
      </div>
      <div className="product__aboutButtons w-[100%] mt-10 flex md:flex-row flex-col md:justify-center">
        <button onClick={()=>window.my_modal_1.showModal()} className=' button__primaryHover ' >Buy Now</button>

        {/* Open the modal using ID.showModal() method */}

        <Model placeOrder={placeOrder} user={user} product={props.product}/>
        <button onClick={props.addProductToCart} className='button__primaryHover '>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductAbout