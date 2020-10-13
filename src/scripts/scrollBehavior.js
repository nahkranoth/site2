export default class ScrollBehavior{

  constructor(callback){
    this.scrollCollector = 0;
    this.deltaThreshold = 500;
    this.resetTimerSec = 1000;
    this.resetTimer = null;
    this.override();
    this.callback = callback;
  }

  takeOverScroll(e) {
    e.preventDefault();
    this.scrollCollector += e.deltaY;
    var direction = Math.sign(e.deltaY);

    //TODO would need cleanup
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(()=>{
      this.scrollCollector = 0;
      }, this.resetTimerSec);

    if(Math.abs(this.scrollCollector) >= this.deltaThreshold){
      this.callback(direction);
      this.scrollCollector = 0;
      clearTimeout(this.resetTimer);
    }
  }

  override(){
    var supportsPassive = false;

    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}

    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', (e) => {this.takeOverScroll(e);}, false); // older FF
    window.addEventListener(this.wheelEvent, (e) => {this.takeOverScroll(e);}, this.wheelOpt); // modern desktop
    window.addEventListener('touchmove', (e) => {this.takeOverScroll(e);}, this.wheelOpt); // mobile
  }
}

