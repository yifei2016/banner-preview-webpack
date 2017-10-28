import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import aData from './project';
import Post from './Post';
//import Iframe from './Iframe'; !!! NO need to use this.
import Navbar from './Navbar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			width: 980, // default 
			height: 300 // default
		};
		this.setSize = this.setSize.bind(this);
	}
	setSize(width,height){
		var newSize = {width: width,height: height}
		this.setState(newSize,function(){
				this.refs.remoteFrame.contentWindow.location.reload(true); // this is the key to solve the iFrame reload issue.
			});
	}
	render() {	
		let k = 1;
		const newList = aData.sections.map(section => section.posts.map( post => {return <Post key={k++} set={this.setSize} eachPost={post} />}));
		const client = aData.client
		const project = aData.project
		return(
			<div>
				<Navbar />
				<div className="container-fluid">
					<div className="row landing">
						<div className="col-ls-3 sidebar">
							<nav>
								<ul className=" nav-pills nav-stacked">
									<li className="nav-link"></li>
									<li className="nav-link"><h4>Client</h4></li>
									<li className="nav-link"><p>{client}</p></li>
									<li className="nav-link"><h4>Project</h4></li>
									<li className="nav-link"><h6>{project}</h6></li>
									<li className="nav-link html5"><h4>HTML5</h4></li>
									{newList}
									<li className="nav-link html5"><h4>Video</h4></li>
								</ul>
							</nav>
						</div>
						<div className="col-ls-6 frame mai">
							<iframe ref="remoteFrame"
								key={`${this.state.width}x${this.state.height}`}
								src={`../dist/${this.state.width}x${this.state.height}/index.html`}
								width='980'
								height='300'>
							</iframe>
						</div>
					</div>
				</div>
			</div>
			)
	};
}
export default App;
 //<Iframe width={this.state.width} height={this.state.height}/>