function dot(x, y) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;

  this.show = function () {
    fill(255);
    rect(dot.x - floor(this.width / 2), dot.y - floor (this.height / 2), dot.width, dot.height);
  }
}
