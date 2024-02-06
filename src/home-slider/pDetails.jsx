import React from 'react'
import "./pDetails.css"
import "react-toastify/dist/ReactToastify.css"
import { useParams } from 'react-router-dom'
import Databasep from './Databasep';
import { useCart } from 'react-use-cart';
import Header from '../common-file/Header';
import Slider3 from './slider3';
import { toast , ToastContainer} from 'react-toastify';


const PDetails = () => {
  const {addItem}=useCart();
    const {itemsId}=useParams();
    const details = Databasep.find(items=>items.id===itemsId)
    function sclickbtn(){
      addItem(details)
      toast.success("ADDED")
    }
  return (
    <div>
    <ToastContainer style={{color:"red"}}/>
     <Header/>
     <div className="main-pdetails">
      <div className="img-pdetails">
        <img src={details.img} alt="" />
      </div>
        <div className="discription">
          <p className='pname'>{details.name}</p>
          <p className='ptype'>{details.type}</p>
          <p className='pdiscription'>{details.description}</p>
          <p className='pprice'>{details.price} <button className='detbtn' onClick={sclickbtn}>Add to cart</button></p>
        </div>
     </div>
     <Slider3/>
    </div>
  )
}

export default PDetails