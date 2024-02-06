import React from 'react'
import "./sidebar3.css"
import Ratings from '../../common-file/ratings'

const Sidebar3 = () => {
  const sidelist = [
    {
      img:"/images/thumbnail-3.jpg",
      name:"Juice",
      price:"50$",
      rating:"(4.0)"
    },
    {
      img:"/images/thumbnail-3.jpg",
      name:"Juice",
      price:"50$",
      rating:"(4.0)"
    },
    {
      img:"/images/thumbnail-3.jpg",
      name:"Juice",
      price:"50$",
      rating:"(4.0)"
    }
  ]
  return (
    <>
    <div className="sidebar3">
        <h1>New Products</h1>
        {
          sidelist.map((items)=>{
            return<>
              <div className="inner-div">
                <div className="inner-img">
                  <img src={items.img} alt="" />
                </div>
                <div className="inner-text">
                  <h1>{items.name}</h1>
                  <price>{items.price}</price>
                  <p>
                  <Ratings/>{items.rating}
                  </p>
                </div>
              </div>
            </>
          })
        }
    </div>
    </>
  )
}

export default Sidebar3
