import React from 'react'
import "./aboutslider5.css"

const Aboutslider5 = () => {
    const team = [
        {
            img:"/images/blackwidow.jpg",
            h1:"Black Widow",
            p:"worrior",
            icon1:"fa-brands fa-facebook",
            icon2:"fa-brands fa-square-threads",
            icon3:"fa-solid fa-x",
            icon4:"fa-brands fa-instagram"
        },
        {
            img:"/images/bscarletwitch.jpg",
            h1:"Scarlet Witch",
            p:"Owner",
            icon1:"fa-brands fa-facebook",
            icon2:"fa-brands fa-square-threads",
            icon3:"fa-solid fa-x",
            icon4:"fa-brands fa-instagram"
        }
    ]
  return (
    <>
        <div className="container">
            <div className="Aboutslider5">
                <p className='headp'>
                    <h1 className='headh1'>Our Team</h1>
                    <img src="/images/wave3.jpg" alt="" />
                </p>
                <div className="ourteam-main">
                    <div className="team-text">
                        <h1>Meet Our Expert Team</h1>
                        <p>
                            Proin ullamcorper pretium orci. Donec necscele risque leo. 
                            Nam massa dolor imperdiet neccon sequata congue idsem. 
                            Maecenas malesuada faucibus finibus.
                        </p>
                        <p>
                            Proin ullamcorper pretium orci. Donec necscele risque leo. 
                            Nam massa dolor imperdiet neccon sequata congue idsem. 
                            Maecenas malesuada faucibus finibus.
                        </p>
                        <button>View All Members</button>
                    </div>
                    {
                        team.map((teamdata)=>{
                            return<>
                                <div className="teamtextmap">
                                    <div className="teamimage">
                                        <img src={teamdata.img} alt="" />
                                    </div>
                                    <div className="team-details">
                                            <h1>{teamdata.h1}</h1>
                                            <p>{teamdata.p}</p>
                                        <div className="icon">
                                            <i class={teamdata.icon1}></i>
                                            <i class={teamdata.icon2}></i>
                                            <i class={teamdata.icon3}></i>
                                            <i class={teamdata.icon4}></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutslider5
