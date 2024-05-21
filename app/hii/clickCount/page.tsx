"use client"
import "./globals.css";

import {useState} from "react"

export default function  Counter(){
    const [count,setCount]=useState(0)
    
    return(
        <>
        <h1>Clicked {count} Times.</h1>
        <button onClick={()=>{setCount(count+1); alert("you clicked")}}  className='color:orange'>Click</button>
        </>
    );
}