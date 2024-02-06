import React from 'react'
import "./Onlyp.css"
import { useState } from 'react'

const Onlyp = () => {
    const [email,setemail]=useState("")
    function change(e){
        e.preventDefault();
        const em = e.target.value
        setemail(em)
    }
    const [data,setdata]=useState("")

    function Add(){
        setdata(email)
    }
    function Delete(){
        setdata("")
    }

  return (
    <div className='main-prrr'>
      <input onChange={change} type="text" placeholder='Email' />
      <h1 className='.h11'>{email}</h1>
      <button onClick={Add}>Add</button>
      <button onClick={Delete}>Delete</button>
      <table style={{ border: '1px solid black', margin:"10px",padding:'100px'}}>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>{data}</td>
        </tr>
      </table>
    </div>
  )
}

export default Onlyp
