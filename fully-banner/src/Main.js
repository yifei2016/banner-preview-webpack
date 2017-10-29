import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import aData from './project';
import Post from './Post';
import Video from './Video';
//import Iframe from './Iframe'; !!! NO need to use this.
import Navbar from './Navbar';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			width: 980, // default 
			height: 300, // default
			id: null
		};
		this.iframeChange = this.iframeChange.bind(this);
		this.videoChange = this.videoChange.bind(this);
	}
	iframeChange(width,height){
		var newSize = {width: width,height: height}
		this.setState(newSize, function () {
			this.refs.remoteFrame.contentWindow.location.reload(true); // this is the key to solve the iFrame reload issue.
		});
	}
	videoChange(id){	
		 var newId={id: id};
		 this.setState(newId, function(){
			this.refs.videoFrame.contentWindow.location.reload(true);
		 })
	}
	render() {	
		console.log(this.props.location.search)
		let k = 1;
		const newList = aData.sections.map(section => section.posts.map( post => {return <Post key={k++} set={this.iframeChange} eachPost={post} />}));
		const videoList = aData.sections.map(section => section.posts.map( post => {return <Video key={k++} set={this.videoChange} eachPost={post} />}));
		const client = aData.client;
		const project = aData.project;
		var backgroundColor = '#0A2A4F';
		var color = 'white';
		if(this.props.location.search.split('=')[1] === 'articleMode'){
			backgroundColor = 'white';
			color = 'black';
		}
		if(this.state.id !== null){
			return(
				<div className="mode">
					<Navbar />
					<div className="container-fluid " style={{backgroundColor: backgroundColor, color: color}}>
						<div className="row landing d-flex justify-content-center">
							<nav className="sidebar">
								<ul className=" nav-pills nav-stacked">
									<li className="nav-link"></li>
									<li className="nav-link"><h4>Client</h4></li>
									<li className="nav-link"><p>{client}</p></li>
									<li className="nav-link"><h4>Project</h4></li>
									<li className="nav-link"><h6>{project}</h6></li>
									<li className="nav-link html5"><h4>HTML5</h4></li>
									{newList}
									<li className="nav-link html5"><h4>Video</h4></li>
									{videoList}
								</ul>
							</nav>
							<span style={{width:'10em'}}></span>
							<iframe ref="videoFrame"
							title="video"
							src={`https://player.vimeo.com/video/${this.state.id}?color=5F11E8&title=0&byline=0&portrait=0`}
							width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
								className="align-self-center">
							</iframe>
						</div>
					</div>
				</div>
				)
		}else{
			return(
				<div className="mode">
					<Navbar />
					<div className="container-fluid" style={{backgroundColor: backgroundColor, color: color}}>
						<div className="row landing d-flex justify-content-center">
							<nav className="sidebar ">
								<ul className=" nav-pills nav-stacked">
									<li className="nav-link"></li>
									<li className="nav-link"><h4>Client</h4></li>
									<li className="nav-link"><p>{client}</p></li>
									<li className="nav-link"><h4>Project</h4></li>
									<li className="nav-link"><h6>{project}</h6></li>
									<li className="nav-link html5"><h4>HTML5</h4></li>
									{newList}
									<li className="nav-link html5"><h4>Video</h4></li>
									{videoList}
								</ul>
							</nav>
							<span style={{width:'10em'}}></span>
							<iframe ref="remoteFrame"
							title="video"
								key={`${this.state.width}x${this.state.height}`}
								src={`../dist/${this.state.width}x${this.state.height}/index.html`}
								width='980'
								height='300'
								className="align-self-center">
							</iframe>
						</div>
					</div>
				</div>
				)
		}
	};
}
export default Main;
 //<Iframe width={this.state.width} height={this.state.height}/>