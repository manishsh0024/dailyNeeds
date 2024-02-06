import React from 'react'
import "../home-slider/slider4.css"
import Databasep from './Databasep';
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';


const Slider4 = () => {
  const {addItem}=useCart();
  return (
    <>
      <div className="container">
      <h1 className='dh1'>Daily Best Deals</h1>
        <div className="dailyp-main">
            <div id="p-main1">
                <h1>Bring Nature into Home</h1>
                <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            {
                Databasep.slice(8,12).map((item)=>{
                  return (
                    <>
                      <div className="p-main" key={item.id}>
                        <Link to={`/details/${item.id}`}>
                        <div className="img-div">
                          <img src={item.img} alt="" />
                        </div>
                        <p>{item.type}</p>
                        <h1>{item.name}</h1>
                        <p>{item.type1}</p>
                        <h2>{item.price}</h2>
                        </Link>
                        <button className='cart' onClick={()=>{
                          addItem(item);
                        }}><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                      </div>
                    </>
                  );
                })
            }
        </div>
      </div>
    </>
  )
}

export default Slider4;
