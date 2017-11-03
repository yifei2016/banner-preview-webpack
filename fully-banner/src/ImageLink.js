import React, { Component } from "react";
import {getMode, getModeStyle} from './modeHelper';

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
			<li className="nav-link links">
				<a  style={ getModeStyle()} href={`/${this.state.width}x${this.state.height}?mode=${ getMode()}`}>
					{this.state.width}×{this.state.height}
				</a>
			</li>
		)
	}
}
export default ImageLink;
