import React from 'react'
import { useState } from 'react'

const Nav = ({data,setData}) => {

const [veri,setVeri]=useState(data)
console.log(veri);

 const handleBreakfast = ()=>{
    // console.log(data);
    setData(veri.filter((item)=>item.category=="breakfast"))
  }
  const handleLunch = ()=>{
    setData(veri.filter((item)=>item.category=="lunch"))
  }

  const handleShakes=()=>{
    setData(veri.filter((item)=>item.category=="shakes"))
  }

  const handleAll=()=>{
    setData(veri)
  }
  
  
  return (
    <div>
        <button onClick={handleAll}className='border-0 mx-md-3 fw-bold fs-4 text-dark bg-white rounded-3 '>All</button>
        <button onClick={handleBreakfast} className="border-0 mx-md-3 fw-bold fs-4 text-dark bg-white rounded-3"> Breakfast</button>
        <button onClick={handleLunch} className="border-0 mx-md-3 fw-bold fs-4 text-dark bg-white rounded-3">Lunch</button>
        <button onClick={handleShakes}className="border-0 mx-md-3 fw-bold fs-4 text-dark bg-white rounded-3">Shakes</button>
    </div>
  )
}

export default Nav