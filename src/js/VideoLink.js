import React, { Component } from "react";
import {
  NavLink
} from 'react-router-dom';

class VideoLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vimeo_id: this.props.video.vimeo_id,
      title: this.props.video.title,
      modeStyle: this.props.modeStyle,
      toggoleSideBar: this.props.toggoleSideBar
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
        <NavLink onClick={this.state.toggoleSideBar} style={this.state.modeStyle}  
        to={`/${this.state.vimeo_id}`}>
          {this.state.title}
        </NavLink>
      </li>
    );
  }
}
export default VideoLink;
