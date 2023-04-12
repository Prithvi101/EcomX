import React from 'react'
import CarouselR from './Carousel'
const dummyData = [
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/cm-pre-build/cm-build-for-the-best-650x510px-650x510.webp' },
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/inno3d-rtx-4080-ichill-x3-16gb-gaming-graphics-card-650x510px-650x510.webp' },
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/inno3d-rtx-4080-ichill-x3-16gb-gaming-graphics-card-650x510px-650x510.webp' },
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/inno3d-rtx-4080-ichill-x3-16gb-gaming-graphics-card-650x510px-650x510.webp' },
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/inno3d-rtx-4080-ichill-x3-16gb-gaming-graphics-card-650x510px-650x510.webp' },
    { url: 'https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/apr/01-04-23/inno3d-rtx-4080-ichill-x3-16gb-gaming-graphics-card-650x510px-650x510.webp' },
    

]
function Home() {
    return (
        <div className="home flex lg_padding">
        <div className="sidebar hidden md:block">
            <ul>
                <li>Custom Cooling System</li>
                <li>Processors</li>
                <li>Cooling Systems</li>
                <li>MotherBoard</li>
                <li>Ram</li>
                <li>Storage</li>
                <li>Graphics Card</li>
                <li>PowerSupply</li>
                <li>Cabinate</li>
            </ul>
        </div>
            <div className='carousal w-[100%] md:w-[60%]'>
                <CarouselR Images={dummyData} ></CarouselR>
            </div>

        </div>

    )
}

export default Home