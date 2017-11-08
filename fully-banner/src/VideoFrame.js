import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';
import { getMode, getModeStyle,getLogoStyle } from './modeHelper';

class VideoFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
			vimeo_id: this.props.data.vimeo_id
		};
	}
  render() {
    return (
      <iframe ref="videoFrame"
        title="video"
        src={`https://player.vimeo.com/video/${this.state.vimeo_id}?color=5F11E8&title=0&byline=0&portrait=0`}
        width="640" height="360" frameBorder="0" 
        webkitallowfullscreen mozallowfullscreen allowFullScreen
        className="align-self-center"
        >
      </iframe>
    )
  }
}

export default VideoFrame;
