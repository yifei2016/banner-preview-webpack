import React, { Component } from 'react';
import './App.css';

class GIfFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
      gifWidth: this.props.data.width,
      gifHeight: this.props.data.height,
      fileSize: this.props.data.fileSize
		};
	}
  render() {
    return (
      <div>
        <img src="https://media.giphy.com/media/3o85xt08p2Y0hanhwQ/giphy.gif"
          width={this.state.gifWidth} height={this.state.gifHeight} alt="" />
          <p className="textField">{this.state.gifWidth}x{this.state.gifHeight}<span className="kbMargin">-</span>
          <span className="kbMargin"> gif </span>
              <span className="kbMargin">-</span>
              <span className="kbMargin">{this.state.filesize}</span>
              <span>kb</span>
            </p>
      </div>
    )
  }
}

export default GIfFrame;
