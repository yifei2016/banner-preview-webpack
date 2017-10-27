import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import aData from './project';

class Post extends Component {
	render() {
		if(this.props.eachPost.width !== undefined){
			return <li className="nav-link"><a href="">{this.props.eachPost.width}*{this.props.eachPost.width}</a></li>
		}else{
			return ''
		}
	}
}
	export default Post;
