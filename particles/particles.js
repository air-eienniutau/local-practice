
var __public = {
  mouseX: 0,
  mouseY: 0
};

//canvas相关-粒子类
var Particle = function (x, y, canvas, r, g, b) {
  this.endX = x;
  this.endY = y;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = Math.random() * this.canvas.width;
  this.y = Math.random() * this.canvas.height;

  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.r = r;
  this.g = g;
  this.b = b;
};
Particle.prototype = {
  move: function () {
    var disX = this.endX - this.x;
    var disY = this.endY - this.y;
    var dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
    var force = dis * .005;
    var angle = Math.atan2(disY, disX); // atan2(x, y) 返回点(x, y)到x 轴的弧度
    var mouseF = 0, mouseA = 0;
    var mouseX = __public.mouseX, mouseY = __public.mouseY;
    // 控制鼠标移上效果
    if (mouseX > 0 && mouseY > 0) {
      dis = Math.pow((this.x - mouseX), 2) + Math.pow((this.y - mouseY), 2);
      mouseF = 3500 / dis;
      mouseA = Math.atan2(this.y - mouseY, this.x - mouseX);
    } else {
      mouseF = 0;
      mouseA = 0;
    }

    // 初始动画
    this.vx += force * Math.cos(angle) + mouseF * Math.cos(mouseA);
    this.vy += force * Math.sin(angle) + mouseF * Math.sin(mouseA);

    this.vx *= .92;
    this.vy *= .92;

    //
    var ran = Math.random() * -0.1 + Math.random();
    this.x += this.vx + ran;
    this.y += this.vy + ran;
  },
  render: function () {
    this.ctx.fillStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',1)';
    //this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    this.ctx.fillRect(this.x, this.y, 2, 2);
  },
  update: function () {
    this.move();
    this.render();
  }
};

//canvas相关-舞台类
var Stage = function (opts) {
  this.CONFIG = {
    wrap: opts.canvasWrap,
    image: opts.imageSrc
  };
  this.canvas = null;
  this.anim = null;         // 动画线程
  this.particles = [];      // 粒子对象数组
};
Stage.prototype = {
  run: function () {
    var _self = this;
    _self.createStage();
    _self.bindEvent();
    _self.fillStage();
  },
  createStage: function () {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'myCanvas');
    var $wrap = document.querySelector(this.CONFIG.wrap);
    this.canvas.width = $wrap.clientWidth;
    this.canvas.height = $wrap.clientHeight;
    $wrap.innerHTML = "";
    $wrap.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  },
  bindEvent: function () {
    this.canvas.addEventListener("mousemove", function (e) {
      __public.mouseX = e.clientX;
      __public.mouseY = e.clientY;
    }, true);
    this.canvas.addEventListener("mouseout", function () {
      __public.mouseX = 0;
      __public.mouseY = 0;
    }, true);
  },
  fillStage: function () {
    var _self = this;
    var _image = new Image();
    _image.src = _self.CONFIG.image;
    _image.onload = function () {
      _self.ctx.clearRect(0, 0, _self.canvas.width, _self.canvas.height);
      _self.ctx.drawImage(_image, 0, 0);
      var posX = _self.canvas.width - _image.width;
      var posY = _self.canvas.height - _image.height;
      var imageData = _self.ctx.getImageData(0, 0, _image.width, _image.height);
      for (var x = 0; x < imageData.width; x++) {
        for (var y = 0; y < imageData.height; y++) {
          var i = 4 * (y * imageData.width + x);
          if (imageData.data[i] > 0) {
            var ran = Math.random() * 10;
            (x % 3 < 1 && ran < 1.8 || ran > 4.2 && ran < 4.9 || ran > 8.8)
            && _self.particles.push(new Particle(x + posX / 2, y + posY / 2, _self.canvas, 255, 255, 255));
          }
        }
      }
      _self.loop();
    };
  },
  //动画帧循环控制
  loop: function () {
    var _self = this;
    window.cancelAnimationFrame(_self.anim);
    _self.anim = window.requestAnimationFrame(function () {
      _self.loop();
    });
    _self.doFrame();
  },
  //动画帧执行
  doFrame: function () {
    var _self = this;
    _self.ctx.clearRect(0, 0, _self.canvas.width, _self.canvas.height);
    for (var i = 0; i < _self.particles.length; i++) {
      var p = _self.particles[i];
      p.update();
    }
  },
  hideStage: function () {
    if(this.canvas !== null) this.canvas.style.display = "none";
  },
  updateStage: function (opts) {
    this.CONFIG.image = opts.imageSrc;
    if(this.canvas !== null) {
      this.canvas.style.display = "block";
      this.particles = [];
      this.fillStage()
    }else{
      this.run();
    }
  }
};