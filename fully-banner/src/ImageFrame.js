import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';

class ImageFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
			height: this.props.data.height
		};
	}
  render() {
    return (
      <iframe ref="remoteFrame"
        title="image"
        key={`${this.state.width}x${this.state.height}`}
        src={`../dist/${this.state.width}x${this.state.height}/index.html`}
        width='980'
        height='300'
        className="align-self-center">
      </iframe>
    )
  }
}

export default ImageFrame;