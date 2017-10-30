import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {getMode, getModeStyle} from './modeHelper';

class ImageFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
      height: this.props.data.height,
      className: '',
      margin: ''
      // frameWidth: this.props.data.width > this.props.data.height ? 980 : 300,
      // frameHeight: this.props.data.width > this.props.data.height ? 300 : 980
		};
  }
  componentDidMount() {
    if (this.state.width > this.state.height) {
      this.setState({
        className: 'd-flex flex-column',
        margin: "2em 0"
      }) 
    } else {
      this.setState({
        className: 'd-flex justify-content-around',
        margin: "0 2em"
      }) 
    }
  }
  render() {
    if(getMode() === 'cleanMode'){
      return (
        <div className={this.state.className} >
          <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={`../dist/${this.state.width}x${this.state.height}/index.html`}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
            className="align-self-center"
          >
          </iframe>
          <img style={{margin: `${this.state.margin}`}} src={`http://via.placeholder.com/${this.state.width}x${this.state.height}`} />
        </div>
      )
    }else{
      return (
        <div  className={this.state.className}>
        <svg style={{margin: `${this.state.margin}`}} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 100 100"><defs>
        <style></style>
        </defs><title>article</title><rect className="article_a" width="100" height="43"/><rect className="article_a" y="66" width="49" height="34"/>
        <rect className="article_a" x="51" y="66" width="49" height="34"/><rect className="article_a" x="2" y="45" width="96" height="4"/><rect className="article_a" x="2" y="50" 
        width="79" height="4"/>
        <rect className="article_b" x="2" y="92" width="39" height="4"/>
        <rect className="article_b" x="53" y="92" width="39" height="4"/><rect className="article_a" x="2" y="56" width="6" height="1"/><rect className="article_a" x="9" y="56" 
        width="42" height="1"/></svg>
          <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={`../dist/${this.state.width}x${this.state.height}/index.html`}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
            className="align-self-center">
          </iframe>
          <svg style={{margin: `${this.state.margin}`}} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 100 100"><defs>
        <style></style>
        </defs><title>article</title><rect className="article_a" width="100" height="43"/><rect className="article_a" y="66" width="49" height="34"/>
        <rect className="article_a" x="51" y="66" width="49" height="34"/><rect className="article_a" x="2" y="45" width="96" height="4"/><rect className="article_a" x="2" y="50" 
        width="79" height="4"/>
        <rect className="article_b" x="2" y="92" width="39" height="4"/>
        <rect className="article_b" x="53" y="92" width="39" height="4"/><rect className="article_a" x="2" y="56" width="6" height="1"/><rect className="article_a" x="9" y="56" 
        width="42" height="1"/></svg>
        </div>
      )
    }   
  }
}

export default ImageFrame;