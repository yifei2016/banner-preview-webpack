import React, { Component } from 'react';
// import './App.css';
import aData from './project';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import {getMode, getModeStyle} from './modeHelper';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSidebar: this.props.sidebar
    }
  }
	render() {	
		let k = 1;
		const imageList = aData.images.map(image => {return <ImageLink key={k++}  image={image} />});
		const videoList = aData.videos.map(video =>  {return <VideoLink key={k++}  video={video} />});
		const client = aData.client;
    const project = aData.project;
    if (this.state.showSidebar === false) {
      return (
        <div className="" id="navbarSupportedContent"  style={getModeStyle()}>
          <div className="d-flex justify-content-start" style={getModeStyle()}>
            <ul style={{ padding: 0 }}>
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
        </div>
      )
    }else{
      return (
        <div className="side d-flex justify-content-start" style={getModeStyle()}>
            <ul style={{ padding: 0 }}>
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
}
export default Sidebar;
 