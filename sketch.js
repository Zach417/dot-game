var dot;
var candy;
var grid;
var maze;

var candyP;
var candyCount = 0;

function setup() {
  var scale = 25;
  createCanvas(500,500);

  frameRate(20);

  maze = new Maze(width,height,scale);
  grid = new Grid(width,height,scale);

  dot = getDotRandom(scale);

  candy = getDotRandom(scale);
  candy.color = "yellow";
  candyP = createP("Score: " + candyCount);
  console.log(candyP);
}

function draw() {
  background(0);
  handleGravity();
  drawGrid();
  //handleKeyIsDown();
  candyP.html("Score: " + candyCount);
}

function handleGravity() {
  if (frameCount % 5 == 0) {
    if (!maze.includes(dot.x, dot.y + maze.scale)) {
      dot.down();
    }

    if (!maze.includes(candy.x, candy.y + maze.scale)) {
      candy.down();
    }
  }
}

function drawGrid() {
  grid.clear();

  drawMaze();

  if (maze.includes(dot.x, dot.y)) {
    dot.kill();
    candyCount = 0;
  }

  if (dot.x == candy.x && dot.y == candy.y) {
    dot.color = "green";
    dot.isAlive = true;
    candy = getDotRandom(maze.scale);
    candy.color = "yellow";
    candyCount++;
  }

  grid.fill(dot.x, dot.y, dot.getColor());
  grid.fill(candy.x, candy.y, candy.getColor());

  grid.show();
}

function drawMaze() {
  for (var i = 0; i < maze.cells.length; i++) {
    var cell = maze.cells[i];
    grid.fill(cell.x, cell.y, "grey");
  }
}

function getDotRandom(scale) {
  //make values a multiple of scale
  var randomX = floor(random(scale,width-scale));
  randomX = randomX - (randomX % scale);
  var randomY = floor(random(scale,height-scale));
  randomY = randomY - (randomY % scale);

  var result = new Dot(randomX,randomY,scale);

  if (maze.includes(result.x, result.y)) {
    return getDotRandom(scale);
  }

  return result;
}

// function handleKeyIsDown() {
//   if (keyIsDown(LEFT_ARROW) && !maze.includes(dot.x - maze.scale, dot.y)) {
//     dot.left();
//   }
//
//   if (keyIsDown(RIGHT_ARROW) && !maze.includes(dot.x + maze.scale, dot.y)) {
//     dot.right();
//   }
//
//   if (keyIsDown(DOWN_ARROW) && !maze.includes(dot.x, dot.y + maze.scale)) {
//     dot.down();
//   }
// }

function keyPressed() {
  var arrowKeyCodes = [37,38,39,40];

  if (dot.isAlive && dot.getColor() == "green") {
    dot.color = "";
  }

  if (keyCode == LEFT_ARROW && !maze.includes(dot.x - maze.scale, dot.y)) {
    dot.left();
  }

  if (keyCode == RIGHT_ARROW && !maze.includes(dot.x + maze.scale, dot.y)) {
    dot.right();
  }

  if (keyCode == DOWN_ARROW && !maze.includes(dot.x, dot.y + maze.scale)) {
    dot.down();
  }

  if (keyCode == UP_ARROW && !maze.includes(dot.x, dot.y - maze.scale)) {
    dot.up();
    dot.up();
  }

  // if (arrowKeyCodes.includes(keyCode)) {
  //   dot.move(keyCode);
  // }

  if (keyCode == 32) { //space
    dot.jump();
  }
}
