import React, { useState } from 'react'

const CartOrderModel = ({placeOrder, user, products, subTotal}) => {

    const [address, setAddress] = useState(null);
    const onchangeHanlder = (e)=>{
        setAddress(e.target.value)
    }
  return (

 
    <dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Confirm the Order</h3>

    <p className="py-2">First Name: {user.first_name}</p>    <p className="py-2">Last Name: {user.last_name}</p>
    <span>Products</span>
{
    products.map((item)=>{
        return (
        <div className='bg-white m-2 p-1 rounded-md shadow-md' >

            <p className="py-1">Name: {item.title.toUpperCase()}</p>
            <p className="py-1">Price: Rs.{item.price}</p>
            <p className="py-1">Qunatity: {item.quantity}</p>


        </div>

        )
    })
}
   
 
    <p className="py-2">Total: Rs. {subTotal}</p>
    <input onChange={onchangeHanlder}  type="text" placeholder='Enter delivery address' className="input input-bordered w-full max-w-xs"  />
   
    <div className="modal-action">

      {/* if there is a button in form, it will close the modal */}
      <button onClick={()=>{placeOrder(address)}} className="btn">Confirm</button>
      <button className="btn">Close</button>

    </div>
  </form>
</dialog>
  )
}

export default CartOrderModel;