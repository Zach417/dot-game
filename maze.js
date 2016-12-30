function Maze (width, height, scale) {
  this.width = width;
  this.height = height;
  this.scale = scale;
  this.cells = [];

  this.generate = function () {
    //put cells across bottom
    for (var x = 0; x < floor(width/this.scale); x++) {
      var cell = new Cell(x*this.scale,this.height-this.scale,this.scale);
      this.cells.push(cell);
    }

    var totalWalls = this.scale * 3;

    var previousWalls = [];
    var vertical = false;
    var pwTotalLength = 10;

    for (var i = 0; i < totalWalls; i++) {
      var pwl = previousWalls.length;
      if (pwl >= pwTotalLength) {
        previousWalls = [];
        pwl = 0;
        pwTotalLength = floor(random(3,15));
        if (random(0,1) > 0.5) {
          //vertical = true;
        } else {
          vertical = false;
        }
      }

      if (pwl === 0) {
        var x = floor(random(0,floor(this.width/this.scale)));
        var y = floor(random(0,floor(this.height/this.scale)));
        var cell = new Cell(x*this.scale,y*this.scale,this.scale);
        this.cells.push(cell);
        previousWalls.push(cell);
      } else {
        var x = previousWalls[pwl-1].x;
        var y = previousWalls[pwl-1].y;
        var cell = new Cell(x,y,this.scale);
        if (vertical) {
          cell.y += this.scale;
        } else {
          cell.x += this.scale;
        }
        this.cells.push(cell);
        previousWalls.push(cell);
      }
    }
  }

  this.generate();

  this.includes = function (x, y) {
    var result = false;
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      //pythagoras theorem
      var a = cell.x - x
      var b = cell.y - y
      var c = Math.sqrt((a*a)+(b*b));

      if (c < this.scale) {
        result = true;
      }
    }

    return result;
  }

  this.show = function () {
    fill(255);
    for (var i = 0; i < this.cells.length; i++) {
      rect(this.cells[i].x, this.cells[i].y, this.scale, this.scale);
    }
  }
}
