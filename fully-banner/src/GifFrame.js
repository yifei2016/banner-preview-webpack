import React, { Component } from 'react';
import './App.css';

class GIfFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
      gifWidth: this.props.data.width,
      gifHeight: this.props.data.height
		};
	}
  render() {
    return (
      <img src="https://lh3.googleusercontent.com/bmW1Dh20vsH9OWsbEOvVIQN2wIUMdEuK3HAkySqOQhpznII_KO2Dtc0mmcO9S_2iBvw=w170" 
      width={this.state.gifWidth} height={this.state.gifHeight} alt=""/>
    )
  }
}

export default GIfFrame;
