import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}  `}>
    <div className="container-fluid">

      <Link className="navbar-brand" to="/">{props.title}</Link> 
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page">Home</Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>


      <form className="d-flex" role="search" >
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onChange={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlForfor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      </form>
    </div>
  </nav>
  </>

  )
}

export default Navbar
