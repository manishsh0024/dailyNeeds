import React from 'react'
import "./About.css"

import Header from '../common-file/Header'
import Slider5 from '../home-slider/slider5'
import Footer from '../common-file/footer'
import Aboutslider1 from '../About component/aboutslider1'
import Aboutslider2 from '../About component/aboutslider2'
import Aboutslider3 from '../About component/aboutslider3'
import Aboutslider4 from '../About component/aboutslider4'
import Aboutslider5 from '../About component/aboutslider5'

const AboutHome = () => {
  return (
    <div>
      <div className="aboutHeader">
      <Header/>
      </div>
      <Aboutslider1/>
      <Aboutslider2/>
      <Aboutslider3/>
      <Aboutslider4/>
      <Aboutslider5/>
      <Slider5/>
      <Footer/>
    </div>
  )
}

export default AboutHome
