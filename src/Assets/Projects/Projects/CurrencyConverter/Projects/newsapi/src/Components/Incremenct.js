import React, { useState } from 'react'

const Incremenct = () => {
    const[counter,setCounter]=useState(0)
    const adding=()=>{
        if(counter===20){
        setCounter(counter);
        }
        else{
            setCounter(counter+1);
        }
    }
    const subtracting=()=>{
        console.log("clicked");
        if(counter===0){
        setCounter(counter);
        }
        else{
            setCounter(counter-1)
        }

    }
  return (
    <div>
      <button  className="btn btn-primary gap-10"onClick={adding}>Add</button>
          {counter}
      <button  className="btn btn-success gap-10" onClick={subtracting}>Subtract</button>
    </div>
  )
}

export default Incremenct
