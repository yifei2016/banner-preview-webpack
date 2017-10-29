import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Link
} from 'react-router-dom';
class Navbar extends Component {
  render() {
    // var backgroundColor = '#0A2A4F';
    // var color = 'white';
    return <header>
      <nav className="navbar  fixed-top navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right tog"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand list" href="https://fullystudios.se/">
          <img className="image"
            src="https://fullystudios.se/assets/fully-studios-logo.svg"
            alt="no picture" />
        </a>
        <div className="collapse navbar-collapse mode" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto list">
            <li className="nav-item modeSpace">
              <Link to={'/?mode=cleanMode'}>Clean mode</Link>
              {/* <a className="m" href="/#/clean mode">Clean mode</a> */}
            </li>
            <li className="nav-item">
              <Link  to={'/?mode=articleMode'}>Article mode</Link>
              {/* <a className="m" href="/#/article mode">Article mode</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  }
}
export default Navbar;




