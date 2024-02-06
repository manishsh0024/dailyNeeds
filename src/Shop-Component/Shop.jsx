import React from 'react'
import "./Shop.css"
import Header from '../common-file/Header'
import Ratings from "../common-file/ratings";
import Sidebar1 from './shop-side-bar/sidebar1';
import Sidebar2 from './shop-side-bar/sidebar2';
import Shopslider1 from './Shop-slider/Shopslider1';
import Sidebar3 from './shop-side-bar/sidebar3';
import Shopslider2 from './Shop-slider/Shopslider2';
import Sidebar4 from './shop-side-bar/sidebar4';
import Slider5 from '../home-slider/slider5';
import Footer from '../common-file/footer';
import ShopDatabase from './Shop-slider/ShopDatabase';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Shop = () => {
  const {addItem}=useCart();
  return (
    <>
      <Header/>
      <Shopslider1/>
      <div className="shop-container">
      <div className="Shop-main-div">
        <div className="shop-div1">
            <Sidebar1/>
            <Sidebar2/>
            <Sidebar3/>
            <Sidebar4/>
        </div>
        <div className="shop-div2 ">
        <div className="p-list">
          {
          ShopDatabase.map((item) => {
            return (
              <>
                <div className="p-main" key={item.id}>
                  <Link to={`/shopdetails/${item.id}`}>
                  <div className="img-div">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.type}</p>
                  <h1>{item.name}</h1>
                  <h3><Ratings/><p>{item.rating}</p></h3>
                  <p>{item.type1}</p>
                  </Link>
                  <div className="shopcartbtn">
                    <h1>{item.price}$</h1>
                    <h1 className='h2'>{item.mrp}$</h1>
                    <button onClick={()=>{addItem(item)}}><i class="fa-solid fa-cart-shopping"></i>Add</button>
                  </div>
                </div>
              </>
            );
          })
          }
        </div>
        <Shopslider2/>
        </div>
      </div>
      </div>
      <Slider5/>
      <Footer/>
    </>
  )
}

export default Shop
