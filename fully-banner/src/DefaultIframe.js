import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HtmlFrame from './HtmlFrame';
import VideoFrame from './VideoFrame';
import GifFrame from './GifFrame';
import Blank from './Blank';
import axios from 'axios';


class DefaultIframe extends Component {
  constructor(props){
		super(props);
    this.state = {
       aData: this.props.data
		};
  }
  // componentDidMount() {
  //   axios.get(`${process.env.PUBLIC_URL}/data/project.json`)
  //     .then(res => {
  //       const aData = res.data;
  //       console.log('11111',aData)
  //       this.setState({ 
  //         aData: aData
  //       });
  //     });
  // }
  
  render() {
    //this.state.sections is object of sections in json file
    var items;
    if(Object.keys(this.state.aData).length < 0){
      return false;
    }
    console.log('++++++2', this.state.aData.sections)
    //  return <div></div>
    var sections = Object.keys(this.state.aData.sections) // ['video','html','gif']
    //filter to check if we have a property that has no value 
    .filter(key => {
      return this.state.aData.sections[key].length > 0 // check key's length, keep all keys which have length
    })
    // go through all keys that have length, go though all existing keys.
    .map((key, index) => {
      //go though keys'value 
      this.state.aData.sections[key].forEach((data, index) => {
        console.log('data###',data)
        if ('master' in data) return items = `<${key.capitalize()}Frame/>`;
         return items = (<Blank />);
      })
    })
    console.log('items@@@@@',items)
    return <div>{items}</div>
  }
}

export default DefaultIframe;