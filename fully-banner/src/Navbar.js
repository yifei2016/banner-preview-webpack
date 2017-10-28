import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';

class Navbar extends Component {
  // constructor(props){
  //  super(props);
    
  // }
  render() {
    return <nav className="navbar navbar-toggleable-md navbar-light">
      <button className="navbar-toggler navbar-toggler-right tog" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand list" href="https://fullystudios.se/"><img className="image" src="https://fullystudios.se/assets/fully-studios-logo.svg" alt="no picture" /></a>
      <div className="collapse navbar-collapse mode" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto list">
          <li className="nav-item modeSpace">
            <a className="m" href="#">Client mode</a>
          </li>
          <li className="nav-item">
            <a className=" m" href="#">Article mode</a>
          </li>
        </ul>
      </div>
    </nav>
  }
}
export default Navbar;




