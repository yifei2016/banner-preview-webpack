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
  console.log(mode)
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
// function getBodyStyle() {
//   var style = {
//     marginBottom: '0',
//     backgroundColor: '#0A2A4F',
//   }
//   var mode = getMode();
//   if (mode === 'articleMode') {
//     style.marginBottom = '2em';
//     style.backgroundColor = 'white';
//   }
//   return style;
// }

export {getMode, getModeStyle, getLogoStyle};