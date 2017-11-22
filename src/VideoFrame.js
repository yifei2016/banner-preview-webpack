import React, { Component } from 'react';
import './App.css';

class VideoFrame extends Component {
  constructor(props){
		super(props);
		this.state = {
      vimeo_id: this.props.data.vimeo_id,
      title: this.props.data.title
		};
	}
  render() {
    return (
      <div className="banner__wrap">
       
          <iframe ref="videoFrame"
            title="video"
            src={`https://player.vimeo.com/video/${this.state.vimeo_id}?color=5F11E8&title=0&byline=0&portrait=0`}
            frameBorder="0"
            webkitallowfullscreen mozallowfullscreen allowFullScreen
            className="align-self-center video"
          >
          </iframe>
          <div className="banner__description">
            <span className="kbMargin">{this.state.title}</span>
          </div>
        </div>
     
    )
  }
}

export default VideoFrame;
