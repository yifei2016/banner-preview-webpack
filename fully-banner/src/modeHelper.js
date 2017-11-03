function getMode() {
  var mode = window.location.search.split('=')
  if (mode[1] === 'articleMode') {
    return 'articleMode'
  } else {
    return 'cleanMode'
  }
} 
function getModeStyle() {
  var style = {
    backgroundColor: '#0A2A4F',
    color: 'white'

  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.backgroundColor = 'white';
    style.color = '#0A2A4F';
  }
  return style;
}
function getImageStyle() {
  var style = {
    fill: 'white'
  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.fill = '#0A2A4F';
  }
  return style;
}
function getButtonStyle() {
  var style = {
    backgroundColor: 'white',
    margin: 'auto 0'
  }
  return style;
}
function getClientStyle() {
  var style = {
    boxShadow: "3px 3px 0 0 white",
    border: "2px solid white",
    marginLeft: "-10px",
    paddingLeft: "15px"
  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.boxShadow = "3px 3px 0 0 #0A2A4F";
    style.border = "2px solid #0A2A4F";
    style.marginLeft = "-10px";
    style.paddingLeft = "15px";
  }
  
  return style;
}
export {getMode, getModeStyle, getImageStyle, getClientStyle, getButtonStyle};