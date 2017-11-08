import React, { Component } from "react";
import {getMode, getModeStyle} from './modeHelper';
import {
  Link
} from 'react-router-dom';

class GifLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.gif.width,
			height: this.props.gif.height,
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
			<li className="nav-link links">
				<Link style={this.state.modeStyle} to={`/gif/${this.state.width}x${this.state.height}}`}>
					{this.state.width}×{this.state.height}
				</Link>
			</li>
		)
	}
}
export default GifLink;