import React from 'react'

function ProductReview(props) {
  return (
    <div className={'product__reviewTab flex flex-col w-[100%] md:justify-normal' + (props.active ? "" : " hidden")}>

      <h1 className='text-2xl mt-5 mb-5 ' >Write a review</h1>
      <form action="/" method="get" className='flex flex-col w-[100%] '>
        <input type="text" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Name' />
        <input type="email" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Email' />
        <input type="number" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Mobile Number' />
        <textarea type="text" placeholder='Write review here' className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' cols="30" rows="10" />
        <button className='bg-secondary w-[30%] px-[10px] py-[16px] text-white rounded-lg font-bold self-end'>Submit</button>
      </form>
      <h3>User review</h3>
      {/* {(props.product.review.length != 0) ? (props.product.reviews.map(e => (<h1>{e.review}</h1>))) : (<h1>There are no reviews for this product.</h1>)} */}
    </div>

  )
}

export default ProductReview