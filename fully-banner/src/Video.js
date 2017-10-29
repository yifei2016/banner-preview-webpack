import React, { Component } from "react";
import "./App.css";

class Video extends Component {
  constructor(props){
    super(props);
    this.clickId = this.clickId.bind(this);
  }
  clickId(){
    this.setState({
      id: this.props.eachPost.vimeo_id
   }, (x)=>{
     this.props.set(this.props.eachPost.vimeo_id);
   })
  }
	render() {
		if (this.props.eachPost.title !== undefined) {
			return (
				<li className="nav-link">
					<button  onClick={this.clickId}>
						{this.props.eachPost.title}
					</button>
				</li>
			);
		} else {
			return "";
		}
	}
}
export default Video;
