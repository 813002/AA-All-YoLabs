function Target(x, y, col) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.acc = new JSVector(0, 0);
  this.col = col;
  this.r = 40;
}

Target.prototype.run = function () {
  this.render();
  this.update();
  this.checkEdges();
}

Target.prototype.render = function () {
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
  context.stroke();
  context.fill();
}

Target.prototype.update = function () {
  for (let i = 0; i < 1; i++) {
    let dist = this.loc.distance(snake[0].loc);
    if (dist < 100) {
      this.acc = JSVector.subGetNew(this.loc, snake[0].loc)
      this.acc.normalize()
      this.acc.multiply(0.01)
      this.vel.add(this.acc);
      this.vel = snake[0].vel.copy();
      this.vel.limit(1);
      this.loc.add(this.vel);
    }

    if (dist < 40) {
      this.loc.x = Math.random() * (canvas.width - this.r) + this.r;
      this.loc.y = Math.random() * (canvas.height - this.r) + this.r;
    }

  }

}



Target.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width) this.loc.x = this.r;
  if (this.loc.x < 0) this.loc.x = canvas.width - this.r
  if (this.loc.y > canvas.height) this.loc.y = this.r;
  if (this.loc.y < 0) this.loc.y = canvas.height + this.r
}