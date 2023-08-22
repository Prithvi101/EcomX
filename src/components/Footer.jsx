import React from 'react'
import {FaLocationArrow, FaMailBulk} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div
            className='footer flex justify-center flex-col w-[100%] bg-primary p-10 mt-5'>
            {/* Newsletter */}
            <div className="footer_top flex justify-center w-[100%]">
                <h1 className="footerLogo text-[2vh] text-white font-bold text-center">ICON COMPUTERS</h1>
            </div>
            {/* Important Links */}
            <div className="footer_mid flex flex-col md:flex-row justify-center  w-[100%]">
                <div
                    className="footer_mid__left flex justify-evenly text-xs text-white mt-9 md:w-[60%]  ">
                    <div className="footer__about">
                        <Link to={'/about'}>
                        <h1 className='text-xl font-bold mr-3 '>About</h1>
                        </Link>
                        <p>About</p>
                        <p>About Us</p>
                        <p>Bank Details</p>
                        <Link to={'/contact'}>
                        <p>Contact Us</p>
                        </Link>
                        <p>Our Presence</p>
                    </div>
                    <div className="footer__information mr-3  ">
                        <h1 className='text-xl font-bold'>Information</h1>
                        <p>Affiliates</p>
                        <p>Brands</p>
                        <p>FAQ</p>
                        <p>Gift Cards</p>
                    </div>
                    <div className="footer__myAccount mr-3  ">
                        <h1 className='text-xl font-bold'>My Account</h1>
                        <p>My Account</p>
                        <p>Order History</p>
                        <p>Track Order</p>
                        <p>Wish List</p>
                    </div>
                </div>
                <div className="footer_mid__right flex justify-start flex-col text-white  md:w-[20%] font-bold ">
                    <h1 className='text-center text-lg' >Contact Us</h1>
                    <div className="flex items-center justify-start mt-5">
                        <FaLocationArrow className='mr-5 text-2xl text-red-600'></FaLocationArrow>
                        <p>16/1 Ganesh Chandra Avenue, Kolkata-700013</p>
                    </div>
                    <div className="flex items-center justify-start mt-5">
                        <FaMailBulk className='mr-5 text-2xl text-blue'></FaMailBulk>
                        <p>contact@abc.com</p>
                    </div>

                </div>
            </div>
            <hr className='text-white mt-3'/>
            {/* Bottom Nav */}
            <div className="footer_bottom">
              <p className='text-white text-center mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo unde consequuntur nesciunt perspiciatis assumenda pariatur, et nam sunt aliquam dolor molestias. Facere dolores voluptas asperiores voluptatibus atque delectus architecto quos.</p>
            </div>
        </div>
    )
}

export default Footer