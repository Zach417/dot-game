function Cell(x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.color = 255;
  this.border = 255;
  this.fill = false;
  this.stroke = false;

  this.show = function () {
    if (!this.stroke) {
      noStroke();
    } else {
      stroke(this.border);
    }

    if (!this.fill) {
      noFill();
    } else {
      fill(this.color);
    }

    rect(this.x,this.y,this.size,this.size);

  }
}
