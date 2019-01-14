// add canvas
var canvas = document.getElementById("myCanvas");

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get context
var ctx = canvas.getContext("2d");

// draw rectangle
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(200, 200, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(200, 100, 100, 100);
ctx.fillRect(100, 200, 100, 100);

// draw circle
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

// draw line
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(200, 400);
ctx.lineTo(400, 400);
ctx.strokeStyle = "black";
ctx.stroke();

// draw triangle
ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(500, 300);
ctx.lineTo(600, 400);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

// draw 100 circles
for (var i = 0; i < 100; i++) {
  var posX = Math.random() * window.innerWidth;
  var posY = Math.random() * window.innerHeight;
  var radius = Math.random() * 50;

  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0, 0, 255, 0.3)";
  ctx.stroke();
  ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
  ctx.fill();
}
