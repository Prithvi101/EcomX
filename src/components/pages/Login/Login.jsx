import React from 'react'
import LoginBox from './components/LoginBox'
import RegestrationBox from './components/RegestrationBox'

function Login() {
    return (
        <div className="login__mainContainer w-[100vw] h-[100vh]">

        <div className="login__bgContainer w-[100vw] h-[100vh] relative "></div>
            <div className="flex justify-center flex-col  text-center absolute items-center w-[100vw] h-[100vh]  ">
            <h1 className='header__logo mb-2 '>ICON COMPUTERS</h1>
            <p className='mb-10 text-xs' >Build your dream PC with Icon Computers</p>
                    <LoginBox></LoginBox>
            </div>
            
        </div>
    )
}

export default Login