import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class Navbar extends Component {
  render() {
    return <header>
      <div className="d-flex justify-content-between">
        <a className="navbar-brand" href="https://fullystudios.se/">
          <img className="image"
            src="https://fullystudios.se/assets/fully-studios-logo.svg"
            alt="no picture" />
        </a>
        <div className="align-self-center d-flex justify-content-between" style={{ flexGrow: 0.04 }}>
          <a style={window.getModeStyle()} href={'?mode=cleanMode'}>Clean mode</a>
          {/* <a className="m" href="/#/clean mode">Clean mode</a> */}
          <a style={window.getModeStyle()} href={'?mode=articleMode'}>Article mode</a>
        </div>
      </div>
    </header>
  }
}
export default Navbar;




