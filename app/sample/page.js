"use client"
import React from 'react'

const page = async() => {

const handlerequest = async()=>{
    let a= await fetch("/api/sample")
    let res=await a.json()
    console.log(res)
}
    
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handlerequest} title='request data from api end-point'>Click me</button>
    </div>
  )
}

export default page
