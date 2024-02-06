import React from 'react'
import "./aboutslider4.css"

const Aboutslider4 = () => {
    const h1main = [
        {
            h1:"0+",
            p:"Glorious Years"
        },
        {
            h1:"90+",
            p:"Happy Clients"
        },
        {
            h1:"23+",
            p:"Projects Complete"
        },
        {
            h1:"60+",
            p:"Team Advisor"
        },
        {
            h1:"02+",
            p:"Products Sale"
        }
    ]
  return (
    <>
      <div className="Aboutslider4-img">
        <div className="imageA">
        <img src="/images/Boardbackground.jpg" alt="" />
        </div>
        <div className="data-main">
        <div className="data">
        {
            h1main.map((items)=>{
                return<>
                        <div className="h1-main">
                            <h1>{items.h1}</h1>
                            <p>{items.p}</p>
                        </div>
                </>
            })
        }
        </div>
        </div>
      </div>
      <div className="container">
        <div className="Aboutslider4-main">

        </div>
      </div>
    </>
  )
}

export default Aboutslider4
