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
import {getMode, getModeStyle} from './modeHelper';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSidebar: false
    }
  }
  render() {
    let key = 1;
    const videoRoutes = aData.videos.map(video =>
      <Route  key={key++} path={`/${video.vimeo_id}`} render={(props) => 
        <VideoFrame data={video}/>
      } />
    )
    const imageRoutes = aData.images.map(image =>
      <Route key={key++} path={`/${image.width}x${image.height}`} render={(props) => 
        <ImageFrame data={image}/>
      } />
    )
    return (
      <div className="main" style={getModeStyle()}>
        <div  className="mobileIframe">
          <Navbar sidebar = {this.state.showSidebar}/>
          <div className="d-flex flex-row">
            <Sidebar sidebar = {this.state.showSidebar}/>
            <Router>
              <div className="align-self-center" style={{ margin: "auto", maxWidth: '100%', overflow: 'auto' }}>
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
      </div>
    )
  }
}

export default App;