import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class HtmlFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
      height: this.props.data.height,
      clicktag: this.props.data.clicktag_type,
      filesize: this.props.data.filesize,
      modifier: this.props.data.modifier,
      checkFallback: this.props.fallback,
      className: '',
      modeStyle: this.props.modeStyle
      // frameWidth: this.props.data.width > this.props.data.height ? 980 : 300,
      // frameHeight: this.props.data.width > this.props.data.height ? 300 : 980
		};
  }
  componentDidMount() {
    if (this.state.width > this.state.height) {
      this.setState({
        className: 'banner-landscape'
      }) 
    } else {
      this.setState({
        className: 'banner-portrait' 
      }) 
    }
  }
  render() {
    var iframSource;
    var imageSource;
  
    if(this.state.checkFallback === true && !this.state.modifier){
      iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}/index.html`;
      imageSource = `${process.env.PUBLIC_URL}/banners/fallbacks/${this.state.width}x${this.state.height}.png`;
    }
    if (this.state.checkFallback === true && this.state.modifier) {
      iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}-${this.state.modifier}/index.html`;
      imageSource = `${process.env.PUBLIC_URL}/banners/fallbacks/${this.state.width}x${this.state.height}-${this.state.modifier}.png`;
    }
    if(this.state.checkFallback === false && this.state.modifier){
      iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}-${this.state.modifier}/index.html`;
      imageSource = null;
    }
    if(this.state.checkFallback === false && !this.state.modifier){
      iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}/index.html`;
      imageSource = null;
    }
    // there is no fallbacks, show html just
    if (this.state.checkFallback === false) {
      return (
        <div className={this.state.className} >
          <div className="banner__wrap" style={{ width: this.state.width }}>
            <iframe ref="remoteFrame"
              title="image"
              key={`${this.state.width}x${this.state.height}`}
              src={iframSource}
              width={this.state.width}
              height={this.state.height}
              frameBorder="0"
              className="banner"
            >
            </iframe>
            <div className="banner__description">
              {this.state.width}x{this.state.height} -{this.state.modifier} <span className="kbMargin">html</span><br />
              <span className="kbMargin">{this.state.filesize}</span><span className="kbMargin">kb</span>
              <span className="kbMargin">-</span>
              {this.state.clicktag}
            </div>
          </div>
        </div>
      )
    }
    //there is fallbacks, show html and fallbacks
    return (
      <div className={this.state.className} >
        <div className="banner__wrap" style={{width: this.state.width}}>
        <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={iframSource}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
            className="banner"
          >
          </iframe>
          <div className="banner__description">
            {this.state.width}x{this.state.height} -{this.state.modifier} <span className="kbMargin">html</span><br/>
            <span className="kbMargin">{this.state.filesize}</span><span className="kbMargin">kb</span>
            <span className="kbMargin">-</span>
            {this.state.clicktag}
          </div>
        </div>
        <div className="fallback__wrap" style={{width: this.state.width}} >
          <img
            width={this.state.width}
            height={this.state.height}
            src={imageSource}
            className="banner"
            alt={`${this.state.width}x${this.state.height}`} 
            />
          <div className="banner__description">
            {this.state.width}x{this.state.height}  - {this.state.modifier}<span className="kbMargin"> fallback </span>
            <br/>
            <span className="kbMargin">{this.state.filesize}</span>
            <span>kb</span>
          </div>
        </div>
      </div>
    )
  }
}

export default HtmlFrame;