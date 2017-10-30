import React, { Component } from "react";
import "./App.css";
import {getMode, getModeStyle} from './modeHelper';

class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vimeo_id: this.props.video.vimeo_id,
      title: this.props.video.title
    }
  }
  render() {
    return (
      <li className="nav-link">
        <a style={ getModeStyle()} href={`/${this.state.vimeo_id}?mode=${ getMode()}`}>
          {this.state.title}
        </a>
      </li>
    );
  }
}
export default VideoLink;
