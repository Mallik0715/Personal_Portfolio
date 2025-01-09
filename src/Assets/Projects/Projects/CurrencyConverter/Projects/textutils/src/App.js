
import { useState } from 'react';
import './App.css';
import Navbar from './Compnents/Navbar';
import Textarea from './Compnents/Textarea';
import About from './Compnents/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const[mode,setMode]=useState('light');
   const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#a1d8d1'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='White'
    }
   }
  return (
    <>
    <Router>
<Navbar title="TextUtils" about="About us" mode={mode}  togglemode={togglemode}/>
<div className='container my-3'>

</div>
<Routes>
          {/* Define routes using element prop */}
          <Route path='/' element={<Textarea heading="Enter The Data" />} />
         
          <Route path='/about' element={<About />} />
        </Routes>
</Router>
    </>
  );
}

export default App;