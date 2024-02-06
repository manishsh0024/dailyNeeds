import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import Ratings from './common-file/ratings'
import Header from './common-file/Header'
import Qr from './common-file/Qr'

const Cart = () => {
  const {isEmpty,items , removeItem , quantity , updateItemQuantity , cartTotal}=useCart();

    if(isEmpty){
        return(
            <>
                <Header/>
                <h1>Your Cart Is Empty......</h1>
                <Link to={"/home"}>Go to Home..</Link>
            </>
        )
    }

  return (
    <>
    <Header/>
        <div className="p-list">
        {
            items.map((item)=>{
                return(
                  
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
                <p>{item.price}</p>
                </Link>
                <div className="cart-btn">
                    <h1>{item.price * item.quantity}</h1>
                    <button className='btnc' id='pluse' onClick={()=>{updateItemQuantity(item.id,item.quantity+1)}}>+</button>
                    <h4>{item.quantity}</h4>
                    <button className='btnc' id='minus' onClick={()=>{updateItemQuantity(item.id,item.quantity-1)}}>-</button>
                </div> 
                <button style={{width:"100%"}} onClick={()=>{removeItem(item.id)}}>Remove</button>
              </div>
            </>
              )
            })
        }
        </div>
        <div className="Tprice">
          <p>Total Price :{cartTotal}</p>
        </div>
        <Qr cartTotal={cartTotal}/>
    </>
  )
}

export default Cart
