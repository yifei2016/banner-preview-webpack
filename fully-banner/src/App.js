import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import { Switch, View } from 'react-view-switch';
// import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Main from './Main.js';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
        </div>
      </Router>
    )
  }
}

export default App;