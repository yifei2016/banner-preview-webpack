import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class ImageLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.image.width,
			height: this.props.image.height
		};
	}
	render() {
		return (
			<li className="nav-link">
				<a href={`/${this.state.width}x${this.state.height}`}>
					{this.state.width}*{this.state.height}
				</a>
			</li>
		)
	}
}
export default ImageLink;
