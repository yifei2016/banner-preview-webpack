import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { getMode, getModeStyle } from './modeHelper';
import { getMode } from './modeHelper';

class ImageFrame extends Component {
  constructor(props){
		super(props);
    this.state = {
			width: this.props.data.width,
      height: this.props.data.height,
      clicktag: this.props.data.clicktag_type,
      filesize: this.props.data.filesize,
      className: ''
      // frameWidth: this.props.data.width > this.props.data.height ? 980 : 300,
      // frameHeight: this.props.data.width > this.props.data.height ? 300 : 980
		};
  }
  componentDidMount() {
    if (this.state.width > this.state.height) {
      this.setState({
        className: 'liggandeBanner'
        // margin: {marginTop: '1em'}
      }) 
    } else {
      this.setState({
        className: 'standBanner' ,
        // margin: {marginLeft: '1em'}
      }) 
    }
  }
  render() {
    if(getMode() === 'cleanMode'){
      return (
        <div className={this.state.className} style={{marginTop:'2.1em', display:'flex'}}>
          <div>
            <iframe ref="remoteFrame"
              title="image"
              key={`${this.state.width}x${this.state.height}`}
              src={`../dist/${this.state.width}x${this.state.height}/index.html`}
              width={this.state.width}
              height={this.state.height}
              frameBorder="0"
            >
            </iframe>
            <div className="textField text" >
              <p>{this.state.width}x{this.state.height} <span className="kbMargin">html</span> <span className="kbMargin">-</span>
                <span className="kbMargin">{this.state.filesize}</span><span className="kbMargin">kb</span> <span className="kbMargin">-</span>
                {this.state.clicktag}</p>
            </div>
          </div>
          <div>
            <img
              width={this.state.width}
              height={this.state.height}
              src={`../dist/fallbacks/${this.state.width}x${this.state.height}.png`}
              alt={`${this.state.width}x${this.state.height}`} />
            <div className="textField text">
              <p>{this.state.width}x{this.state.height}<span className="kbMargin"> fallback </span><span className="kbMargin">-</span>
                <span className="kbMargin">{this.state.filesize}</span>
                <span>kb</span>
              </p>
            </div>
          </div>
        </div>
      )
    }else{
        return (
          <div className={this.state.className} style={{flexGrow: '0.5'}}>
            <svg  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 100 100"><defs>
              <style></style>
            </defs><title>article</title><rect className="article_a" width="100" height="43" /><rect className="article_a" y="66" width="49" height="34" />
              <rect className="article_a" x="51" y="66" width="49" height="34" /><rect className="article_a" x="2" y="45" width="96" height="4" /><rect className="article_a" x="2" y="50"
                width="79" height="4" />
              <rect className="article_b" x="2" y="92" width="39" height="4" />
              <rect className="article_b" x="53" y="92" width="39" height="4" /><rect className="article_a" x="2" y="56" width="6" height="1" /><rect className="article_a" x="9" y="56"
                width="42" height="1" />
            </svg>
            <div style={{display:"flex", justifyContent: "center"}}>
              <iframe ref="remoteFrame"
                title="image"
                key={`${this.state.width}x${this.state.height}`}
                src={`../dist/${this.state.width}x${this.state.height}/index.html`}
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
}

export default ImageFrame;