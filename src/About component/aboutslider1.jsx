import React from 'react'
import "../About component/aboutslider1.css";

const Aboutslider1 = () => {
    const aboutimage = [
        {img:"/images/about-3.png"},
        {img:"/images/about-4.png"},
        {img:"/images/about-3.png"}
    ]
  return (
    <>
        <div className="container">
            <div className="about-main">
                <div className="about-img">
                    <img src="/images/girl.png" alt=""/>
                </div>
                <div className="about-text">
                    <h1>Welcome to Nest</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                        isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                        generators on the Internet tend to repeat predefined chunks as necessary, making this the 
                        first true generator on the Internet. It uses a dictionary of over 200
                    </p>
                    <div className="about-text-image">
                        {
                            aboutimage.map((item)=>{
                                return<>
                                    <div className="about-text-image-in">
                                        <img src={item.img} alt="" />
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Aboutslider1;
