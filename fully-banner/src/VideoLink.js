import React, { Component } from "react";
import "./App.css";
import {
  Link
} from 'react-router-dom';

class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vimeo_id: this.props.video.vimeo_id,
      title: this.props.video.title,
      modeStyle: this.props.modeStyle
    }
    this.setMode = this.setMode.bind(this);
  }
  setMode(modeStyle){
		this.setState({
      modeStyle: modeStyle
     })
	}
  render() {
    return (
      <li className="nav-link">
        <Link style={this.state.modeStyle}  to={`/banner-preview/${this.state.vimeo_id}`}>
          {this.state.title}
        </Link>
      </li>
    );
  }
}
export default VideoLink;
