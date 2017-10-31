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
    style.color = 'black';
  }
  return style;
}
function getImageStyle() {
  var style = {
    fill: 'white'
  }
  var mode = getMode();
  if (mode === 'articleMode') {
    style.fill = 'black';
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
export {getMode, getModeStyle, getImageStyle, getButtonStyle};