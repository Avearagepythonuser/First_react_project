import React from 'react'
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import { Button } from '@heroui/react';
import MyImage from './MyImage';

export const Counter = () => {
  const [num, setNum] = useState(0);

  const h2Style = {
    textAlign: "center",
    color: "blue"
  }

  const btnMinusStyle = {
    opacity: num <=-5 ? 0.4 : 1,
    cursor: num <=-5 ? "not-allowed" : "pointer"
  }

  const btnPlusStyle = {
    opacity: num >=5 ? 0.4 : 1,
    cursor: num >=5 ? "not-allowed" : "pointer"
  }
  
  const numStyle = {
    color: num < 0 ? "red" : "green"
  }

  return (
    <div>
        <h2 style={h2Style}>My Counter component</h2>
        <div className="counter">
            <button style={btnMinusStyle}  onClick={()=>setNum(prev=>prev-1)} disabled={num<=-5}> <CiCircleMinus  size={48} color='blue' /> </button>

            <div style={numStyle} className="nr">{num}</div>

            <button style={btnPlusStyle} disabled={num>=5}  onClick={()=>setNum(prev=>prev+1)}> <CiCirclePlus size={48} color='blue' /></button>
            <Button onClick={()=>setNum(0)}>Reset</Button>
            
        </div>
        {num > 0 && <MyImage num={num}/>}
    </div>
  )
}