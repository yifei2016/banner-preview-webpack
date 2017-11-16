import React, { Component } from 'react';
// import './App.css';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import GifLink from './GifLink';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      modeStyle: this.props.modeStyle,
      toggoleSideBar: this.props.toggoleSideBar,
      aData: this.props.aData
    }
    this.toggle = this.toggle.bind(this);
    this.setMode = this.setMode.bind(this);
  }
  //setMode(1,2) function is to change links(image links, video links, gif links) with mode style(client mode, article mode)
  setMode(modeStyle, clientStyle){
     this.setState({
      modeStyle: modeStyle,
      clientStyle: clientStyle
     },()=>{
       this.state.aData.html.forEach((image, index) => {
         this.refs[`image${index}`].setMode(this.state.modeStyle)
       })
       this.state.aData.video.forEach((video, index) => {
         this.refs[`video${index}`].setMode(this.state.modeStyle)
       })
       this.state.aData.gif.forEach((gif, index) => {
         this.refs[`gif${index}`].setMode(this.state.modeStyle)
       })
     })
  }
  toggle(){
    var a = this.refs.sidebar;
    a.classList.toggle("toggle");
  }
	render() {	
    var imageList = this.state.aData.html.map((image,index) => { return <ImageLink  modeStyle={this.state.modeStyle} ref={`image${index}`} 
    key={index} image={image} toggoleSideBar={this.state.toggoleSideBar}/> });
    var videoList = this.state.aData.video.map((video,index) => { return <VideoLink 
    modeStyle={this.state.modeStyle} ref={`video${index}`} key={index} video={video} toggoleSideBar={this.state.toggoleSideBar} /> });
    var gifList = this.state.aData.gif.map((gif,index) => { return <GifLink 
    modeStyle={this.state.modeStyle} ref={`gif${index}`} key={index} gif={gif} toggoleSideBar={this.state.toggoleSideBar} /> });
		const client = this.state.aData.client;
    const project = this.state.aData.project;
      return (
        <div className="sidebar toggle" ref="sidebar">
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
 