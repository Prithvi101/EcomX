import React, { useState } from 'react'
import ProductDescribtionTab from './ProductDescribtionTab'
import ProductReview from './ProductReview'
import ProductQA from './ProductQA'

function ProductSpecReview(props) {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div className='productspecs w-[100%]  flex md:justify-normal justify-center mt-5 p-5'>
      <div className="productspecs__container__left flex flex-col justify-center w-[80%] h-[100%] bg-white">
        <div className="productspecs__container__tabButtons w-[100%] flex justify-evenly pt-5 mb-5">
          <button className={(activeTab === 1 ? 'bg-primary ' : 'bg-secondary ') + ' button__primaryTabbed '} onClick={() => setActiveTab(1)} >Describtion</button>
          <button className={(activeTab === 2 ? 'bg-primary ' : 'bg-secondary ') + ' button__primaryTabbed '} onClick={() => setActiveTab(2)}  >Reviews</button>
          <button className={(activeTab === 3 ? 'bg-primary ' : 'bg-secondary ') + ' button__primaryTabbed '} onClick={() => setActiveTab(3)}  >Q & A</button>
        </div>
        <div className="productspecs__container__pages flex md:px-[15%]  mt-[5%] ">
          <ProductDescribtionTab product={props.product} active={activeTab == 1 ? true : false} ></ProductDescribtionTab>
          <ProductReview product={props.product} active={activeTab == 2 ? true : false} ></ProductReview>
          <ProductQA product={props.product} active={activeTab == 3 ? true : false} ></ProductQA>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecReview