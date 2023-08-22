import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import ProductDescribtion from "./components/pages/Product/ProductDescribtion";
import Register from "./components/pages/Login/Register";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Cart from "./components/pages/Cart/Cart";
import Search from "./components/pages/Search/Search";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import { MyContext } from "./myContext";
import { useState } from "react";
import Favorite from "./components/pages/Favorite/Favorite";
import BuildPc from "./components/pages/BuildPc/BuildPc";
import { useDispatch, useSelector } from "react-redux";
import { checkUseLogin } from "./redux/actions/user";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const { user, error, isAuthenticated } = useSelector((state) => state.user);

  //calling check login
  const dispatch = useDispatch();
  useEffect(() => {
    callLogin();
  }, [isAuthenticated]);
  const callLogin = async () => {
    await dispatch(checkUseLogin());
  };

  return (
    <MyContext.Provider value={{ loading, setLoading }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App flex flex-col items-center w-[100%] ">
          <Routes>
            <Route
              path="/"
              index="index"
              element={
                <>
                  <Header></Header>
                  <Home />
                </>
              }
            />
            <Route
              path="/login"
              index="index"
              element={
                isAuthenticated ? (
                  <>
                    <Header></Header>
                    <Home />
                  </>
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/product"
              element={
                <>
                  <Header></Header>
                  <ProductDescribtion />{" "}
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header></Header>
                  <Cart />{" "}
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <Header></Header>
                  <Search />{" "}
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header></Header>
                  <About />{" "}
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header></Header>
                  <Contact />{" "}
                </>
              }
            />
            <Route
              path="/favorites"
              element={
                <>
                  <Header></Header>
                  <Favorite />{" "}
                </>
              }
            />
            <Route
              path="/build-pc"
              element={
                <>
                  <Header></Header>
                  <BuildPc />{" "}
                </>
              }
            />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
