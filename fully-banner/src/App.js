import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import aData from './project.js';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import VideoFrame from './VideoFrame';
import ImageFrame from './ImageFrame';
import ImageLink from './ImageLink';
import VideoLink from './VideoLink';
import {getMode, getModeStyle} from './modeHelper';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       sideBarPicker: ''
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar(){
    var a  = this.refs.sidebar;
    a.toggle();
  }
  render() {
    let k = 1;
    const videoRoutes = aData.video.map(video =>
      <Route  key={k++} path={`/${video.vimeo_id}`} render={(props) => 
        <VideoFrame data={video}/>
      } />
    )
    const imageRoutes = aData.html.map(image =>
      <Route key={k++} path={`/${image.width}x${image.height}`} render={(props) => 
        <ImageFrame data={image}/>
      } />
    )
		const imageList = aData.html.map(image => {return <ImageLink key={k++}  image={image} />});
		const videoList = aData.video.map(video =>  {return <VideoLink key={k++}  video={video} />});
		const client = aData.client;
    const project = aData.project;
    return (
      <div className="main" style={getModeStyle()}>
        <Navbar onHambugerClick={this.toggleSidebar}/>      
        <div className="main-content"  >
          <Sidebar ref="sidebar" />
          <Router>
            <div className="" style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
              {imageRoutes}
              {videoRoutes}
            </div>
            {/* <div>
              <Route path="/222507866" component={VideoICAFrame} />
              <Route path="/239824287" component={VideoLoremFrame} />
            </div> */}
          </Router>
        </div>
      </div>
    )
  }
}

export default App;