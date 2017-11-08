import React, { Component } from 'react';
// import './App.css';
import aData from './project';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import GifLink from './GifLink';
import { getModeStyle,getClientStyle } from './modeHelper';
// import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      modeStyle: this.props.modeStyle,
      clientStyle: this.props.clientStyle
    }
    this.toggle = this.toggle.bind(this);
    this.setMode = this.setMode.bind(this);
  }
  
  setMode(modeStyle, clientStyle){
    let k = 1;
    console.log(modeStyle);
     this.setState({
      modeStyle: modeStyle,
      clientStyle: clientStyle
     },()=>{
       aData.html.forEach((image, index)=>{
         this.refs[`image${index}`].setMode(this.state.modeStyle)
        })
        aData.video.forEach((video, index)=>{
          this.refs[`video${index}`].setMode(this.state.modeStyle)
         })
         aData.gif.forEach((gif, index)=>{
          this.refs[`gif${index}`].setMode(this.state.modeStyle)
         })
     })
  }
  toggle(){
    var a = this.refs.sidebar;
    a.classList.toggle("toggle");
  }
	render() {	
    var imageList = aData.html.map((image,index) => { return <ImageLink modeStyle={this.state.modeStyle} ref={`image${index}`} key={index} image={image} /> });
    var videoList = aData.video.map((video,index) => { return <VideoLink  modeStyle={this.state.modeStyle} ref={`video${index}`} key={index} video={video} /> });
    var gifList = aData.gif.map((gif,index) => { return <GifLink modeStyle={this.state.modeStyle} ref={`gif${index}`} key={index} gif={gif} /> });
		const client = aData.client;
    const project = aData.project;
      return (
        <div className="sidebar toggle" ref="sidebar" style={this.state.modeStyle}>
          <div className="d-flex justify-content-start">
            <ul>
              <li className="nav-link nav-link--info menu-item" style={this.state.clientStyle}>
                <div className="nav-link menu-item"><strong>Client</strong></div>
                <div className="nav-link menu-item font"><p>{client}</p></div>
                <div className="nav-link menu-item"><strong>Project</strong></div>
                <div className="nav-link menu-item font"><p>{project}</p></div>
              </li>
              <li className="nav-link menu-item html5"><h4>HTML5</h4></li>
              {imageList}
              <li className="nav-link html5"><h4>Video</h4></li>
              {videoList}
              <li className="nav-link html5"><h4>Gif</h4></li>
              {gifList}
            </ul>
          </div>
        </div>
      )
    }
  }

export default Sidebar;
 