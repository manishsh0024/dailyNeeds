import React from "react";
import "./aboutslider3.css"

const Aboutslider3 = () => {
    const performance = [
        {
            heading:"Our Performance",
            headingpara:"Your Partner for e-commerce grocery solution",
            para1:"Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
            para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ]
    const performace1 = [
        {
            heading1:"Who we are",
            para:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        },
        {
            heading1:"Our History",
            para:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        },
        {
            heading1:"Our Mission",
            para:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        }
    ]
  return<>
        <div className="container">
            <div className="Aboutslider3-main">
                {
                    performance.map((item)=>{
                        return<>
                                <div className="main-in">
                                    <div className="main-left">
                                        <img src="/images/performace1.png" alt="" />
                                    </div>
                                    <div className="main-right">
                                        <h1>{item.heading}</h1>
                                        <h2>{item.headingpara}</h2>
                                        <p>{item.para1}</p>
                                        <p>{item.para2}</p>
                                    </div>
                                </div>
                        </>
                    })
                }
                <div className="main-in-1">
                    {
                        performace1.map((items)=>{
                            return<>
                                <div className="main-info">
                                    <h1>{items.heading1}</h1>
                                    <p>{items.para}</p>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>;
};

export default Aboutslider3;
