import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoFrame from './VideoFrame';
import HtmlFrame from './HtmlFrame';
import HtmlFrameArticle from './HtmlFrameArticle';
import GifFrame from './GifFrame';
import axios from 'axios';
import ModeColor from './ModeColor.js';
import 'core-js/fn/array/find';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'cleanMode',
      aData: {},
      modeBoxBorder: {
        border: '2px solid white'
      },
      modeStyle: {
        backgroundColor: '#0A2A4F',
        color: 'white'
      },
      sideBarMode: {
        backgroundColor: 'rgb(12, 37, 67)',
        color: 'white'
      },
      cleanModeButtonStyle: ModeColor.ACTIVE_BUTTON_STYLE,
      articleModeButtonStyle: ModeColor.BUTTON_STYLE,
      logoStyle: {
        fill: 'white'
      }
    }
    // this.fallback = false;
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.setModeColor = this.setModeColor.bind(this);
  }
  //url, index.html get all js, so do not need to go back to data folder, they are in same folder
  componentDidMount(){
    axios.get('./../data/project.json')
      .then(res => {
        const aData = res.data;
        document.title = aData.project;
        this.setState({ 
          aData: aData
        });
        
        // not dynamically, will cause problem if we check with aData.html, instead, we check it with 
        // key in obj
        //this.hasHtml = aData.html ? true : false;
      });
  }
  //toggle sidebar and toggle button exterior after click
  toggleSidebar(){
    var a  = this.refs.sidebar;
    this.refs.openmenu.classList.toggle("menu-open");
    //a.toggle function is to toggle button exterior. a.toggle function is in sidebar component, we got sidebar component by writing this.refs.sidebar
    a.toggle();
  }
  //update state according to different mode
  setModeColor(ev, mode) {
    var newModeStyle = {};
    var newlogoStyle = {};
    var newSideBar = {};
    var newmodeBoxBorder = {};
    var newCleanModeButtonStyle ;
    var newArticleModeButtonStyle ;
    var newClientStyle = {};
    if (mode === 'articleMode') {
      newModeStyle = ModeColor.ARTICLEMODECOLOR;
      newlogoStyle.fill = '#0A2A4F';
      newSideBar = ModeColor.ARTICLEMODESIDEBAR;
      newmodeBoxBorder.border = '2px solid #0A2A4F';
      newClientStyle = ModeColor.ARTICLEMODECLIENTCOLOR;
      newArticleModeButtonStyle = ModeColor.ACTIVE_BUTTON_STYLE;
      newCleanModeButtonStyle = ModeColor.BUTTON_STYLE;
    }else{
      newModeStyle = ModeColor.CLEANMODECOLOR;
      newlogoStyle.fill = 'white';
      newSideBar = ModeColor.CLEANMODECOLOR;
      newmodeBoxBorder.border = '2px solid white';
      newClientStyle = ModeColor.CLEANMODECLIENTCOLOR;
      newArticleModeButtonStyle = ModeColor.BUTTON_STYLE;
      newCleanModeButtonStyle = ModeColor.ACTIVE_BUTTON_STYLE;
    }
    this.setState({
      mode: mode,
      modeStyle: newModeStyle,
      clientMode: newClientStyle,
      sideBarMode: newSideBar,
      logoStyle: newlogoStyle,
      modeBoxBorder: newmodeBoxBorder,
      cleanModeButtonStyle: newCleanModeButtonStyle,
      articleModeButtonStyle: newArticleModeButtonStyle
    }, () => {
      this.refs.sidebar.setMode(this.state.sideBarMode, this.state.clientMode);
    }
  )}
  render() {
    const aData = this.state.aData;
    //check if obj is empty or not
    if (Object.keys(aData).length <= 0) {
      return false;
    }
    console.log('sdf6@!')
    let k = 1;
    var htmlRoutes;
    var videoRoutes;
    var gifRoutes;
    var defaultRoute = undefined;
    var sectionHasMaster;

    const sectionKeys = Object.keys(this.state.aData.sections); 
    
    for(let n = 0; n < sectionKeys.length; n++) {
      let key = sectionKeys[n];
      let masterObject = this.state.aData.sections[key].find(x=>{
        return ('master' in x && x.master === true)
      });
      
      if(masterObject !== undefined){
        switch (key) {
          case 'html':
         
            defaultRoute = <Route path={'/'} exact render={(props) => {
              if (this.state.mode === 'cleanMode')
                return <HtmlFrame data={masterObject} modeStyle={this.state.modeStyle} />
              else
                return <HtmlFrameArticle data={masterObject} modeStyle={this.state.modeStyle} />
            }}/>
            break;
          case 'video':
          
            defaultRoute = <Route path={'/'} exact render={(props) =>
              <VideoFrame data={masterObject} />
            }/>
            break;
          case 'gif':
         
            defaultRoute = <Route path={'/'} exact render={(props) =>
              <GifFrame data={masterObject} />
            }/>
            break;
          default:
            break;
        }
      }   
    }
    //set default route
  
    // set each route
    Object.keys(this.state.aData.sections).forEach((key, index) => {
      var dataArray = this.state.aData.sections[key];
      switch (key) {
        case 'html':
          htmlRoutes = dataArray.map(html => {
            var path = `/${html.width}x${html.height}`;
            if (html.modifier) {
              path = `/${html.width}x${html.height}-${html.modifier}`
            }
            return <Route key = {k++} path = {path} render = {
              (props) => {
                if (this.state.mode === 'cleanMode')
                  return <HtmlFrame data={html} modeStyle={this.state.modeStyle} />
                else
                  return <HtmlFrameArticle data={html} modeStyle={this.state.modeStyle} />}
                }/>
          })
          break;
        case 'video':
          videoRoutes = dataArray.map(video => {
            return <Route key={k++} path={`/${video.vimeo_id}`} render={(props) =>
              <VideoFrame data={video} />
            } />
          })
          break;
        case 'gif':
          gifRoutes = dataArray.map(gif => {
            return <Route key={k++} path={`/gif/${gif.width}x${gif.height}`} render={(props) =>
              <GifFrame data={gif} />
            } />
          })
          break;
        default:
          break;
      }
   })
   
    //check if has gif, if has gif, render a route, and render a component, in GifFrame component, render gif.
    return (
      <Router>
      <div className="main" style={this.state.modeStyle}>
        <Sidebar aData={this.state.aData} toggoleSideBar={this.toggleSidebar} modeStyle={this.state.sideBarMode} ref="sidebar" />

        <div style={this.state.modeStyle} className="main-content" >
          <div className="navigation">
            <button type="button" className="button button--nav " ref="openmenu" id="openmenu"
              onClick={this.toggleSidebar}>
              <span>
                <div className="button--nav__line"></div>
                <div className="button--nav__line"></div>
                <div className="button--nav__line"></div>
              </span>
            </button>
           
            <a href="https://fullystudios.se/">
              <svg style={this.state.logoStyle} className="image" id="img" xmlns="http://www.w3.org/2000/svg" width="463.13" height="431.42"
                viewBox="0 0 463.13 431.42"><title>Fully Studios</title>
                <path
                  d="M443.76,376a96,96,0,0,0-12.61,1.72c-2.06-14.94-4.16-33.67-6.55-57,16.08-30.46,27.06-71.47,27.06-95.73,0-9-5-14.87-13.24-14.87-12.67,0-28,9.81-35.39,56-2.75,17.2-4.4,39.43-4.4,68.08,0,2,0,4,0,6-2.81,2.27-5.58,3.51-8.25,3.43-16.7,0-13.23-39.84-11.58-58.31,2-22,6.22-44.09,7.72-49.6s-21.49,11.22-28.93,23.37c-5.37,8.76-7.91,16.42-9.46,35.07a183.32,183.32,0,0,0,.54,32.42c-.86,2.64-3.17,4.15-4.83,4.15-8.42,0-14.41-27.7-11.55-61.6,28.4-34.65,54.94-87.27,54.94-118.54,0-16.05-6.19-22.18-20.16-22.18-25.36,0-53.56,65.06-63.15,129.82a192.65,192.65,0,0,0-2.18,25.63,7.09,7.09,0,0,1-4.77.72c-7.19-2.13-9.64-25.57-9.43-51.56,25.34-49.19,47-120.07,47-135.26,0-14.44-7.24-20.73-20.5-20.73-27.19,0-54,64-54,132.43,0,20.32.1,36.45.85,49.12a27.16,27.16,0,0,1-3.31,2.82c-7.35,5.3-9.35-2.58-10.12-9.07-2-16.78-4.43-61.49,2.87-93.39,1.26-5.51-30.9,9-31.52,12.8-2.15,13.23-6,62.71-.41,83.57-19.51,20.65-22.9-9.4-22.86-27.39.06-23.5,3.67-45.27,3.67-51.51,0-4.35-17.89,3.9-23.52,9.42-1.89,1.85-14.77,19.54-31.87,37.8-6.73-14.49-14.53-25.85-25-33.36,4.14-87.2,40.93-140.45,65.93-140,21.45.37,38.59,14,38.59,41,0,14.29-11,40-21.75,40-7.91,0-15.79-5.58-15.79-16,0-7.42-3.68-10.41-8.56-10.41-3.63,0-9.48,4.44-9.48,13.08,0,19.14,9.75,34.6,33.34,34.6,32.17,0,49.55-27.78,52-59.55,2.58-34.1-20.32-65.22-61.68-64.69C140.84,28.88,91,86.61,73.78,180.44c-30.52,4-46.94,28.1-46.94,53.06,0,27.28,22.65,41.79,42,45.54,9,102.16,53.95,121.87,71.48,118.87,43-7.37,26-111.16,15-144.32-2.2-6.62-4.42-12.87-6.73-18.72,10.73-12.13,18.41-22.71,21.27-25.61-3.73,22.83-6.35,62.06,14.58,68.73,16.18,5.16,31.55-2.82,39.32-12.19,2.15,6.79,8.51,19.88,22,17.32,5.24-1,10.77-4.92,16.41-11,2.61,19.16,8.44,26.74,21.41,27.77,6.05.48,12.29-1.1,18.56-4.28,2.27,29.94,15.11,45.92,34,46.19,6.33.09,10.75-2,15-6.59,3.92,13.8,11.19,25,32.22,24.71,5.27-.07,10.49-2.19,15.55-5.87.28,12.77.86,22.93,1.8,33.1-33.22,15.95-62.43,43.21-94.37,48.18-54.45,8.47-85.77-34.83-85.64-76.84.06-20.33,9.25-32.18,20.23-32.18s20.5,7.14,20.5,20.54c0,9.83-4,15.7-9.67,15.7-5.13,0-9-2.64-9-8.32,0-2.93-1.65-5.13-4.16-5.13-2.31,0-4.7,2.45-4.7,6.34,0,11.93,8,19,21,19,16.27,0,27.87-12,27.68-26.21-.28-21.89-11.42-38.71-41.32-39.67-27.92-.91-56,21.24-56.47,59.74-.69,53.48,34.47,91.38,93.35,91.38,58.26,0,90.45-36.43,124.33-55.46,7,40.28,23.93,55.33,48.95,55.33,24.46,0,38.64-18.91,38.66-43.75,0-18.83-15-41.86-46.21-39.74M130.63,236.86c-3.91,3.68-7.94,7.22-12,10.48q-.28-15.24-.27-32.66a94.77,94.77,0,0,1,12.28,22.18M49.74,238c0-16.54,10-31.32,21-38.22a414.37,414.37,0,0,0-3.29,52.74q.09,5.28.31,10.32c-9.45-4.38-18.07-13.49-18.07-24.84m88.89,134.34C130.84,373,121.51,345.1,119,262.9a169.57,169.57,0,0,0,16-13.77c1.8,5.81,3.2,12.3,4.94,19.36,9.45,38.3,9.39,102.93-1.31,103.82M315.79,96.46c3.34,0,5.52,2.59,5.52,6.64,0,14.72-17.25,71.78-32.64,104.12l-.13.27c.2-2.93.42-5.81.67-8.62,5.73-64.81,21.39-102.42,26.58-102.42m56.32,49c2.53,0,4.69,2.13,4.69,5.23,0,33.3-30.36,81.3-41.68,97.6a192.41,192.41,0,0,1,5-20.46c8.58-28.34,24.37-82.37,32-82.37M439.17,223c7.52.24-2,42.36-16.43,77.27-.89-29.15,12.94-77.39,16.43-77.27m15.71,210.53c-10.31,0-16-8.11-21.45-40.74,23.35-8.39,37.56,7.2,38,22.28.2,7-4.09,18.46-16.54,18.46"
                  transform="translate(-26.85 -28.22)" /></svg>
            </a>
            <div className="modeselector" style={this.state.modeBoxBorder}>
              <a href="#" onClick={(ev) => this.setModeColor(ev, 'cleanMode')} className="modeselector__link" 
              style={{ backgroundColor: this.state.cleanModeButtonStyle.backgroundColor }} >
                <span style={{color: this.state.cleanModeButtonStyle.color}}>Clean mode</span>
              </a>
              <a href="#" onClick={(ev) => this.setModeColor(ev, 'articleMode')} className="modeselector__link" 
              style={{ backgroundColor: this.state.articleModeButtonStyle.backgroundColor }}>
                <span style={{color: this.state.articleModeButtonStyle.color}}>Article mode</span>
              </a>
            </div>
          </div>
        {/* banners section, render one route by Route, and render one item by gifRoutes, or videoRoutes, or htmlRoutes */}
          <div className="banners">  
          <main>
              <Switch>
                {defaultRoute}
                {htmlRoutes}
                {videoRoutes}
                {gifRoutes}
                <Redirect to="/" />
              </Switch>
          </main>
          </div>
          {/* <div>
                <Route path="/222507866" component={VideoICAFrame} />
                <Route path="/239824287" component={VideoLoremFrame} />
              </div> */}
        </div>
      </div>
    </Router>
    )
  }
}

export default App;

