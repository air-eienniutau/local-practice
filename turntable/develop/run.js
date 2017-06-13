import Turntable from './turntable';
//import DrawBeizer from './drawBeizer';

let $ = (str) => document.querySelector(str);
let $canvas = $('.example');
let opts = {
  canvas: $canvas,
  circle_s: 3,
  baseDev: -0.0625,
  prizeSet: [
    {
      type: 1,
      name: '一等奖',
      deg: 0.125,
      color: '#000000',
      bgcolor: '#EEECEC',
    },
    {
      type:2,
      name: '二等奖',
      deg: 0.25,
      color: '#000000',
      bgcolor: '#AAAAAA',
    },
    {
      type:3,
      name: '谢谢惠顾',
      deg: 0.625,
      color: '#000000',
      bgcolor: '#C7EDCC'
    }
  ],
  showPrize:(prize) => {
    alert(prize.name + " "+ prize.message);
  }
};

let turnObj = new Turntable(opts);
turnObj.createTable();
$canvas.addEventListener("click", () => {
  if(turnObj.runState == -1) {
    turnObj.startRotate();
  } else if(turnObj.runState == 1) {
    turnObj.setPrize(2);
  }
});
