"use client";
import React, { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />

      <h1>Hii:-{inputData} </h1>
    </div>
  );
}
