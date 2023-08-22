import React from 'react'

function ProductDescribtionTab(props) {
  return (
    <div className={'product__describtion flex flex-col w-[100%] justify-center ' + (props.active ? '' : " hidden")} >
      {(props.product.describtion.length != 0) ? (props.product.review.map(e => (<h1>{e}</h1>))) : (<h1>There is no describtion availabe.</h1>)}
      {
        props?.product?.describtion?.map(e => (
          <div className="product__describtionContent ">
            <h1 className='mb-5 font-bold text-xl'>{e.title}</h1>
            <p >{e.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductDescribtionTab