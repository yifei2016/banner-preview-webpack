import React, { Component } from 'react';
import './App.css';

class VideoFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
			gifid: this.props.data.gifid
		};
	}
  render() {
    return (
      <img src="" alt=""/>
      // <iframe ref="videoFrame"
      //   title="video"
      //   src={`https://player.vimeo.com/video/${this.state.gifid}?color=5F11E8&title=0&byline=0&portrait=0`}
      //   width="640" height="360" frameBorder="0" 
      //   webkitallowfullscreen mozallowfullscreen allowFullScreen
      //   className="align-self-center"
      //   style={{marginTop: '4em'}}>
      // </iframe>
     
    )
  }
}

export default VideoFrame;
