import React from "react";
import { useParams } from "react-router-dom";
import ShopDatabase from "./Shop-slider/ShopDatabase";
import Header from "../common-file/Header";
import { useCart } from "react-use-cart";

const SDetails = () => {
  const {addItem}=useCart();
    const {itemsId}=useParams();
    const details = ShopDatabase.find(items=>items.id===itemsId)
  return (<>
    <Header/>
     <div className="main-pdetails">
      <div className="img-pdetails">
        <img src={details.img} alt="shop" />
      </div>
        <div className="discription">
          <p className='pname'>{details.name}</p>
          <p className='ptype'>{details.type}</p>
          <p className='pdiscription'>{details.description}</p>
          <p className='pprice'>{details.price} <button style={{width:"fit-content", marginLeft:"1vw"}} onClick={()=>{addItem(details)}}>Add to cart</button></p>
        </div>
     </div>
    </>
  );
};

export default SDetails;
