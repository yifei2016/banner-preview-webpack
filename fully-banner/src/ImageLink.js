import React, { Component } from "react";
import {getMode, getModeStyle} from './modeHelper';
import {
  Link
} from 'react-router-dom';

class ImageLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.image.width,
			height: this.props.image.height,
			modifier: this.props.image.modifier	
		};
	}
	render() {
		if(this.props.image.modifier){
			return (
				<li className="nav-link links">
					<Link  style={getModeStyle()}  to={`/${this.state.width}x${this.state.height}-${this.state.modifier}?mode=${ getMode()}`}>
						{this.state.width}×{this.state.height} <span>-{this.props.image.modifier}</span>
					</Link>
				</li>
			)
		}else{
			return (
				<li className="nav-link links">
					<Link   style={getModeStyle()} to={`/${this.state.width}x${this.state.height}?mode=${ getMode()}`}>
						{this.state.width}×{this.state.height}
					</Link>
				</li>
			)
		}	
	}
}
export default ImageLink;
