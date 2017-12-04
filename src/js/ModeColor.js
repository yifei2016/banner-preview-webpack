export default class ModeColor {
  constructor() {
  }
  static get ACTIVE_BUTTON_STYLE() {
    return {
      color: '#FFC1B4',
      backgroundColor: '#0A2A4F'
    }
  }
  static get BUTTON_STYLE() {
    return {
      color: '#0A2A4F',
      backgroundColor: 'white'
    }
  }
  static get ARTICLEMODECOLOR(){
    return {
      color: '#0A2A4F',
      backgroundColor: 'white'
    }
  }
  static get CLEANMODECOLOR(){
    return {
      color: 'white',
      backgroundColor: '#0A2A4F'
    }
  }
  static get ARTICLEMODESIDEBAR(){
    return {
      color: '#0A2A4F',
      backgroundColor: '#f8f8f8'
    }
  }
  static get CLEANMODECOLOR(){
    return {
      color: 'white',
      backgroundColor: 'rgb(12, 37, 67)'
    }
  }
  static get ARTICLEMODECLIENTCOLOR(){
    return {
      boxShadow: '3px 3px 0 0 #0A2A4F',
      borderColor: '#0A2A4F'
    }
  }
  static get CLEANMODECLIENTCOLOR(){
    return {
      boxShadow: '3px 3px 0 0 white',
      borderColor: 'white'
    }
  }
}

