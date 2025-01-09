import React, { useState } from 'react'

function Textarea(props) {
    const[text,setText]=useState('')
    const onclickfunction=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    }
    const onlowerfunction=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        }
        const onclearfunction=()=>{
            let newText="";
            setText(newText);
            }
            const oncopyfunction=()=>{
                var t=document.getElementById("floatingTextarea")
                t.select();
                navigator.clipboard.writeText(t.value)
            }
            const onspacefunction=()=>{
                 let newText=text.split(/[ ]+/);
                 setText(newText.join(" "));  
            }
    const change=(e)=>{
        setText(e.target.value)
    }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="my-5">
  <textarea className="form-control"  onChange={change} value={text} id="floatingTextarea" rows="8"></textarea>
</div>
<button onClick={onclickfunction}className='btn btn-primary mx-1'>Convert To UpperCase</button>
<button onClick={onlowerfunction}className='btn btn-primary mx-1'>Convert To LowerCase</button>
<button onClick={onclearfunction}className='btn btn-primary mx-1'>Clear</button>
<button onClick={oncopyfunction}className='btn btn-primary mx-1'>Copy Text</button>
<button onClick={onspacefunction}className='btn btn-primary mx-1'>Remove Extra Spaces</button>
    </div>
    <div className='container my -5'>
<h1>Text Summary</h1>
<p>
    Words : {text.split(" ").filter((element)=>{
        return element.length!==0;
    }).length} and Characters:{text.length}
</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something to preview here"}</p>
    </div>
    </>
  )
}

export default Textarea
