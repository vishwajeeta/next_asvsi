"use client"
import { Component } from "react";

class Counter extends Component{
  
    state={
      count:0
    };
    render(){
  return (
      <div>
        <h1>{this.increment()}</h1>
        
        
    </div>
  )}
  increment=()=>{
    const {count}=this.state;
    return count ===0 ? <>Zero</>:count;
  }
}

export default Counter

