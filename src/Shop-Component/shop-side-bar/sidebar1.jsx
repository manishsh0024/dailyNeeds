import React from 'react'
import "./sidebar1.css"

const Sidebar1 = () => {
    const Sidebar1 = [
        {   icon:"/images/category-1 - Copy.svg",
            name:"Milk & Diaries",
            value:"0"
        },
        {   icon:"/images/category-2 - Copy.svg",
            name:"Clothing",
            value:"0"
        },
        {   icon:"/images/category-3 - Copy.svg",
            name:"Pet food",
            value:"0"
        },
        {   icon:"/images/category-4 - Copy.svg",
            name:"Baking material",
            value:"0"
        },
        {   icon:"/images/category-5 - Copy.svg",
            name:"Vegetable & fruits",
            value:"0"
        }
    ]
  return (
    <div className='sidebar'>
        <h1>Category</h1>
        <ul>
        {
            Sidebar1.map((items)=>{
                return<>
                    <li>
                        <div className="image">
                        <img src={items.icon} alt="" /> 
                        </div>
                        <p>{items.name}</p>
                        <p1>{items.value}</p1>
                    </li>
                </>
            })
        }
        </ul>
    </div>
  )
}

export default Sidebar1
