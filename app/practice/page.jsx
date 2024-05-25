"use client"
import React, { useState } from 'react'

function page() {
    const [number,setNumber]=useState(0)
    const increase =()=>{
      let num=incre()
      setNumber(num)
    }
  return (
    <div>
      <h1 id='data'>{number}</h1>
      <button onClick={()=>setNumber(number+1)} title='inner Function call'>click Me</button>
      <button onClick={increase} title='outer function call'>click Me!</button>
    </div>
  )
}
let incre =()=>{
  let omg=document.getElementById("data").outerText
  omg=parseInt(omg)
  omg++
  return omg
}



export default page
