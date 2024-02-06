import React, { useState } from 'react'
import './common-file-css/QR.css'
import {QRCode} from 'react-qr-code'


const Qr = ({cartTotal}) => {
    
  return (
    <div className='qr-code'>
        <div className="qr">
            <QRCode value={`upi://pay?pa=8504866930@ybl&pn=Intellemo&tn=cftrhwetaw4gta&am=${cartTotal}`}/>
        </div>
    </div>
  )
}

export default Qr
