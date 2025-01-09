
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  
const[length,setLength]=useState(8)
const[number,setNumber]=useState(false)
const[alphabet,setAlphabet]=useState(false)
const[password,setPassword]=useState("")
 
const passwordRef=useRef(null)

const copyPass=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,8)
   window.navigator.clipboard.writeText(password)
},[password])
const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="012345678"
    if(alphabet) str+="!@#$%^&*()-_=+\|{};:/?.>"
    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
},   
[length,number,alphabet,setPassword])

useEffect(()=>{
  passwordGenerator()
},
[length,number,alphabet,passwordGenerator])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 text-2xl rounded-lg my-8 text-orange-500 bg-gray-500'>
  <h1 className='text-white text-center my-5'>Password Generator</h1>
  <div className='w-full flex shadow rounded-lg overflow-hidden mb-4 my-5'>
    <input 
      type='text'
      value={password}
      className=' w-full outline-none py-2 px-3 rounded-lg'  
      placeholder='password'
      readOnly 
      ref={passwordRef}
    />
    <button
      onClick={copyPass}
      className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'  
    >
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type='range'
      min={8}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type='checkbox'
      defaultChecked={number}
      id='numberInput'
      onChange={()=>{
        setNumber((prev)=>!prev)
      }}
      />
      <label>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type='checkbox'
      defaultChecked={alphabet}
      id='CharacterInput'
      onChange={()=>{
        setAlphabet((prev)=>!prev)
      }}
      />
      <label>Characters</label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
