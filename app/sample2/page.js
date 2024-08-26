"use client"
import React from 'react'
const handler=async()=>{
  const a=await fetch("/api/sample2")
  console.log(await a.json())
}
const page = () => {
  return (
    <div>
      sample2 <br/>
      <button onClick={handler}>Click me</button>
    </div>
  )
}

export default page
