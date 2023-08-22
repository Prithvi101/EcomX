import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMid from '../cards/CardMid';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 5
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 5
    }
};

function OfferCarousel({name, bannerImg, alignLeft, Products}) {
    return (
        <div
            className={"offerCarousel__container hidden md:flex mb-10 " + (
                alignLeft
                    ? ' flex-row-reverse'
                    : ''
            )}>
            <div
                className="offerCarousel__tag overflow-hidden w-[8%]  bg-black  flex flex-col">
                <div className="offerCarousel__tag__title h-[10%] bg-black p-2">
                    <h1
                        className='  bg-primary text-white text-center font-bold text-[1.5rem] flex justify-center items-center flex-grow'>{name}</h1>
                </div>
                <div className="offerCarousel__tag__image h-[90%]">
                    <img className='h-[80%] object-fill' src={bannerImg} alt=""/>
                </div>
            </div>
            <div className="offerCarousel__slider w-[80%] ">
                <Carousel
                    infinite={true}
                    rewind={true}
                    rewindWithAnimation={true}
                    rtl={alignLeft}
                    responsive={responsive}
                    customTransition="all 2s linear"
                    focusOnSelect={true}
                    autoPlaySpeed={3000}
                    transitionDuration={0}
                    itemClass={'padding:15; background:black;'}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        Products.map(e => (
                            <div className="carousel__slide">
                                <CardMid {...e}></CardMid>
                                <CardMid {...e}></CardMid>          
                            </div>
                        ))
                    }

                </Carousel>
            </div>
        </div>

    )
}

export default OfferCarousel