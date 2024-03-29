import React from 'react'
import { Carousel } from 'react-responsive-carousel'




function CarouselR({ Images }) {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showStatus={false} showThumbs={false}>

      {
        Images != null &&
        Images.map((i, index) => (
          <div key={index} >
            <img className='select-none' alt="" src={i.url} />
          </div>
        ))
      }
    </Carousel>
  )
}

export default CarouselR