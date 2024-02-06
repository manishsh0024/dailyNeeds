import React from 'react'
import "./Shopslider1.css"

const Shopslider1 = () => {
    const itemname = [
        {
            icon:"fa-solid fa-xmark",
            name:"Cobbage"
        },
        {
            icon:"fa-solid fa-xmark",
            name:"Brocolli"
        },
        {
            icon:"fa-solid fa-xmark",
            name:"Artichoke"
        },
        {
            icon:"fa-solid fa-xmark",
            name:"Clery"
        },
        {
            icon:"fa-solid fa-xmark",
            name:"Snipch"
        }
    ]
  return (
    <>
        <div className="container">
            <div className="shopslider1">
                <div className="in1">
                
                    <h1>Snack List.....</h1>
                    <p>Try this 50% off on your first order....</p>
                </div>
                <div className="in2">
                    <ul>
                    {
                        itemname.map((items)=>{
                            return<>
                                    <li><i class={items.icon}></i> {items.name}</li>
                            </>
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shopslider1
