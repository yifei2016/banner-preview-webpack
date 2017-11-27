import React from 'react';
import ReactDOM from 'react-dom';
//import { Switch, View } from 'react-view-switch';
// import './index.css';
import App from './App.js';
import { unregister } from './registerServiceWorker';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
