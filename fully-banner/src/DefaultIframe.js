import React, { Component } from 'react';
import './App.css';

class DefaultIframe extends Component {
  constructor(props){
		super(props);
		this.state = {
      width: '980',
      height: '300',
      clicktag: 'Adform',
      filesize: '150',
      className: 'liggande-banner'
		};
	}
  render() {
    var iframSource = `${process.env.PUBLIC_URL}/banners/${this.state.width}x${this.state.height}/index.html`;
    var imageSource = `${process.env.PUBLIC_URL}/banners/fallbacks/${this.state.width}x${this.state.height}.png`;
    return (
      <div style={{width: "980"}}>
        <div className="banner__wrap" style={{width: "980px"}}>
          <iframe ref="remoteFrame"
            title="image"
            key={`${this.state.width}x${this.state.height}`}
            src={iframSource}
            width={this.state.width}
            height={this.state.height}
            frameBorder="0"
          >
          </iframe>
          <div className="banner__description" >
              {this.state.width}x{this.state.height} <span className="kbMargin">html</span>
              <span className="kbMargin">-</span>
              <span className="kbMargin">{this.state.filesize}</span><span className="kbMargin">kb</span>
              <span className="kbMargin">-</span>
              {this.state.clicktag}
          </div>
        </div>
        <div className="fallback__wrap" style={{width: "980px"}}>
          <img
            width={this.state.width}
            height={this.state.height}
            src={imageSource}
            alt={`${this.state.width}x${this.state.height}`} />
          <div className="banner__description">
            {this.state.width}x{this.state.height}<span className="kbMargin"> fallback </span>
            <span className="kbMargin">-</span>
            <span className="kbMargin">{this.state.filesize}</span>
            <span>kb</span>
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultIframe;
