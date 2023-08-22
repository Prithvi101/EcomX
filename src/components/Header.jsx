import React, { useRef, useState } from 'react'
import {
    FaSearch,
    FaUserCircle,
    FaHeadphones,
    FaHeart,
    FaSortDown,
    FaShoppingCart,
    FaBars,
    FaCrosshairs
} from 'react-icons/fa';
import Dropdown from './dropdown/Dropdown';
import OffCanvas from './offcanvas/OffCanvas';
import { Link } from 'react-router-dom';

const brandStore = [
    {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }
]
const gammersZone = [
    {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }
]

const build = [
    {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }, {
        title: 'Asus',
        items: ['Adata', 'Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'MSI',
        items: ['Memory Module', 'Storage', 'Pc Component', 'Keyboard & Mouse']
    }, {
        title: 'XPG',
        items: ['Memory Module', 'Storage', 'Keyboard & Mouse']
    }
]


function Header() {
    const [isMenu, setisMenu] = useState(false);
    const [dropData, setDropData] = useState(brandStore)
    const [isOffcanvas, setIsOffCanvas] = useState(false)
    function showDropDown(e) {

        const item = e.currentTarget.id;
        switch (item) {
            case "brandStore_link":
                setDropData(brandStore)
                setisMenu(true)
                break;
            case "gammersZone_link":
                setDropData(gammersZone)
                setisMenu(true)
                break;
            case "build_link":
                setDropData(build)
                setisMenu(true)
                break;
            default:
                setisMenu(true)

                break;
        }

    }
    function hideDropDown(e) {
        setisMenu(false)
    }

    function showOffcanvas(e) {
        setIsOffCanvas(true)
    }
    function hideOffcanvas(e) {
        setIsOffCanvas(false)

        document
            .querySelector('.header__offcanvas')
            .classList
            .remove('w-[80%]');
    }


    return (
        <div className="header ">
            <div className="header__containerTop">
                <div className="header__top">
                    <p>Build your dream PC with Icon Computers
                        <span className='text-primary font-bold cursor-pointer'> Register</span> or <span className='text-primary font-bold cursor-pointer'> Login </span>
                    </p>
                    <div className="header__contact">
                        <FaHeadphones className='header_contact_logo'></FaHeadphones>
                        <div className="header__contactDetails">
                            <p>
                                <span>Call Us:</span>
                                <span className='text-primary'> 999-999-9999</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__containerMid">
                <h1 className='header__logo'>ICON COMPUTERS</h1>
                <div className="header__search">
                    <input className='header__searchInput' type="text" placeholder='Search ' />
                    <button className='header__searchIcon'>
                        <FaSearch></FaSearch>
                    </button>
                </div>
                <div className="header__mid__buttons items-center mt-4">
                    <Link to={'/login'}>
                        <button >Login</button>
                    </Link>
                    <Link to={'/login'}>
                        <button className='hidden md:flex ml-4 mr-5 items-center'>
                            <FaUserCircle className='mr-2'></FaUserCircle>
                            <span className=''>Register</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="header__containerBottom">

                <div className="header__bottom w-[100%] relative ">

                    <div id='home_link' className="header__option">
                        <Link to={'/'}>
                            <span>Home</span>
                        </Link>

                    </div>

                    <div
                        id='brandStore_link'
                        onMouseEnter={showDropDown}
                        onMouseLeave={hideDropDown}
                        className="header__option group">
                        <a className='header__optionTitle'>Brand Store<FaSortDown className='downArrow group' /></a>

                    </div>


                    <div
                        id='gammersZone_link'
                        onMouseEnter={showDropDown}
                        onMouseLeave={hideDropDown}
                        className="header__option    group">
                        <a className='header__optionTitle'>Gamerz Zone<FaSortDown className='downArrow group' /></a>
                    </div>

                    <div id='laptop_link' className="header__option  ">
                        <span>Laptop</span>
                    </div>
                    <Link to={'/build-pc'}>
                        <div id='buildpc_link' className="header__option  ">
                            <span>Build PC</span>
                        </div>

                    </Link>



                    <div className="header__option_ic">
                        <Link to={"/favorites"}>
                            <FaHeart></FaHeart>
                        </Link>
                    </div>
                    <Link to={'/cart'}>
                        <div className="header__option_ic ">
                            <FaShoppingCart></FaShoppingCart>
                        </div>
                    </Link>


                    <div onMouseEnter={showDropDown} onMouseLeave={hideDropDown} onClick={hideDropDown} className={"header__dropDownItem " + (isMenu ? 'dropDownItemActive' : ' ')}>
                        <Dropdown elements={dropData}></Dropdown>
                    </div>


                </div>
                <div className="header__mob__menue">
                    <div>
                        <FaBars onClick={showOffcanvas}></FaBars>
                    </div>
                    <div className='flex'>

                        <Link to={"/favorites"}>
                            <FaHeart className='mr-5'></FaHeart></Link>
                        <FaShoppingCart></FaShoppingCart>
                    </div>

                </div>

            </div>
            <div
                className={"header__offcanvas transition-all ease-in-out delay-150 z-[15] top-0 left-0 fixed overflow-hidden  bg-white h-[100%] w-[0%] " + (isOffcanvas ? 'w-[50%]' : '')}>
                <h1
                    className={'ml-[80%] mt-[20%] font-extrabold text-2xl select-none'}
                    onClick={hideOffcanvas}>x</h1>
                <OffCanvas></OffCanvas>
            </div>
        </div>
    )
}

export default Header