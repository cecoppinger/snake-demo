class Snake {
  x = 0;
  y = 0;
  xspeed = 1;
  yspeed = 0;
  total = 0;
  tail = [];

  constructor() {}

  update() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * 20;
    this.y += this.yspeed * 20;

    this.x = constrain(this.x, 0, width - scale);
    this.y = constrain(this.y, 0, height - scale);
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  death() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if(d < 1){
        return true;
      }
    }
    return false;
  }

  eat(food) {
    let d = dist(this.x, this.y, food.x, food.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  show() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    rect(this.x, this.y, scale, scale);
  }
}

class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  pickLocation() {
    this.x = floor(random(width / scale)) * scale;
    this.y = floor(random(height / scale)) * scale;
  }

  show() {
    fill(100, 0, 100);
    rect(this.x, this.y, scale, scale);
  }
}
