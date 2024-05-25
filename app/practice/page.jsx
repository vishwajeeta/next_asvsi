"use client"
import React, { useState } from 'react'

function page() {
    const [number,setNumber]=useState(0)
  return (
    <div>
      <h1>number={number}</h1>
      <button onClick={()=>setNumber(number+1)}>click Me</button>
    </div>
  )
}



export default page
