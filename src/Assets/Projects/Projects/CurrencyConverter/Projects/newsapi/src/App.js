
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsCompnent from './Components/NewsCompnent';
import Incremenct from './Components/Incremenct';

export default class App extends Component {
      a="Shiva"
  render() {
 
    return (
      <div>
     {/* <Navbar/>
     <NewsCompnent/> */}
     <Incremenct/>
      </div>
    )
  }
}


