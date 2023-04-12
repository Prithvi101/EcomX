import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './css/Carousel.css'
function CarouselR({ Images }) {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showStatus={false} showThumbs={false}>

      {
        Images != null &&
        Images.map(i => (
          <div>
            <img alt="" src={i.url} />
          </div>
        ))
      }
    </Carousel>
  )
}

export default CarouselR