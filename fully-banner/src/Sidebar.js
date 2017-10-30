import React, { Component } from 'react';
// import './App.css';
import aData from './project';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import {getMode, getModeStyle} from './modeHelper';

class Sidebar extends Component {
	constructor(props){
		super(props);
		
	}
	render() {	
		let k = 1;
		const imageList = aData.images.map(image => {return <ImageLink key={k++}  image={image} />});
		const videoList = aData.videos.map(video =>  {return <VideoLink key={k++}  video={video} />});
		const client = aData.client;
		const project = aData.project;
    return(
      <div className="d-flex justify-content-start" style={ getModeStyle()}>
        <ul style={{padding: 0}}>
          <li className="nav-link"></li>
          <li className="nav-link"><h4>Client</h4></li>
          <li className="nav-link"><p>{client}</p></li>
          <li className="nav-link"><h4>Project</h4></li>
          <li className="nav-link"><h6>{project}</h6></li>
          <li className="nav-link html5"><h4>HTML5</h4></li>
          {imageList}
          <li className="nav-link html5"><h4>Video</h4></li>
          {videoList}
        </ul>
      </div>

      )
  }
}
export default Sidebar;
 //<Iframe width={this.state.width} height={this.state.height}/>