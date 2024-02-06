import React from "react";
import "./common-file-css/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    const footer =[
        {addname:"Address",info:"5171 W Campbell Ave undefined Kent, United States",icon:"fa-solid fa-location-dot"},
        {addname:"Call us",info:"(+91) - 540-025-124553",icon:"fa-solid fa-headphones-simple"},
        {addname:"Email",info:"dummysale@Nest.com",icon:"fa-solid fa-envelope"},
        {addname:"Hours",info:"0:00 - 18:00, Mon - Sat",icon:"fa-sharp fa-regular fa-clock"},
    ]
    const company = [
        {name:"About Us", Account:"Sign in",Corporate:"Become a vendor", Popular:"Milkshake",url:"/about"},
        {name:"Delievery Information", Account:"Veiw cart",Corporate:"Farmhouse", Popular:"Butter Milk"},
        {name:"privacy policy", Account:"my wishlist",Corporate:"Farmer", Popular:"Eggs"},
        {name:"terms & conditions", Account:"track my order",Corporate:"Farm conditions", Popular:"Chees"},
        {name:"contact us", Account:"help ticket",Corporate:"Farm carreer", Popular:"Paneer"},
        {name:"Help center", Account:"shipping details",Corporate:"Our suppliers", Popular:"Tea"},
        {name:"Carrers", Account:"product",Corporate:"Our promotions", Popular:"Coffee"}
    ]
  return (
    <>
    <div className=" main-footer">
      <div className="div1" id="div1">
        <div className="logo" id="logo">
        <img
          src="/login-images/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"
          alt="Logo"
        />
        <h1>Awesome grocery store website template</h1>
        <p className="p-main">
            {
                footer.map((footeritem)=>{
                    return<>
                        <p><i class={footeritem.icon}></i> {footeritem.addname}</p>
                        <p className="p-info">{footeritem.info}</p>
                    </>
                })
            }
        </p>
        </div>
      </div>
      <div className="div2-main">
      <div className="div2">
        <h1>Company</h1>
        {
            company.map((Citem)=>{
                return<>
                <p><Link to={Citem.url}>{Citem.name}</Link></p>
                </>
            })
        }
      </div>
      <div className="div2">
        <h1>Account</h1>
        {
            company.map((Citem)=>{
                return<>
                    <p>{Citem.Account}</p>
                </>
            })
        }
      </div>
      <div className="div2">
        <h1>Corporate</h1>
        {
            company.map((Citem)=>{
                return<>
                    <p>{Citem.Corporate}</p>
                </>
            })
        }
      </div>
      <div className="div2">
        <h1>Popular</h1>
        {
            company.map((Citem)=>{
                return<>
                    <p>{Citem.Popular}</p>
                </>
            })
        }
      </div>
      </div>
      <div className="div2" id="div6">
        <h1>Install Apps</h1>
        <h3>From app store $ google Play</h3>
        <div className="icon">
        <p><i class="fa-brands fa-google-play"></i>Get it on <br/><span>Play Store</span></p>
        <p><i class="fa-brands fa-apple"></i>Download on the <br/> <span>App Store</span></p>
        </div>
        <h1>Secured payment gateway</h1>
        <div className="payment-icon flex">
            <img src="/Pyment-images/wallet.png" alt="" />
            <img src="/Pyment-images/Gpay.png" alt="" />
            <img src="/Pyment-images/paytm.png" alt="" />
            <img src="/Pyment-images/visacard.png" alt="" />
        </div>
      </div>
    </div>
    <hr/>
    <div className="  footer-below">
        <div className="div" id="one">
            <p>© 2022, <span>Nest</span> - HTML Ecommerce Template</p>
            <p>Copyright All right reserved By <span>Manish Sharma</span></p>
            <p>Designed and Developed By <span>Manish Sharma</span> </p>
        </div>
        <div className="div" id="two">
            <p>
                <h1><i class="fa-solid fa-phone"></i></h1>
                <h1>
                    1800-666
                    <p>working 8:00-22:00</p>
                </h1>
                
            </p>
            <p>
                <h1><i class="fa-solid fa-phone"></i></h1>
                <h1>
                    1800-666
                    <p>Customer support 24/7</p>
                </h1>
                
            </p>
        </div>
        <div className="div" id="three">
            <h1>
                Follow Us
                <p>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-threads"></i>
                <i class="fa-regular fa-envelope"></i>
                <i class="fa-solid fa-x"></i>
                </p>
            </h1>
            <p className="last">Upto 15% discount on your first subscription</p>
        </div>
    </div>
    </>
  );
};

export default Footer;
