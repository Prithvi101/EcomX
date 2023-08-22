import React from 'react'
import CardFilter from '../../cards/CardFilter'
import CardFilterPrice from '../../cards/CardFilterPrice'
import CardBox from '../../cards/CardBox'

function Search() {
    return (
        <div className='searchPage__container   w-[100%] max-w-[1280px] px-5'>
            <div className="searchPageTitle w-[100%] relative  flex justify-center  h-[10%]">
                <h1
                    className='searchPageTitle self-center md:text-[2rem]  text-[1rem] font-bold'>Search Title</h1>
                <div className="sortbutton absolute self-end right-2">
                    <select className='text-[.8rem]' name="cars" id="cars">
                        <option value="volvo">Sort By</option>
                        <option value="saab">A-Z</option>
                        <option value="opel">Price</option>
                        <option value="audi">Rating</option>
                    </select>
                </div>

            </div>
            <div className="searchPageContent flex w-[100%]">
                <div
                    className="searchPageContent__left bg-white w-[20%] h-[100%] hidden md:block">
                    <CardFilter></CardFilter>
                    <CardFilterPrice></CardFilterPrice>
                    <CardFilter></CardFilter>
                    <CardFilter></CardFilter>
                    <CardFilter></CardFilter>
                </div>
                <div
                    className="searchPageContent__right grid grid-cols-4 gap-4 w-[80%] h-[100%]">

                    <CardBox></CardBox>
                    <CardBox></CardBox>
                    <CardBox></CardBox>
                    <CardBox></CardBox>
                    <CardBox></CardBox>
                    <CardBox></CardBox>
                </div>
            </div>

        </div>
    )
}

export default Search