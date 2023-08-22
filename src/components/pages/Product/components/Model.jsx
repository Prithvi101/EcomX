import React, { useState } from 'react'

const Model = ({placeOrder, user, product}) => {

    const [address, setAddress] = useState(null);
    const onchangeHanlder = (e)=>{
        setAddress(e.target.value)
    }
  return (

 
    <dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Confirm the Order</h3>

    <p className="py-2">First Name: {user.first_name}</p>    <p className="py-2">Last Name: {user.last_name}</p>
    <p className="py-2">Product Name: {product.title}</p>
    <p className="py-2">Category Name: {product.category}</p>
    <p className="py-2">Price: Rs. {product.price}</p>
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

export default Model