import React from 'react'
import CartOrderModel from '../pages/Cart/components/CartOrderModel'

function CardCartInfo({ subTotal, placeOrder , user,products }) {
  return (
    <div className='cardcartinfo  rounded-lg shadow-lg  flex flex-col absolute top-0  w-[100%] items-center py-10' >
      <h1 className='font-bold text-xl mb-5' >Subtotal : Rs {subTotal}</h1>
      <p className='mb-5'>Apply Promo</p>
      <input className='mb-5 placeholder:text-center py-2' type="text" placeholder='Apply Promo Code Here' />
      <button onClick={()=>window.my_modal_1.showModal()}  className='bg-primary text-white w-[80%] px-5 py-2 font-bold rounded-md hover:bg-secondary' >Proceed To Checkout</button>

      <CartOrderModel placeOrder={placeOrder} user={user} products={products} subTotal={subTotal}/>
    </div>
  )
}

export default CardCartInfo