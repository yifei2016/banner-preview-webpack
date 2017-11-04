import React, { Component } from "react";
import {getMode, getModeStyle} from './modeHelper';

class GifLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.gif.width,
			height: this.props.gif.height
		};
	}
	render() {
		return (
			<li className="nav-link links">
				<a  style={ getModeStyle()} href={`/gif/${this.state.width}x${this.state.height}?mode=${ getMode()}`}>
					{this.state.width}×{this.state.height}
				</a>
			</li>
		)
	}
}
export default GifLink;