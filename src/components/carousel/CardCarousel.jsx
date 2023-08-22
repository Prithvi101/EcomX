import React from 'react'
import '../cards/CardBig'
import CardBig from '../cards/CardBig';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




function CardCarousel({ Images }) {



  return (

    <Carousel
      infinite={true}
      centerMode={true}
      responsive={responsive}
      focusOnSelect={true}
      autoPlay={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >


      {
        Images && Images.map((curr, index) => {
          return (
            <CardBig imageSource={curr} />
          )
        })
      }

      {/* 
      <CardBig></CardBig>
      <CardBig></CardBig>
      <CardBig></CardBig>
      <CardBig></CardBig>
      <CardBig></CardBig>
      <CardBig></CardBig>
      <CardBig></CardBig> */}



    </Carousel>
  )
}

export default CardCarousel