import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';

class ImageFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
      height: this.props.data.height,
      frameWidth: this.props.data.width > this.props.data.height ? 980 : 300,
      frameHeight: this.props.data.width > this.props.data.height ? 300 : 980
		};
	}
  render() {
    return (
      <iframe ref="remoteFrame"
        title="image"
        key={`${this.state.width}x${this.state.height}`}
        src={`../dist/${this.state.width}x${this.state.height}/index.html`}
        width={this.state.width}
        height={this.state.height}
        className="align-self-center">
      </iframe>
    )
  }
}

export default ImageFrame;