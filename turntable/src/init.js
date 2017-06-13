/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __2PI = 2 * Math.PI;

var Turntable = function () {
  function Turntable(opts) {
    _classCallCheck(this, Turntable);

    this.stage = opts.canvas;
    this.ctx = this.stage.getContext('2d');
    this.deg_s = opts.circle_s || 3;
    this.prizeSet = opts.prizeSet;
    this.baseDev = opts.baseDev || 0;
    this.showPrize = opts.showPrize || '';
    this.dev = 0;
    this.runState = -1; //
    this.prizeType = null;
    this.initPrizeSet();
    this.prize = null;
  }

  _createClass(Turntable, [{
    key: 'initPrizeSet',
    value: function initPrizeSet() {
      var prizeSet = this.prizeSet;
      var lastDeg = 1;
      var nodeglist = [];
      var i = void 0;
      for (i = 0; i < prizeSet.length; i++) {
        var sItem = prizeSet[i];
        !sItem.deg && sItem.deg !== 0 && nodeglist.push(sItem);
        if (sItem.deg < lastDeg) {
          lastDeg -= sItem.deg;
        } else {
          sItem.deg = lastDeg;
          lastDeg = 0;
          break;
        }
      }
      if (i < prizeSet.length) prizeSet = prizeSet.slice(0, i + 1);
      nodeglist.length && nodeglist.forEach(function (item) {
        item.deg = lastDeg / nodeglist.length;
      });
      var prizeType = {};
      var devleft = 0;
      for (i = 0; i < prizeSet.length; i++) {
        var _sItem = prizeSet[i];
        _sItem.devleft = devleft;
        devleft += _sItem.deg;
        if (_sItem.color === undefined) _sItem.color = '#000000';
        if (_sItem.bgcolor === undefined) _sItem.bgcolor = '#FFFFFF';
        if (!prizeType[_sItem.type]) {
          prizeType[_sItem.type] = [i];
        } else {
          prizeType[_sItem.type].push(i);
        }
      }
      this.prizeSet = prizeSet;
      this.prizeType = prizeType;
    }
  }, {
    key: 'createTable',
    value: function createTable() {
      var dev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var ctx = this.ctx;
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
      ctx.translate(150, 150);
      var base_dev = -0.5 * this.prizeSet[0].deg * __2PI;
      var table_dev = dev - 0.25 * __2PI + base_dev;
      for (var i = 0; i < this.prizeSet.length; i++) {
        var pSet = this.prizeSet[i];
        ctx.fillStyle = pSet.bgcolor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 150, pSet.devleft * __2PI + table_dev, (pSet.devleft + pSet.deg) * __2PI + table_dev, false);
        ctx.closePath();
        ctx.fill();
        var text_dev = (pSet.devleft + 0.5 * pSet.deg) * __2PI + dev + base_dev;
        ctx.fillStyle = pSet.color;
        ctx.rotate(text_dev);
        ctx.fillText(pSet.name, 0, -100);
        ctx.rotate(-text_dev);
      }
      ctx.restore();
    }
  }, {
    key: 'drawTable',
    value: function drawTable(devPer) {
      var deg_f = this.deg_s / 60 * devPer;
      var next_dev = this.dev + deg_f;
      this.dev = next_dev > 1 ? next_dev - 1 : next_dev;
      this.createTable(this.dev * __2PI);
    }
  }, {
    key: 'rotate',
    value: function rotate(devfn, callback) {
      var _this = this;

      var framefn = function framefn() {
        var devPer = devfn();
        if (devPer) {
          _this.drawTable(devPer);
          requestAnimationFrame(framefn);
        } else callback && callback();
      };
      requestAnimationFrame(framefn);
    }
  }, {
    key: 'startRotate',
    value: function startRotate() {
      var _this2 = this;

      var devFn = function devFn() {
        var i = 0;
        return function () {
          if (i < 120) return _this2.addSpeed(++i, 1, 120);else return 0;
        };
      };
      var runFn = function runFn() {
        return function () {
          return _this2.blockSpeed();
        };
      };
      this.runState = 1;
      this.rotate(devFn(), function () {
        _this2.rotate(runFn(), function () {
          _this2.runState = 0;
          _this2.stopRotate();
        });
      });
    }
  }, {
    key: 'stopRotate',
    value: function stopRotate() {
      var _this3 = this;

      var devFnR = function devFnR(maxdev) {
        var max_f = 2 * maxdev / _this3.deg_s * 60;
        var i = 0;
        return function () {
          if (i < max_f) return _this3.deSpeed(++i, max_f);else return 0;
        };
      };
      var prizeDev = this.getPrizeDev(this.prize.type);
      this.rotate(devFnR(prizeDev), function () {
        _this3.runState = -1;
        _this3.showPrize(_this3.prize);
      });
    }
  }, {
    key: 'getPrizeDev',
    value: function getPrizeDev(type) {
      var _pIList = this.prizeType[type];
      if (!_pIList.length) {
        this.prize.error = true;
        this.prize.message = "The prize type is not exist in set list";
        return 3 - this.dev;
      }
      var _prizeIndex = _pIList.length == 1 ? _pIList[0] : _pIList[Math.floor(_pIList.length * Math.random())];
      var _prizeItem = this.prizeSet[_prizeIndex];
      this.prize.name = _prizeItem.name;
      this.prize.error = false;
      this.prize.message = "";
      return Math.max(Math.floor(this.deg_s * 1), 1) + 1 - this.dev - this.baseDev - _prizeItem.devleft - 0.5 * _prizeItem.deg;
    }
  }, {
    key: 'setPrize',
    value: function setPrize(type) {
      this.prize = {
        type: type
      };
      this.runState = 0;
    }
    //模拟ease

  }, {
    key: 'addSpeed',
    value: function addSpeed(rt, d) {
      var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

      var x = d > 0 ? rt / len : (len - rt) / len;
      var tx = -(x - 1) * (x - 1) + 1;
      var t = (tx - 0.5) * 2;
      return 0.5 * (Math.sin(0.5 * t * Math.PI) + 1);
    }
  }, {
    key: 'blockSpeed',
    value: function blockSpeed() {
      return this.runState === 1 ? 1 : 0;
    }
  }, {
    key: 'deSpeed',
    value: function deSpeed(rt) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var x = rt / len;
      var x0 = (rt - 1) / len;
      return 1 - (x0 + x) / 2;
    }
  }, {
    key: 'test',
    value: function test() {
      var ctx = this.ctx;
      ctx.translate(150, 150);
      ctx.font = "12px Microsoft Yahei";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (var i = 0; i < 8; i++) {
        ctx.rotate(__2PI / 8);
        ctx.fillText("A" + i, 0, -80);
      }
    }
  }]);

  return Turntable;
}();

exports.default = Turntable;

/***/ })
/******/ ]);