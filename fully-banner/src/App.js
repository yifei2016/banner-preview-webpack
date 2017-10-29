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

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
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
      <div style={window.getModeStyle()}>
        <div style={{padding: "0 3em"}}>
          <Navbar />
          <div className="d-flex flex-row">
            <Sidebar />
            <Router>
              <div className="align-self-center" style={{ margin: "auto" }}>
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