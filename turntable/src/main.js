webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _turntable = __webpack_require__(0);

var _turntable2 = _interopRequireDefault(_turntable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import DrawBeizer from './drawBeizer';

var $ = function $(str) {
  return document.querySelector(str);
};
var $canvas = $('.example');
var opts = {
  canvas: $canvas,
  circle_s: 3,
  baseDev: -0.0625,
  prizeSet: [{
    type: 1,
    name: '一等奖',
    deg: 0.125,
    color: '#000000',
    bgcolor: '#EEECEC'
  }, {
    type: 2,
    name: '二等奖',
    deg: 0.25,
    color: '#000000',
    bgcolor: '#AAAAAA'
  }, {
    type: 3,
    name: '谢谢惠顾',
    deg: 0.625,
    color: '#000000',
    bgcolor: '#C7EDCC'
  }],
  showPrize: function showPrize(prize) {
    alert(prize.name + " " + prize.message);
  }
};

var turnObj = new _turntable2.default(opts);
turnObj.createTable();
$canvas.addEventListener("click", function () {
  if (turnObj.runState == -1) {
    turnObj.startRotate();
  } else if (turnObj.runState == 1) {
    turnObj.setPrize(2);
  }
});

/***/ })
],[1]);