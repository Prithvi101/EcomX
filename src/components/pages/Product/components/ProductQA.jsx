import React from 'react'

function ProductQA(props) {
  console.log(props, "in product qa")
  return (
    <div className={'product__QATab flex flex-col w-[100%] justify-center' + (props.active ? '' : " hidden")}>
      {/* {(props.product.qa.length != 0) ? (props.product.qa.map(e => (<h1>{e.question_answer}</h1>))) : (<h1>No questions have been asked about this product.</h1>)} */}
      <h1 className='text-2xl mt-5 mb-5 ' >Ask a question</h1>
      <form action="/" method="get" className='flex flex-col '>
        <input type="text" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Name' />
        <input type="email" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Email' />
        <input type="number" className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' placeholder='Mobile Number' />
        <textarea type="text" placeholder='Your Question' className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2' cols="30" rows="10" />
        <button className='bg-secondary w-[30%] px-[10px] py-[16px] text-white rounded-lg font-bold self-end'>Submit</button>
      </form>
    </div>
  )
}

export default ProductQA