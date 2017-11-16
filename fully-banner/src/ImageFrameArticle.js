import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ImageFrameArticle extends Component {
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
      logoStyle: this.props.logoStyle
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
    var iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}/index.html`;
    // var imageSource = `${process.env.PUBLIC_URL}/banners/fallbacks/${this.state.width}x${this.state.height}.png`;
    if (this.state.modifier) {
      iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}-${this.state.modifier}/index.html`;
      // imageSource = `${process.env.PUBLIC_URL}/banners/fallbacks/${this.state.width}x${this.state.height}-${this.state.modifier}.png`;
    }
    return (
      <div className={this.state.className}>
        <svg style={{fill: '#0A2A4F'}} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" 
        height="100vh" viewBox="0 0 100 100">
          <defs>
            <style></style>
          </defs><title>article</title>
          <rect className="article_a" width="100" height="43" /><rect className="article_a" y="66" width="49" height="34" />
          <rect className="article_a" x="51" y="66" width="49" height="34" />
          <rect className="article_a" x="2" y="45" width="96" height="4" /><rect className="article_a" x="2" y="50"
            width="79" height="4" />
          <rect className="article_b" x="2" y="92" width="39" height="4" />
          <rect className="article_b" x="53" y="92" width="39" height="4" />
          <rect className="article_a" x="2" y="56" width="6" height="1" /><rect className="article_a" x="9" y="56"
            width="42" height="1" />
        </svg>
        <div className="iframeStyle">
          <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={iframSource}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
          >
          </iframe>
        </div>
      </div>
    )
  }
}

export default ImageFrameArticle;