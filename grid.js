function Grid (width, height, cellSize) {
  this.width = width;
  this.height = height;

  if (cellSize) {
    this.cellSize = cellSize;
  } else {
    this.cellSize = 10;
  }

  this.cells = [];

  this.generateCells = function () {
    var rows = floor(height/cellSize);
    var cols = floor(width/cellSize);
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var cell = new Cell(x*this.cellSize,y*this.cellSize,this.cellSize);
        this.cells.push(cell);
      }
    }
  }

  this.generateCells();

  this.clear = function () {
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      cell.color = 255;
      cell.fill = false;
    }
  }

  this.fill = function (x,y,color) {
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      if (cell.x == x && cell.y == y) {
        if (color) {
          cell.color = color;
        }
        cell.fill = true;
      }
    }
  }

  this.show = function () {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].show();
    }
  }
}
