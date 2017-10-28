import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';

class Iframe extends Component {
	render() {
		if(this.props.width === undefined){
			return <iframe src="../dist/980x300/index.html" title="dsf" width='980' height='300' frameBorder="0"></iframe>
		}else{

			return <div key={this.props.src}	>
			<iframe ref="iframe" src={this.props.src} title="dsf" width='980' height='300' frameBorder="0"></iframe>
			</div> 
		}
	}
}

export default Iframe;
