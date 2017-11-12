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
      <img src="https://media.giphy.com/media/3o85xt08p2Y0hanhwQ/giphy.gif" 
      width={this.state.gifWidth} height={this.state.gifHeight} alt="" />
    )
  }
}

export default GIfFrame;
