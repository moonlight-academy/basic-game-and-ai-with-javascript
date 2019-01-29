// add canvas
var canvas = document.getElementById("myCanvas");

// set canvas size
canvas.width = 500;
canvas.height = 500;

// get context
var ctx = canvas.getContext("2d");

// Snake class
class Snake {
  /**
   * Snake class contructor
   * @param {number} posX initial X position
   * @param {number} posY initial Y position
   * @param {number} scale snake scale size
   * @param {number} initTailSize initial snake tail size
   */
  constructor(posX, posY, scale, initTailSize = 4) {
    this.posX = posX;
    this.posY = posY;
    this.scale = scale;
    this.tail = [];
    // generate tail from initTailSize
    for (var i = 0; i < initTailSize; i++) {
      this.tail.push({x: this.posX, y: this.posY});
    }
  }

  // Draw snake
  draw() {
    // display snake head
    ctx.fillStyle = "green";
    ctx.fillRect(this.posX, this.posY, this.scale, this.scale);
    ctx.fill();

    // display snake tail
    for (var i = 0; i < this.tail.length; i++) {
      ctx.fillStyle = "green";
      ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
      ctx.fill();
    }
  }

  /**
   * moveLeft
   */
  moveLeft() {
    this.posX = this.posX - this.scale;
    if (this.posX < 0) {
      this.posX = canvas.width - this.scale;
    }
    this.updateTail();
  }

  /**
   * moveRight
   */
  moveRight() {
    this.posX = this.posX + this.scale;
    if (this.posX >= canvas.width) {
      this.posX = 0;
    }
    this.updateTail();
  }

  /**
   * moveUp
   */
  moveUp() {
    this.posY = this.posY - this.scale;
    if (this.posY < 0) {
      this.posY = canvas.height - this.scale;
    }
    this.updateTail();
  }

  /**
   * moveDown
   */
  moveDown() {
    this.posY = this.posY + this.scale;
    if (this.posY >= canvas.height) {
      this.posY = 0;
    }
    this.updateTail();
  }

  /**
   * updateTail
   * update snake tail position
   */
  updateTail() {
    // move the last tail position to the first position
    // and shift the others to the right
    this.tail.unshift(this.tail.pop());

    // set the 1st position with snake's head position
    this.tail[0] = {x: this.posX, y: this.posY};
  }
}

// Circle array
var snake = new Snake(100, 100, 25);

// Animation controller
function animation() {

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update circle
  snake.draw();

  // refresh screen with window.requestAnimationFrame()
  window.requestAnimationFrame(animation);
}

// keyboard down handler
function keyDownHandler(key) {
  // arrow key LEFT
  if (key.keyCode == 37) {
    snake.moveLeft();
  }

  // arrow key UP
  if (key.keyCode == 38) {
    snake.moveUp();
  }

  // arrow key RIGHT
  if (key.keyCode == 39) {
    snake.moveRight();
  }

  // arrow key DOWN
  if (key.keyCode == 40) {
    snake.moveDown();
  }
}

// call animation()
animation();

// bind keyDownHandler with browser's eventListener
window.addEventListener('keydown', keyDownHandler);