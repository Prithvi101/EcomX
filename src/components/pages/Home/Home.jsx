import React, { useEffect, useState } from 'react'
import CarouselR from '../../carousel/Carousel'
import CardBig from '../../cards/CardBig'
import CardCarousel from '../../carousel/CardCarousel'
import CardMid from '../../cards/CardMid'
import OfferCarousel from '../../carousel/OfferCarousel'
import { useLocation } from 'react-router-dom';

var Product = require('../../../run_results.json'); //with path
const dummyData = [
    {
        url: 'https://venus.tech/gugristu/2023/03/001.jpg'
    },
    {
        url: 'https://venus.tech/gugristu/2023/03/001.jpg'
    },
    {
        url: 'https://venus.tech/gugristu/2023/03/004.webp'
    }
]
const dummyData2 = [
    {
        url: 'https://cdn.mdcomputers.in/image/catalog/2023/apr/11-04-23/asus-dual-rx-6700-x' +
            't-12gb-gaming-graphics-card-offer.webp'
    }, {
        url: 'https://cdn.mdcomputers.in/image/catalog/2023/apr/11-04-23/asus-dual-rx-6700-x' +
            't-12gb-gaming-graphics-card-offer.webp'
    }, {
        url: 'https://cdn.mdcomputers.in/image/catalog/2023/apr/11-04-23/asus-dual-rx-6700-x' +
            't-12gb-gaming-graphics-card-offer.webp'
    }
]

function Home() {


    const [offersData, setOffersData] = useState([]);
    const [homeBanner, setHomeBanner] = useState([]);

    const getOffers = async () => {
        try {


            const category_id = 2; // Example category ID

            const response = await fetch(`${process.env.REACT_APP_SERVER}/offers-by-category/${category_id}`);

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            // Handle the response data
            console.log(data, "this is data ")
            setOffersData(data)
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    }


    const getHomeBanner = async () => {
        try {



            const response = await fetch(`${process.env.REACT_APP_SERVER}/get-all-banners`);

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            // Handle the response data
            console.log(data, "this is data ")
            setHomeBanner(data)
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getOffers()
        getHomeBanner()
    }, []);
    return (
        <div className="main_container  w-[100%]  max-w-[1280px]">
            <div className="home_container">
                <div className='flex flex-col justify-center'>
                    <div className="home flex max-width-[1280px]">
                        <div className='carousal w-[100%] z-0 md:w-[100%]'>
                            <CarouselR Images={homeBanner}></CarouselR>
                        </div>
                    </div>

                    <div className="card_container  flex justify-center  flex-col mt-10 mb-20 lg_padding">
                        <div
                            className='cardTittle text-secondary font-bold p-5 hover:text-primary  text-[20px] border-b-2 mb-10'>
                            <h1 className='text-[4vw] md:text-[1.5vw]'>Graphic Cards Offer</h1>
                        </div>
                        <div className="card__carousel__container px-[5%] ">
                            <CardCarousel Images={offersData}></CardCarousel>
                        </div>
                    </div>

                    <div className="card__carousel__container px-[5%] ">
                        <OfferCarousel name={'ADATA'} Products={Product.Products} bannerImg={"https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/18-04-23/adata-xpg-gammix-d30-16gb-8gbx2-ddr4-3200mhz-desktop-ram-red-196x540px-196x540.webp"} alignLeft={false} ></OfferCarousel>
                    </div>
                    <div className="banner flex justify-center mt-10">
                        <img
                            src="https://cdn.mdcomputers.in/image/catalog/2023/apr/12-04-23/wd-brand-day-desktop-offer.webp"
                            alt="" />
                    </div>
                    <div className="banner flex justify-center mt-10">
                        <img
                            src="https://cdn.mdcomputers.in/image/catalog/2023/apr/11-04-23/asus-router-summer-deals-main.webp"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home