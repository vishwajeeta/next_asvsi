'use client'
import React, { useState } from 'react'

function form() {
const [fun,setFun]=useState('')
let callme=()=>{
    
    

console.log("hiiiiii")
}


  return (
    <div style={{padding:'10px',backgroundColor:'greenyellow'}}>
      <form action="" >
        <div >
        <label htmlFor="Name">Name: </label>
        <input type="text" id="Name" placeholder='Name' />
        </div>
        <div>
        <label htmlFor="password">password: </label>
        <input type="password" id="password" placeholder='*********' autoComplete='ok'/>
        </div>
        <label htmlFor="cource">Cource: </label>
        <select name="cource" id="cource" onChange={callme}>
            <option value="select">select</option>
            <option value="CEBA">CEBA</option>
            <option value="SEBA">SEBA</option>
            <option value="HEBA">HEBA</option>
        </select>
        <span></span>
      </form>
    </div>
  )
}

export default form
