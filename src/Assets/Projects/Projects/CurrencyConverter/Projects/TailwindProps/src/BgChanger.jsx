import React, { useState } from 'react'

function BgChanger() {
    const[color,setColor]=useState('olive')
  return (
    <div className='w-full h-screen duration-150 border-black' style={{backgroundColor:color}}>
    <div className='fixed inset-x-0 px-3 py-2 justify-center bottom-12 flex gap-5 shadow-xl shadow-black bg-gray-400 p-3 rounded-3xl  ' >
      <button  onClick={()=>{setColor("red")}}className='rounded-xl bg-red-700 w-16 text-white '>Red</button>
      <button  onClick={()=>{setColor("blue")}}className='rounded-xl bg-blue-700 w-16 text-white hover:'>Blue</button>
      <button  onClick={()=>{setColor("green")}}className='rounded-xl bg-green-500 w-16 text-white hover:'>Green</button>
      <button  onClick={()=>{setColor("violet")}}className='rounded-xl bg-violet-500 w-16 text-white'>Violet</button>
      <button  onClick={()=>{setColor("pink")}}className='rounded-xl bg-pink-700 w-16 text-white'>Pink</button>
      <button  onClick={()=>{setColor("indigo")}}className='rounded-xl bg-indigo-500 w-16 text-white'>Indigo</button>
      <button  onClick={()=>{setColor("orange")}}className='rounded-xl bg-orange-500 w-16 text-white'>Orange</button>
      <button  onClick={()=>{setColor("yellow")}}className='rounded-xl bg-yellow-400 w-16 text-white'>Yellow</button>
      <button  onClick={()=>{setColor("white")}}className='rounded-xl bg-white w-16 text-black'>White</button>
    </div>
    </div>
  )
}

export default BgChanger
