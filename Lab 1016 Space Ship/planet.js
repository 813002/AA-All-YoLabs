function Planet(x, y, col) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.acc = new JSVector(0, 0);
  this.col = col;
  this.r = 40;
}

Planet.prototype.run = function () {
  this.render();
  this.update();
  this.checkEdges();
}

Planet.prototype.render = function () {
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
  context.stroke();
  context.fill();
}

Planet.prototype.update = function () {
  for (let i = 0; i < 1; i++) {
    let dist = this.loc.distance(ship.loc);
    if (dist < 100) {
      this.acc = JSVector.subGetNew(this.loc, ship.loc)
      this.acc.normalize()
      this.acc.multiply(0.01)
      this.vel.add(this.acc);
      this.vel = ship.vel.copy();
      this.vel.limit(3);
      this.loc.add(this.vel);
    }

    if (dist < 40) {
      this.loc.x = Math.random() * (canvas.width - this.r) + this.r;
      this.loc.y = Math.random() * (canvas.height - this.r) + this.r;
    }

  }

}

Planet.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width) this.loc.x = this.r;
  if (this.loc.x < 0) this.loc.x = canvas.width - this.r
  if (this.loc.y > canvas.height) this.loc.y = this.r;
  if (this.loc.y < 0) this.loc.y = canvas.height + this.r
}