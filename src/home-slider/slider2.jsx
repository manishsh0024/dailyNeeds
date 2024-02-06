import React from "react";
import "../home-slider/slider2.css";

const Slider2 = () => {
  const category = [
    {
      img: "/category-images/cat-1.png",
      name: "Vegetable",
      present: "20 item",
      
    },
    {
      img: "/category-images/cat-2.png",
      name: "peach",
      present: "23 item",
      
    },
    {
      img: "/category-images/cat-3.png",
      name: "red apple",
      present: "27 item",
      
    },
    {
      img: "/category-images/cat-4.png",
      name: "snack",
      present: "29 item"
    },
    {
      img: "/category-images/cat-1.png",
      name: "vegetable",
      present: "30 item"
    },
    {
      img: "/category-images/cat-5.png",
      name: "Strawberry",
      present: "34 item"
    },
    {
      img: "/category-images/cat-6.png",
      name: "Black Plun",
      present: "56 item"
    },
    {
      img: "/category-images/cat-7.png",
      name: "Custard apple",
      present: "45 item"
    },
    {
      img: "/category-images/cat-8.png",
      name: "Coffee & tea",
      present: "89 item"
    },
    {
      img: "/category-images/cat-9.png",
      name: "Headphone",
      present: "5 item"
    },
  ];

  const banner = [
    {
      text:"Everyday Fresh & Clean with Our Products",
      id:"banner1"
    },
    {
      text:"Make your breakfast Healthy & easy",
      id:"banner2"
    },
    {
      text:"The best organic products Online",
      id:"banner3"
    }
  ]
  return (
    <>
      <div className="container">
      <div className="slide2-main container">
        <div className="slide-div1">
          <h1>Featured Category</h1>
          <ul>
            <li>Milk & butter</li>
            <li>tea & coffee</li>
            <li>fruits</li>
            <li>vegetables</li>
          </ul>
        </div>
        <div className=" flex slide-div2 container">
          {category.map((item) => {
            return (
              <>
                <div className="photo-div">
                  <div className="image-div">
                    <img src={item.img} alt="" />
                  </div>
                  <h1>{item.name}</h1>
                  <p>{item.present}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="slide-div3">
          {
            banner.map((item,index)=>{
              return<>
                <div className="banner" id={item.id}>
                  <p>{item.text}</p>
                  <button className="btn1">Shop Now</button>
                </div>
              </>
            })
          }
        </div>
      </div>
      </div>
    </>
  );
};

export default Slider2;
