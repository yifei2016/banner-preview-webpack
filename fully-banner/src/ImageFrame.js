import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ImageFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
      height: this.props.data.height,
      clicktag: this.props.data.clicktag_type,
      filesize: this.props.data.filesize,
      modifier: this.props.data.modifier,
      className: '',
      mode: this.props.mode,
      modeStyle: this.props.modeStyle
      // frameWidth: this.props.data.width > this.props.data.height ? 980 : 300,
      // frameHeight: this.props.data.width > this.props.data.height ? 300 : 980
		};
  }
  componentDidMount() {
    if (this.state.width > this.state.height) {
      this.setState({
        className: 'liggandeBanner'
      }) 
    } else {
      this.setState({
        className: 'standBanner' 
      }) 
    }
  }
  render() {
    var iframSource = `${process.env.PUBLIC_URL}/dist/${this.state.width}x${this.state.height}/index.html`;
    var imageSource = `${process.env.PUBLIC_URL}/dist/fallbacks/${this.state.width}x${this.state.height}.png`;
    if (this.state.modifier) {
      iframSource = `${process.env.PUBLIC_URL}/dist/${this.state.width}x${this.state.height}-${this.state.modifier}/index.html`;
      imageSource = `${process.env.PUBLIC_URL}/dist/fallbacks/${this.state.width}x${this.state.height}-${this.state.modifier}.png`;
    }
    return (
      <div className={this.state.className} >
        <div className="textDiv" style={{width: this.state.width}}>
        <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={iframSource}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
          >
          </iframe>
          <div className="textField" >
            <p>{this.state.width}x{this.state.height}-{this.state.modifier} <span className="kbMargin">html</span>
              <span className="kbMargin">-</span>
              <span className="kbMargin">{this.state.filesize}</span><span className="kbMargin">kb</span>
              <span className="kbMargin">-</span>
              {this.state.clicktag}</p>
          </div>
        </div>
        <div style={{width: this.state.width}}>
          <img
            width={this.state.width}
            height={this.state.height}
            src={imageSource}
            alt={`${this.state.width}x${this.state.height}`} />
          <div className="textField">
            <p>{this.state.width}x{this.state.height}-{this.state.modifier}<span className="kbMargin"> fallback </span>
              <span className="kbMargin">-</span>
              <span className="kbMargin">{this.state.filesize}</span>
              <span>kb</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageFrame;