import React from "react";
import "./Shopslider2.css";
import Ratings from "../../common-file/ratings";


const Shopslider2 = () => {
  const slide2 = [
    {
      img: "public/images/banner-5 - Copy.png",
      name: "Dandy Blend",
      rating: "(3.0)",
      type1: "ByNest Food",
      price: "60$",
      mrp: "120$",
      id: "div1",
    },
    {
      img: "public/images/banner-6 - Copy.png",
      name: "Cashew Mix",
      rating: "(4.0)",
      type1: "ByNest Food",
      price: "80$",
      mrp: "100$",
      id: "div2",
    },
    {
      img: "public/images/banner-7 - Copy.png",
      name: "Sweet patato",
      rating: "(4.1)",
      type1: "ByNest Food",
      price: "90$",
      mrp: "110$",
      id: "div3",
    },
    {
      img: "public/images/banner-8 - Copy.png",
      name: "Peanuts cracker",
      rating: "(4.3)",
      type1: "ByNest Food",
      price: "70$",
      mrp: "90$",
      id: "div4",
    }
  ];
  return (
    <>
      <div className=" container shopslider2">
        <h1>Deal of the Day</h1>
        <div className="shopslider2-in">
          {slide2.map((items) => {
            return (
              <>
                <div className="shopslider-main" id={items.id}>
                  <div className="shopslider-main-in">
                    <div className="shopcountdown">
                      <ul>
                        <li>
                          <h2>54</h2>
                          <p>Days</p>
                        </li>
                        <li>
                          <h2>54</h2>
                          <p>hours</p>
                        </li>
                        <li>
                          <h2>54</h2>
                          <p>Minutes</p>
                        </li>
                        <li>
                          <h2>54</h2>
                          <p>Section</p>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <h1>{items.name}</h1>
                      {
                        <h1>
                          <Ratings/>
                          <p>{items.rating}</p>
                        </h1>
                      }
                      <p>ByNest food</p>
                      <div className="details-in">
                        <p>{items.price}</p>
                        <p className="shopslider2-mrp">{items.mrp}</p>
                        <button>
                          <i class="fa-solid fa-cart-shopping"></i> Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shopslider2;
