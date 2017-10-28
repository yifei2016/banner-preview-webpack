import React, { Component } from "react";
import "./App.css";

class Video extends Component {
	render() {
		if (this.props.eachPost.title !== undefined) {
			return (
				<li className="nav-link">
					<a  href="">
						{this.props.eachPost.title}
					</a>
				</li>
			);
		} else {
			return "";
		}
	}
}
export default Video;
