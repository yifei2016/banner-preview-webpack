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
      <div>
        hej
        <img src="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif" 
      width={this.state.gifWidth} height={this.state.gifHeight} alt="" />
      </div>
    )
  }
}

export default GIfFrame;
