import React, { Component } from 'react';
// import './App.css';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import GifLink from './GifLink';
import axios from 'axios';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      modeStyle: this.props.modeStyle,
      toggoleSideBar: this.props.toggoleSideBar,
      aData: this.props.aData,
      sections: this.props.aData.sections //object
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
       Object.keys(this.state.sections) // ['video','html','gif']
          .forEach((key, index) => {
            this.state.sections[key].forEach((_data,index) => {
              var linkComponent = this.refs[`${key}${index}`];
              if(linkComponent) 
                linkComponent.setMode(this.state.modeStyle)
              })
          })
      })
  }

  toggle(){
    var a = this.refs.sidebar;
    a.classList.toggle("toggle");
  }

	render() {	  
    const client = this.state.aData.client;
    const project = this.state.aData.project;

    //this.state.sections is object of sections in json file
    var sections = Object.keys(this.state.sections) // ['video','html','gif']
    //filter to check if we have a property that has no value 
      .filter(key => {
        return this.state.sections[key].length > 0 // check key's length, keep all keys which have length
      })
       // go through all keys that have length, go though all existing keys.
      .map((key, index) => {
        //go though keys'value 
        var items = this.state.sections[key].map((data, index) => {
          var ref = `${key}${index}`;
          console.log('ref!!!!!!!!',ref);
          //check keys in section json to show key links
          switch (key) {
            case "html":
              return <ImageLink ref={ref} key={index} image={data} toggoleSideBar={this.state.toggoleSideBar} />
              break;
            case "video":
              return <VideoLink ref={ref} key={index} video={data} toggoleSideBar={this.state.toggoleSideBar} />
              break;
            case "gif":
              return <GifLink ref={ref} key={index} gif={data} toggoleSideBar={this.state.toggoleSideBar} />
              break;
          }
        });
        //items is array of links which is in keys. 
        return (
          <div>
            <li className="nav-link menu-item html5"><h4>{key.capitalize()}</h4></li>
            {items}
          </div>
        )
      });
      //sections is array of divs
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
            {sections}
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;
 