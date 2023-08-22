import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
function ProductZoom({ product }) {
    const [mainImage, setMainImage] = useState(product.images[0])
    console.log(mainImage)
    function setActive(e) {
        document
            .querySelectorAll('.product__multiImages')
            .forEach(e => e.classList.remove('border-2'))
        e
            .currentTarget
            .classList
            .add('border-2');
    }
    return (
        <div
            className='product__image flex flex-col justify-center items-center w-[50%]'>
        
            <div className="produce__image__right container ">
                {
                    <InnerImageZoom className='inner__zoom__image' zoomType={'hover'} src={mainImage.normal} zoomSrc={mainImage.zoomed} />
                }
            </div>
            <div className="product__image__left flex justify-center items-center gap-2">
                {
                    product
                        .images
                        .map((currImg, idx) => (
                            <figure className='w-[20%]'>
                                <img
                                    src={currImg.normal}
                                    onClick={(e) => {
                                        setMainImage(currImg);
                                        setActive(e);
                                    }}
                                    className={'product__multiImages ' + (mainImage === currImg ? ' border-2' : '')}
                                    key={idx}
                                    alt="" />
                            </figure>
                        ), this)
                }
            </div>

        </div>
    )
}

export default ProductZoom