import React from 'react'
import "./sidebar2.css"

const Sidebar2 = () => {
    const byprice = [
        {
            color:"Red(56)",
            condition:"New(1556)"
        },
        {
            color:"Green(55)",
            condition:" Refurbished (154)"
        },
        {
            color:"Blue(100)",
            condition:" Used (52)"
        },
    ]
  return (
    <div>
        <div className="sidebar2-main">
            <h1>Fill By Price</h1>
            <div className="main">
            <p className='p'>Choose your color</p>
            {
                byprice.map((items)=>{
                    return<>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <p>{items.color}</p>
                            </li>
                        </ul>
                    </>
                })
            }
            <p className='p1'>Item condition</p>
            {
                byprice.map((items)=>{
                    return<>
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                <p>{items.condition}</p>
                            </li>
                        </ul>
                    </>
                })
            }
            <button>Filter</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar2
