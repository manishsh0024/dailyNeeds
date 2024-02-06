import React from "react";
import "../home-slider/slider3.css";
import Ratings from "../common-file/ratings";
import Button from "../common-file/common-file-css/button";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Databasep from "./Databasep";




const Slider3 = () => {

const {addItem}=useCart()

  const categ = [
    {
      name: "All",
    },
    {
      name: "Milk & Butter",
    },
    {
      name: "Fruits",
    },
    {
      name: "Vegetables",
    },
    {
      name: "Snack",
    },
    {
      name: "Pet food",
    },
    {
      name: "Food",
    },
  ];

  return (
    <>
   
      <div className="container">
        <div className="product-heading">
          <h1>Popular product</h1>
          <div className="ul">
            <ul>
              {categ.map((item) => {
                return (
                  <>
                    <li className="li">{item.name}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="p-list">
          {Databasep.slice(0,8).map((item) => {
            return (
              <>
                <div className="p-main" key={item.id}>
                  <Link to={`/details/${item.id}`}>
                  <div className="img-div">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.type}</p>
                 
                  <h1>{item.name}</h1>
                  <h3><Ratings/><p>{item.rating}</p></h3>
                  <p>{item.type1}</p>
                    </Link>

                    <h1 className="flex1">{item.price}$ <Button onAddtocart={()=>addItem(item)}/></h1>
                    
                  <h2 className="slider3-mrp">{item.mrp}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider3;
