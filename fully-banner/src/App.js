import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import aData from './project';
import Post from './Post';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showIframeClass: 'showIframe'
		}
	}
	render() {
		// let postArray = [];
		// aData.sections.map(
		// 		section=>{
		// 			section.posts.forEach( post => postArray.push(post))
		// 		}
		// 	);
		// for(let x=0;x<postArray.length;x++){
		// 	this.state.firstPost = postArray[0];
		// 	this.state.secondPost = postArray[1];
		// 	this.state.thirdPost = postArray[2];
		// }
		let k = 1;
		const newList = aData.sections.map(section => section.posts.map( post => <Post key={k++} eachPost={post}/> ))
		// console.log(aData.sections.map(section =>section.posts))
		// aData.sections.map(section =>section.posts.forEach(x=>console.log(x)))
		return (
			<div className="container-fluid">
			<div className="row landing">
			<div className="col-xs sidebar">
			<nav>
			<ul className=" nav-pills nav-stacked">
			<li className="nav-link"></li>
			<li className="nav-link"><h4>Client</h4></li>
			<li className="nav-link"><p>Fully Studios</p></li>
			<li className="nav-link"><h4>Project</h4></li>
			<li className="nav-link"><p>Lorem Iplum</p></li>
			{newList}
    	</ul>
			</nav>
			</div>
			</div>
			</div>
			)
	};
}
export default App;
