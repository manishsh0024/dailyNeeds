import React from "react";
import "../home-slider/slider6.css";
import Ratings from "../common-file/ratings";
import Databasep from "./Databasep";
import { useCart } from "react-use-cart";

const Slider6 = () => {
  const{addItem}=useCart();
  return (
    <>
      <div className=" container slider6">
        <h1>Deal of the Day</h1>
        <div className="slider6-in">
          {Databasep.slice(8,12).map((item) => {
            return (
              <>
                <div className="slider-main" id={item.css} key={item.id}>
                  <div className="slider-main-in">
                    <div className="countdown">
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
                      <h1>{item.name}</h1>
                      {
                        <h1>
                          <Ratings />
                          <p>{item.rating}</p>
                        </h1>
                      }
                      <p>ByNest food</p>
                      <div className="details-in">
                        <p>{item.price}$</p>
                        <p className="slider6-mrp">{item.mrp}</p>
                        <button onClick={()=>{addItem(item)}}>
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

export default Slider6;
