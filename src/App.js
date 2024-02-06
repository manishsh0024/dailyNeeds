import React from "react";
import "./App.css";
import Header from "./common-file/Header";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./userLogin/login";
import Main from "./home-component/main";
import Error from "./common-file/error";
import Footer from "./common-file/footer";
import AboutHome from "./home-component/About";
import { Somthingwent } from "./common-file/Somthingwent";
import Shop from "./Shop-Component/Shop";
import Onlyp from "./Class-Practice/Onlyp";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import PDetails from "./home-slider/pDetails";
import SDetails from "./Shop-Component/SDetails";


function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Main/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/about" element={<AboutHome/>}/>
          <Route path="/menu" element={<Shop/>}/>
          <Route path="/vendors" element={<Somthingwent/>}/>
          <Route path="/pages" element={<Somthingwent/>}/>
          <Route path="/account" element={<Somthingwent/>}/>
          <Route path="/cart" element={<Cart/>}/>
          {/*only practice part */}
          <Route path="/onlyp" element={<Onlyp/>}/>
          <Route path="/details/:itemsId" element={<PDetails/>}/>
          <Route path="/shopdetails/:itemsId" element={<SDetails/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </>
  );
}
export default App;
