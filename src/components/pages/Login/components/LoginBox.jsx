import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useControls } from "react-zoom-pan-pinch";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../../myContext";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUseLogin,
  loginUser,
  registerUser,
} from "../../../../redux/actions/user";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

function LoginBox({ page }) {
  const { loading, user, notification, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [currentPage, setPage] = useState("login");
  const [formData, setFormData] = useState({});

  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const [regForm, setRegForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    password: "",
  });
  const [regCPassword, setRegCPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setRegCPassword(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const identifyInput = async (input) => {
    dispatch(loginUser(input, password));
  };

  const registerHandleSubmit = () => {
    dispatch(registerUser(regForm, regCPassword));
  };
  const handleEmailInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handlePasswordInputChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLoginSubmit = () => {
    setFormData({});
    identifyInput(inputValue);

    console.log(formData);
  };

  const navigate = useNavigate();
  function handleBack() {
    if (currentPage === "reg") {
      setLogin();
    } else {
      navigate("/");
    }
  }
  function setLogin() {
    dispatch({ type: "clearNotification" });
    setPage("login");
  }
  function setReg() {
    dispatch({ type: "clearNotification" });
    setPage("reg");
  }

  return (
    <div className={"login__container "}>
      <FaArrowLeft
        onClick={handleBack}
        className={"absolute top-10 left-10 "}
      ></FaArrowLeft>

      <div className="login__right  min-w-[480px]   ">
        <div
          className={
            "loginForm " + (currentPage === "login" ? " w-[100%]" : "")
          }
        >
          <div className="login__top flex justify-center items-center">
            <h1 className="font-bold mb-5">Login</h1>
          </div>
          <div className="reg__notification inline-block max-w-[100%]">
            <p
              className={`${
                notification.success === true ? "text-green" : "text-red"
              } `}
            >
              {notification.message}
            </p>
          </div>
          <div className="login_input">
            <input
              type="text"
              required={true}
              name="email"
              onChange={handleEmailInputChange}
            />
            <label>Email or Mobile No</label>
          </div>
          <div className="login_input">
            <input
              type="password"
              required={true}
              name="password"
              onChange={handlePasswordInputChange}
            />
            <label>Password</label>
          </div>
          <button className="self-center mt-1 text-[1rem]">
            Forgot Password
          </button>

          <div className="login__buttons">
            {loading ? (
              <button
                disabled
                className="bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl"
              >
                Please Wait...
              </button>
            ) : (
              <button
                onClick={handleLoginSubmit}
                className="bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl"
              >
                Login
              </button>
            )}

            <h1>or</h1>

            <button
              onClick={setReg}
              className="bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl"
            >
              Register
            </button>
          </div>
        </div>
        <div
          className={"regForm " + (currentPage === "reg" ? "  w-[100%] " : "")}
        >
          <div className="login__top flex justify-center">
            <h1 className="font-bold mb-5">Register</h1>
          </div>
          <div className="reg__notification  ">
            <p
              className={`${
                notification.success === true ? "text-green" : "text-red "
              } `}
            >
              {notification.message}
            </p>
          </div>
          <div className="login_input">
            <input
              type="text"
              required={true}
              onChange={handleChange}
              name="first_name"
              value={regForm.first_name}
            />
            <label>First Name</label>
          </div>
          <div className="login_input">
            <input
              type="text"
              required={true}
              onChange={handleChange}
              name="last_name"
              value={regForm.last_name}
            />
            <label>Last Name </label>
          </div>
          <div className="login_input">
            <input
              type="text"
              name="email"
              required={true}
              onChange={handleChange}
              value={regForm.email}
            />
            <label>Email</label>
          </div>
          <div className="login_input">
            <input
              type="text"
              required={true}
              onChange={handleChange}
              name="contact_number"
              value={regForm.contact_number}
            />
            <label>Mobile No</label>
          </div>
          <div className="login_input">
            <input
              type="password"
              required={true}
              onChange={handleChange}
              name="password"
              value={regForm.password}
            />
            <label>Password</label>
          </div>
          <div className="login_input">
            <input
              type="password"
              required={true}
              onChange={passwordChangeHandler}
              name="cpassword"
              value={regCPassword}
            />
            <label>Confirm Password</label>
          </div>
          <button className="self-center mt-1 text-[1rem]">
            Forgot Password
          </button>
          {loading ? (
            <div className="login__buttons">
              <button
                disabled
                className="bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl"
              >
                Please Wait...
              </button>
            </div>
          ) : (
            <div className="login__buttons">
              <button
                onClick={registerHandleSubmit}
                className="bg-primary text-white w-[30vh] h-[5vh]  mt-[2vh] rounded-xl"
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-secondary">© Icon Computers 2023 </p>
    </div>
  );
}

export default LoginBox;
