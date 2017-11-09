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
			modifier: this.props.image.modifier,
			modeStyle: this.props.modeStyle
		}
		this.setMode = this.setMode.bind(this);
		this.checkIfModifier = this.checkIfModifier.bind(this);
	}
	setMode(modeStyle){
		this.setState({
      modeStyle: modeStyle
     })
	}
	checkIfModifier(){
		let text = `${this.state.width}×${this.state.height}`,
				modifier = this.state.modifier || null;
		if (modifier){
			return (
				<p>
					{text} <span>-</span> {modifier}
				</p>
			)
		}
		return text;
	}
	render() {
		var source = `/${this.state.width}x${this.state.height}`;
		if (this.props.image.modifier) {
			source = `/${this.state.width}x${this.state.height}-${this.state.modifier}`;
		}
		return (
			<li className="nav-link links">
				<Link style={this.state.modeStyle} to={source}>
					{this.checkIfModifier()}
				</Link>
			</li>
		)
	}
}
export default ImageLink;

