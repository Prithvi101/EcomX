import React, { useEffect, useState } from 'react'
import { CiShoppingCart,CiHeart } from 'react-icons/ci'
import './css/cardmid.css'
// images 500

function CardMid({title,image,price}) {
    const [isActive,setisActive] = useState(false)
    return (
        <div className='cardmid flex object-fit flex-col border border-slate-300 relative  mx-2 w-[100%] cursor-pointer ' onMouseEnter={()=>setisActive(true)} onMouseLeave={() => setisActive(false)}>
                <div className="cardmid__top px-2 min-h-[80%]">
                    <img className='object-scale-down h-[10rem] w-96 ' src={image} alt=""/>
                </div>
                
                <div className="cardmid__bottom relative overflow-hidden h-[20%]">
                        <div className={"cardmid__controls  bg-white w-[100%] flex top-0 text-[.5vw]  z-[1]  "+(isActive?' cardmid__controlsActive ':'')}>

                            <button className='text-white bg-red-500 w-[25%] rounded-[999px] font-bold   text-[.8rem] mb-1 ml-2 hover:bg-primary cursor-pointer' ><CiShoppingCart className='m-auto' ></CiShoppingCart></button>
                            <button className='text-white bg-red-500  w-[25%] rounded-[999px] font-bold text-[.8rem] text-justify mb-1 ml-2 hover:bg-primary cursor-pointer' ><CiHeart className='m-auto' ></CiHeart></button>
                            <button className='text-white bg-red-500  w-[50%] rounded-lg font-bold p-3 mb-1 mr-2 ml-2 hover:bg-primary cursor-pointer' >Add to cart</button>
                            
                        </div>

                    <div className={"cardmid__about justify-center items-center  whitespace-nowrap  text-center  bg-white w-[100%] pb-3 text-[1vh] flex  flex-col px-3 opacity-1 z-[-1]"+(isActive?' ':'')}>
                        <h1 className=' text-xs w-[80%] text-ellipsis overflow-hidden text-center ' >{title}</h1>
                        <h1 className=' text-md text-primaryLight font-bold'>{`₹ ${price}`}</h1>
                    </div>
                </div>
        </div>
    )
}

export default CardMid
