
const __2PI = 2 * Math.PI;

class Turntable {
  constructor(opts) {
    this.stage = opts.canvas;
    this.ctx = this.stage.getContext('2d');
    this.deg_s = opts.circle_s || 3;
    this.prizeSet = opts.prizeSet;
    this.baseDev = opts.baseDev || 0;
    this.showPrize = opts.showPrize || '';
    this.dev = 0;
    this.runState = -1;   //
    this.prizeType = null;
    this.initPrizeSet();
    this.prize = null;
  }
  initPrizeSet(){
    let prizeSet = this.prizeSet;
    let lastDeg = 1;
    let nodeglist = [];
    let i;
    for(i=0; i<prizeSet.length; i++){
      let sItem = prizeSet[i];
      !sItem.deg && sItem.deg !== 0 && nodeglist.push(sItem);
      if(sItem.deg <lastDeg){
        lastDeg -= sItem.deg
      }else{
        sItem.deg = lastDeg;
        lastDeg = 0;
        break;
      }
    }
    if(i < prizeSet.length) prizeSet = prizeSet.slice(0, i+1);
    nodeglist.length && nodeglist.forEach((item) => {item.deg = lastDeg/nodeglist.length});
    let prizeType = {};
    let devleft = 0;
    for(i=0; i<prizeSet.length; i++){
      let sItem = prizeSet[i];
      sItem.devleft = devleft;
      devleft += sItem.deg;
      if(sItem.color === undefined) sItem.color ='#000000';
      if(sItem.bgcolor === undefined) sItem.bgcolor ='#FFFFFF';
      if(!prizeType[sItem.type]){
        prizeType[sItem.type] = [i];
      }else{
        prizeType[sItem.type].push(i);
      }
    }
    this.prizeSet = prizeSet;
    this.prizeType = prizeType;
  }
  createTable(dev=0) {
    let ctx = this.ctx;
    ctx.font = "12px Microsoft Yahei";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.clearRect(0, 0, 300, 300);
    // ctx.save();
    // ctx.translate(150,150);
    // for(let i=0; i<this.prizeSet.length; i++){
    //   let pSet = this.prizeSet[i];
    //   let lradiu = pSet.devleft;
    //   let rradiu = pSet.devleft + pSet.deg;
    //   ctx.fillStyle = pSet.bgcolor;
    //   ctx.beginPath();
    //   ctx.moveTo(0,0);
    //   ctx.arc(0, 0, 150, lradiu* __2PI + dev, rradiu* __2PI + dev, false );
    //   ctx.closePath();
    //   ctx.fill();
    // }
    // ctx.restore();
    ctx.clearRect(0, 0, 300, 300);
    ctx.save();
    ctx.translate(150,150);
    let base_dev = -0.5*this.prizeSet[0].deg*__2PI;
    let table_dev = dev - 0.25*__2PI + base_dev;
    for(let i=0; i<this.prizeSet.length; i++) {
      let pSet = this.prizeSet[i];
      ctx.fillStyle = pSet.bgcolor;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.arc(0, 0, 150, pSet.devleft*__2PI + table_dev, (pSet.devleft + pSet.deg)* __2PI + table_dev, false );
      ctx.closePath();
      ctx.fill();
      let text_dev = (pSet.devleft + 0.5*pSet.deg)* __2PI + dev + base_dev;
      ctx.fillStyle = pSet.color;
      ctx.rotate(text_dev);
      ctx.fillText(pSet.name, 0, -100);
      ctx.rotate(-text_dev);
    }
    ctx.restore();
  }
  drawTable(devPer){
    const deg_f = this.deg_s / 60 * devPer;
    let next_dev = this.dev + deg_f;
    this.dev = next_dev > 1 ? next_dev - 1 : next_dev;
    this.createTable(this.dev * __2PI);
  }
  rotate(devfn, callback){
    let framefn = () => {
      let devPer = devfn();
      if(devPer) {
        this.drawTable(devPer);
        requestAnimationFrame(framefn);
      }
      else
        callback && callback();
    };
    requestAnimationFrame(framefn);
  }
  startRotate() {
    let devFn = () => {
      let i = 0;
      return () => {
        if(i < 120)
          return this.addSpeed(++i, 1, 120);
        else
          return 0;
      }
    };
    let runFn = () => {
      return () => this.blockSpeed();
    };
    this.runState = 1;
    this.rotate(devFn(), () => {
      devFn = null;
      this.rotate(runFn(),() => {
        runFn = null;
        this.runState = 0;
        this.stopRotate();
      });
    });
  }
  stopRotate(){
    let devFnR = (maxdev) => {
      let max_f = 2 * maxdev / this.deg_s * 60;
      let i = 0;
      return () => {
        if(i < max_f)
          return this.deSpeed(++i, max_f);
        else
          return 0;
      }
    };
    let prizeDev = this.getPrizeDev(this.prize.type);
    this.rotate(devFnR(prizeDev),()=>{
      devFnR = null;
      this.runState = -1;
      this.showPrize(this.prize);
    });
  }
  getPrizeDev(type){
    let _pIList = this.prizeType[type];
    if(!_pIList.length){
      this.prize.error =  true;
      this.prize.message = "The prize type is not exist in set list";
      return 3 - this.dev;
    }
    let _prizeIndex = _pIList.length == 1 ? _pIList[0] : _pIList[Math.floor(_pIList.length * Math.random())];
    let _prizeItem = this.prizeSet[_prizeIndex];
    this.prize.name = _prizeItem.name;
    this.prize.error = false;
    this.prize.message = "";
    return Math.max(Math.floor(this.deg_s * 1),1) + 1-this.dev -this.baseDev - _prizeItem.devleft - 0.5*_prizeItem.deg;
  }
  setPrize(type){
    this.prize = {
      type: type
    };
    this.runState = 0;
  }
  //模拟ease
  addSpeed(rt, d, len=100) {
    let x = d>0 ? rt/len : (len-rt)/len;
    let tx = -(x-1)*(x-1) + 1;
    let t = ((tx - 0.5)*2);
    return 0.5 * (Math.sin(0.5*t*Math.PI)+1);
  }
  blockSpeed(){
    return this.runState === 1 ? 1 : 0;
  }
  deSpeed(rt, len=100) {
    let x = rt/len;
    let x0 = (rt-1)/len;
    return 1 - (x0+x)/2;
  }
  test(){
      let ctx = this.ctx;
      ctx.translate(150, 150);
      ctx.font = "12px Microsoft Yahei";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for(let i=0; i<8; i++){
        ctx.rotate(__2PI/8);
        ctx.fillText("A"+i, 0, -80);
      }
  }
}
export default Turntable;