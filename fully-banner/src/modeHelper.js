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
    style.setProperty("--ourcolor", 'white');
  }
  return style;
}

export {getMode, getModeStyle};