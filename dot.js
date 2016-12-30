function Dot (x, y, scale) {
  this.x = x;
  this.y = y;
  this.scale = scale;
  this.isAlive = true;

  this.getColor = function () {
    if (this.color) {
      return this.color;
    } else if (this.isAlive) {
      return 255;
    } else {
      return "red";
    }
  }

  this.show = function () {
    fill(this.getColor());
    var halfScale = floor(this.scale / 2);
    rect(this.x - halfScale, this.y - halfScale, this.scale, this.scale);
  }

  this.kill = function () {
    this.isAlive = false;
  }

  this.move = function (keyCode) {
    switch (keyCode) {
      case UP_ARROW:
        this.up();
        break;
      case DOWN_ARROW:
        this.down();
        break;
      case RIGHT_ARROW:
        this.right();
        break;
      case LEFT_ARROW:
        this.left();
        break;
      default:
        console.log(keyCode.toString() + " is not a valid move argument for dot");
        break;
    }
  }

  this.up = function () {
    this.y -= this.scale;
  }

  this.down = function () {
    this.y += this.scale;
  }

  this.right = function () {
    this.x += this.scale;
  }

  this.left = function () {
    this.x -= this.scale;
  }

  this.jump = function () {
    this.y -= this.scale*3;
  }
}
