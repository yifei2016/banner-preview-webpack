import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Iframe from "./Iframe";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			w: this.props.width
		};
		this.clickA = this.clickA.bind(this);
	}
	clickA(){
	   this.setState({
	      w: this.props.eachPost.width
	   }, (x)=>{
	   	this.props.set(this.props.eachPost.width,this.props.eachPost.height);
	   })

	}
	render() {
		if (this.props.eachPost.width !== undefined) {
			return (
				<li className="nav-link">
					<a onClick={this.clickA} href="#">
						{this.props.eachPost.width}*{this.props.eachPost.height}
					</a>
				</li>
			);
		} else {
			return "";
		}
	}
}
export default Post;
