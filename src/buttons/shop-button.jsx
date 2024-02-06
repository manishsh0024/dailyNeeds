import React, { useState } from 'react'

const Shopbutton = () => {
  return (
    <div>
        <div className="shop-btn">
            <h1>{rate}$</h1>
            <button className='cartadd'><i class="fa-solid fa-cart-shopping"></i> Cart</button>
     </div> 
    </div>
  )
}

export default Shopbutton
