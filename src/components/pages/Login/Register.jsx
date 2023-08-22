import React from 'react'
import RegestrationBox from './components/RegestrationBox'

function Register() {
  return (
    <div className="login__mainContainer w-[100vw] h-[100vh]">
    <div className="login__bgContainer w-[100vw] h-[100vh] relative "></div>
        <div className="flex justify-center flex-col justify-center text-center absolute items-center w-[100vw] h-[100vh] fixed ">
                <RegestrationBox></RegestrationBox>
        </div>
        
    </div>
  )
}

export default Register