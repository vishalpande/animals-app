import React, { useState } from 'react'

export default function AnimalShow() {
 
    const [count,setCount]=useState(0);


 const handleClick=() => {

setCount(count+1);


 }



  return (
    <div>
      <button onClick={handleClick}> Add Animal</button>
      <h1>You clicked {count} times</h1>
    </div>
  )
}
