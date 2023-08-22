import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function RegestrationBox() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        password: '',

    });
    const [notification, setNotification] = useState({
        success: true,
        message: ""
    })
    const [cPassword, setcPassword] = useState("");
    const passwordChangeHandler = (e) => {
        setcPassword(e.target.value)
    }

    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        if (cPassword === formData.password) {
            console.log("password is correct ")




        }
        else {
            setNotification({ success: false, message: "Password is not matched" })
        }

    }

    return (
        <div className="reg__container justify-center items-center   ">
            <div className="reg__left">
                <h1 className='header__logo mb-5'>Register</h1>
            </div>
            <div className="reg__notification">
                <p className={`${notification.success === true ? "text-green" : "text-red-500"} `}>{notification.message}</p>
            </div>
            <div className="reg__right ">
                <div className="reg_input">
                    <input type="text" value={formData.first_name}
                        onChange={handleChange} name='first_name' required={true} />
                    <label>First Name</label>
                </div>
                <div className="reg_input">
                    <input type="text" value={formData.last_name}
                        onChange={handleChange} name='last_name' required={true} />
                    <label>Last Name</label>
                </div>
                <div className="reg_input">
                    <input type="text" value={formData.email}
                        onChange={handleChange} name='email' required={true} />
                    <label>Email</label>
                </div>
                <div className="reg_input ">
                    <input type="text" value={formData.contact_number}
                        onChange={handleChange} name='contact_number' required={true} />
                    <label>Contact Number</label>
                </div>
                <div className="reg_input">
                    <input type="text" value={formData.password}
                        onChange={handleChange} name='password' required={true} />
                    <label>Password</label>

                </div>

                <div className="reg_input">
                    <input type="password" onChange={passwordChangeHandler} value={cPassword} name='cpassword' required={true} />
                    <label>Confirm Password</label>

                </div>





                <button className='self-end mt-1 text-[.8vw]' >Forgot Password</button>

                <button onClick={handleSubmit} className='bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl'>Create Account</button>
            </div>
        </div>
    )
}

export default RegestrationBox