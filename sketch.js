var dot;
var width;
var height;

function setup() {
  width = 500;
  height = 500;
  createCanvas(width,height);
  dot = new dot(floor(width/2),floor(height/2));
  frameRate(10);
}

function draw() {
  background(0);
  dot.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    dot.y = dot.y - 10;
  } else if (keyCode === DOWN_ARROW) {
    dot.y = dot.y + 10;
  } else if (keyCode === RIGHT_ARROW) {
    dot.x = dot.x + 10;
  } else if (keyCode === LEFT_ARROW) {
    dot.x = dot.x - 10;
  }
}
