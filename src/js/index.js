import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../css/style.scss';


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
