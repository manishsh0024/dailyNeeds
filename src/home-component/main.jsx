import React from "react";
import Header from "../common-file/Header";
import Footer from "../common-file/footer";
import Slider2 from "../home-slider/slider2";
import Slider3 from "../home-slider/slider3";
import Slider4 from "../home-slider/slider4";
import Slider5 from "../home-slider/slider5";
import Slider6 from "../home-slider/slider6";



function Main(){
    return(
        <>
            <Header/>
            <Slider5/>
            <Slider2/>
            <Slider3/>
            <Slider4/>
            <Slider6/>
            <Slider5/>
            <Footer/>
        </>
    )
}

export default Main;