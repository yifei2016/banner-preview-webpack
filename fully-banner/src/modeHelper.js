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
function getLogoStyle() {
  var style = {
    fill: 'white'
  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.fill = '#0A2A4F';
  }
  return style;
}
// function getButtonStyle() {
//   var style = {
//     backgroundColor: 'white',
//     margin: 'auto 0'
//   }
//   return style;
// }
function getClientStyle() {
  var style = {
    boxShadow: "3px 3px 0 0 white",
    borderColor: "white"
  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.boxShadow = "3px 3px 0 0 #0A2A4F";
    style.borderColor = "#0A2A4F";
  }
  
  return style;
}
export {getMode, getModeStyle, getLogoStyle, getClientStyle};