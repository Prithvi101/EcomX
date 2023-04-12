import React, { useState } from 'react'
import { FaSearch, FaUser, FaHeadphones, FaHeart, FaSortDown, FaShoppingCart, FaBars } from 'react-icons/fa';
import "./css/header.css"
import Dropdown from './Dropdown';
import OffCanvas from './OffCanvas';

const dummyData = [
    {
        title: 'Asus',
        items: ['Adata',
            'Memory Module',
            'Storage',
            'Pc Component',
            'Keyboard & Mouse']
    },
    {
        title: 'MSI',
        items: [
            'Memory Module',
            'Storage',
            'Pc Component',
            'Keyboard & Mouse']
    },
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    }
    ,
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    }
    ,
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    },
    {
        title: 'Asus',
        items: ['Adata',
            'Memory Module',
            'Storage',
            'Pc Component',
            'Keyboard & Mouse']
    },
    {
        title: 'MSI',
        items: [
            'Memory Module',
            'Storage',
            'Pc Component',
            'Keyboard & Mouse']
    },
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    }
    ,
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    }
    ,
    {
        title: 'XPG',
        items: [
            'Memory Module',
            'Storage',
            'Keyboard & Mouse']
    }
]



function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="header flex flex-col ">

            <div className="header__containerTop w-[100%] bg-slate-100 h-9 ">
                <div className="header__top flex md:justify-between  justify-center  items-center lg_padding }">
                    <p className='hidden md:block' >Build your dream PC with M D Computers <span className='text-primary cursor-pointer'>Register</span>  or <span className='text-primary cursor-pointer'>Login</span> </p>
                    <div className="header__top__button flex items-center justify-center p-2">
                        <button>Login</button>
                        <button className='flex items-center ml-4 mr-5' > <FaUser className='mr-2  text-xs	' ></FaUser><span className='hidden md:block' >Sign In</span> </button>
                    </div>
                </div>
            </div>



            <div className="header__containerMid mt-2 sticky top-0 bg-white">
                <div className="header__mid flex   flex-col md:flex-row justify-between lg_padding  pl-5 pr-5 items-center ">
                    <img className='header__logo p-5 md:p-0' src="https://mdcomputers.in/image/catalog/logo.png" alt="" />
                    <div className="header__search flex grow ml-5 mr-9 h-10">
                        <input className='header__searchInput focus:outline-none  border-solid border-2 border-r-0 pl-2 border-primary grow  text-center' type="text" placeholder='Search ' />
                        <button className='header__searchIcon flex justify-center hover:bg-primary items-center bg-slate-900 text-white text-xs w-10 rounded-tr-full rounded-br-full text-center'><FaSearch></FaSearch></button>
                    </div>
                    <div className="header__contact  hidden md:flex ">
                        <FaHeadphones className='header_contact_logo text-[3rem] hover:text-primary mr-3 '></FaHeadphones>
                        <div className="header__contactDetails">
                            <p> <span className='font-bold'>Call Us :</span>  <span className='text-primary' >999-999-9999</span> </p>
                            <p>Email :<span className='text-sm ' >  abcd@Email.comn</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header__containerBottom flex  bg-slate-100 pt-5 pb-5 mt-5 justify-start pl-6 md:pl-0 items-center md:block">
                <div className="header__bottom hidden md:flex justify-evenly lg_padding ">
                    <div className="header__option navLink"><span>Home</span></div>
                    <div className="header__option navLink group">
                        <a className='header__optionTitle flex' >Brand Store<FaSortDown className='downArrow group' /></a>
                        <div className="dropDownItem hidden bg-slate-200 p-10">
                            <Dropdown elements={dummyData}  ></Dropdown>
                        </div>
                    </div>
                    <div className="header__option navLink group">
                        <a className='header__optionTitle flex' >Gamers Zone<FaSortDown className='downArrow group' /></a>
                        <div className="dropDownItem hidden bg-slate-200 p-10">
                            <Dropdown elements={dummyData}  ></Dropdown>
                        </div>
                    </div>
                    <div className="header__option navLink"><span>Laptop</span></div>

                    <div className="header__option navLink group">
                        <a className='header__optionTitle flex' >Pre-Build-PC<FaSortDown className='downArrow group' /></a>
                        <div className="dropDownItem hidden bg-slate-200 p-10">
                            <Dropdown elements={dummyData}  ></Dropdown>
                        </div>
                    </div>
                    <div className="header__option navLink text-lg"><FaHeart></FaHeart></div>
                    <div className="header__option navLink text-lg"><FaShoppingCart></FaShoppingCart></div>
                </div>

                <FaBars className='md:hidden text-3xl'  ></FaBars>
                <OffCanvas></OffCanvas>
            </div>
        </div >
    )
}

export default Header