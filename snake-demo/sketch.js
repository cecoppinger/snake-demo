let s;
let scale = 20;
let food;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  s = new Snake();
  food = new Food(
    floor(random(width / scale)) * scale,
    floor(random(height / scale)) * scale
  );
}

function draw() {
  background(51);
  if (s.death()) {
    s = new Snake();
  }
  s.update();
  s.show();
  food.show();
  if (s.eat(food)) {
    food.pickLocation();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}
