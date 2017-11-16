import React, { Component } from 'react';
import './App.css';

class GIfFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
      width: this.props.data.width,
      height: this.props.data.height,
      fileSize: this.props.data.fileSize
		};
	}
  render() {
    return (
      <div className="banner__wrap" style={{ width: this.state.width }}>
        <img src="https://media.giphy.com/media/3o85xt08p2Y0hanhwQ/giphy.gif"
          width={this.state.width} height={this.state.height} alt="" className="banner"/>
        
        <div className="banner__description">{this.state.width}x{this.state.height}
          <span className="kbMargin">-</span>
          <span className="kbMargin"> gif </span>
          <span className="kbMargin">-</span>
          <span className="kbMargin">{this.state.filesize}</span>
          <span>kb</span>
        </div>
      </div>
    )
  }
}

export default GIfFrame;
