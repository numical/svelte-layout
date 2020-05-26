export default class Timeline {
  
  constructor() {
    this.values = {};
    this.lastMax = 0;
    this.tick = 0;
  }

  plus(interval, fn){
    this.lastMax += interval;
    this.values[this.lastMax] = fn;
    return this;
  }

  start() {
    setTimeout(() => {
      this.tick += 1;
      if (this.values[this.tick]) {
        this.values[this.tick]();
      }
      if (this.tick < this.lastMax) {
        this.start();
      }
    }, 100)
  }
}
