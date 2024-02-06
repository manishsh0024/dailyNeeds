import React from 'react'
import "../common-file-css/button.css"
import { useState } from 'react';

const Button = ({onAddtocart}) => {

    function handleAddToCart(){
      alert("Item added")
      onAddtocart();
    }
    
  return (
    <>
     <div className="cart-btn">
        <button className='cartadd' onClick={handleAddToCart}>Add to Cart</button>
     </div> 
    </>
  )
}

export default Button;
