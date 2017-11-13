import React, { Component } from "react";
import {
  NavLink
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
				<span>
					{text} <span>-</span> {modifier}
				</span>
			)
		}
		return text;
	}
	render() {
		var source = `${process.env.PUBLIC_URL}/${this.state.width}x${this.state.height}`;
		if (this.props.image.modifier) {
			source = `${process.env.PUBLIC_URL}/${this.state.width}x${this.state.height}-${this.state.modifier}`;
		}
		return (
			<li className="nav-link links">
				<NavLink style={this.state.modeStyle} activeClassName="active" onlyActiveOnIndex to={source}>
					{this.checkIfModifier()}
				</NavLink>
			</li>
		)
	}
}
export default ImageLink;

