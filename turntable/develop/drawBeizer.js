
class DrawBeizer {
  constructor(opts) {
    this.ctx = opts.ctx;
  }
  metaComputing(o, c1, c2, f, t) {
    const n = 1 - t;
    return n*n*n* o + 3*n*n*t* c1 + 3*n*t*t* c2 + t*t*t* f;
  }
  beizer(x1, y1, x2, y2, rt, len=100) {
    const O = {x:0, y:0};
    const F = {x:len, y:len};
    const t = rt/len;
    return {
      x: this.metaComputing(0, x1, x2, 1, t) * len,
      y: this.metaComputing(0, y1, y2, 1, t) * len,
    };
  }
  draw() {
    let ctx = this.ctx;
    for(let i=0; i<=100; i=i+2){
      let beizerPoint = this.beizer(.25,.1,.25,1, i, 100);
      console.log(beizerPoint.x, i);
      ctx.fillRect(beizerPoint.x, 100 - beizerPoint.y, 2, 2);
    }
  }
}
export default DrawBeizer;