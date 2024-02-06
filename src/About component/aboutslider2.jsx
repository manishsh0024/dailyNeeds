import React from 'react'
import "./aboutslider2.css"
import { Link } from "react-router-dom";


const Aboutslider2 = () => {
    const AboutsliderText = [
        {
            img:"/images/1.svg",
            heading:"Best Price & Offers",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            img:"/images/2.svg",
            heading:"Wide Assortment",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            img:"/images/3.svg",
            heading:"Free Delivery",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            url:""
        },
        {
            img:"/images/4.svg",
            heading:"Easy Returns",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            url:""
        },
        {
            img:"/images/5.svg",
            heading:"100% Satisfaction",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            url:""
        },
        {
            img:"/images/6.svg",
            heading:"Great Daily Deal",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            url:""
        },
    ]
  return (
    <>
        <div className="container">
            <div className="Aboutslider2-main">
                <p className='headp'>
                    <h1 className='headh1'>What we are Provide?</h1>
                    <img src="/images/wave3.jpg" alt="" />
                </p>
                <div className="Aboutslider2-text-main">
                {
                    AboutsliderText.map((about)=>{
                        return<>
                        <div className="text-main-in">
                            <div className="image">
                                <img src={about.img} alt="" />
                            </div>
                            <h1>{about.heading}</h1>
                            <p>{about.text}</p>
                            <h4 className='link'><Link to={about.url}>Read More</Link></h4>
                        </div>
                        </>
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutslider2
