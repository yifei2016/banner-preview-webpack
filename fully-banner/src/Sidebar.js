import React, { Component } from 'react';
// import './App.css';
import aData from './project';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import GifLink from './GifLink';
import {getMode, getModeStyle,getClientStyle} from './modeHelper';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideBarPicker: this.props.sideBarPicker
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    this.setState({
       sideBarPicker: this.refs.sidebar
    },()=>{console.log(this.state.sideBarPicker)})
  }
  toggle(){
    var a = this.refs.sidebar;
    //a.classList.toggle("sidebar");
    a.classList.toggle("toggle");
  }
	render() {	
		let k = 1;
		const imageList = aData.html.map(image => {return <ImageLink key={k++}  image={image} />});
    const videoList = aData.video.map(video =>  {return <VideoLink key={k++}  video={video} />});
    const gifList = aData.gif.map(gif =>  {return <GifLink key={k++}  gif={gif} />});
		const client = aData.client;
    const project = aData.project;
      return (
         <div className="sidebar toggle " ref="sidebar"  style={getModeStyle()}>
         <div className="d-flex justify-content-start" style={getModeStyle()}>
           <ul>
             <li className="nav-link menu-item" style={getClientStyle()}>
             <li className="nav-link menu-item font"><h4>Client</h4></li>
             <li className="nav-link menu-item font"><h6>{client}</h6></li>
             <li className="nav-link menu-item font"><h4>Project</h4></li>
             <li className="nav-link menu-item font"><h6>{project}</h6></li>
             </li>
             <li className="nav-link menu-item html5 font">
               <h4 className="rubrik">HTML5</h4>
               </li>
             {imageList}
             <li className="nav-link html5 font"><h4 className="rubrik">Video</h4></li>
             {videoList}
             <li className="nav-link html5 font"><h4>Gif</h4></li>
             {gifList}
           </ul>
         </div>
       </div>
      )
    }
  }

export default Sidebar;
 