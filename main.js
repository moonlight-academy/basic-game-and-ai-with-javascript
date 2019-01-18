// add canvas
var canvas = document.getElementById("myCanvas");

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get context
var ctx = canvas.getContext("2d");

// Circle class
class Circle {
  constructor(posX, posY, radius, speedX, speedY) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  // Draw circle
  draw() {
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
  }

  // Update
  update() {
    if (this.posX + this.radius > window.innerWidth || this.posX - this.radius < 0) {
      this.speedX = -this.speedX;
    }

    if (this.posY + this.radius > window.innerHeight || this.posY - this.radius < 0) {
      this.speedY = -this.speedY;
    }

    this.posX = this.posX + this.speedX;
    this.posY = this.posY + this.speedY;
  }
}

// Circle array
var circleArr = [];

// generate random circles
for (var i = 0; i < 100; i++) {
  var posX = Math.random() * window.innerWidth;
  var posY = Math.random() * window.innerHeight;
  var radius = Math.random() * 50;
  var speedX = Math.random() * 5;
  var speedY = Math.random() * 5;

  // create circle object from Circle class
  var circle = new Circle(posX, posY, radius, speedX, speedY);

  // push new circle object to circle array
  circleArr.push(circle);
}

// Animation controller
function animation() {

  // Clear canvas
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // update circle
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].draw();
    circleArr[i].update();
  }

  // refresh screen with window.requestAnimationFrame()
  window.requestAnimationFrame(animation);
}

// call animation()
animation();