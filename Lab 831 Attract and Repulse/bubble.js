//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam, attract, repulse) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
  this.acc = new JSVector(0.01, 0.01);
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
  this.attract = attract;
  this.repulse = repulse;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {
  // if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
  // if(this.loc.x < 0) this.vel.x = -this.vel.x;
  // if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  // if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if (this.loc.x > canvas.width) this.loc.x = 0
  if (this.loc.x < 0) this.loc.x = canvas.width
  if (this.loc.y > canvas.height) this.loc.y = 0
  if (this.loc.y < 0) this.loc.y = canvas.height

}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  let b = bubbles;

  for (let i = 0; i < b.length; i++) {
    if (this !== b[i]) {

      let d = this.loc.distance(b[i].loc)  //Math.sqrt((this.loc.x - b[i].loc.x) * (this.loc.x - b[i].loc.x) + (this.loc.y - b[i].loc.y) * (this.loc.y - b[i].loc.y));
      if (d < this.diam + b[i].diam) {
        this.isOverlapping = true;
        return;
      }
    }
  }

}


// renders a bubble to the canvas
Bubble.prototype.render = function () {
  let ctx = context;
  if (this.isOverlapping) {
    ctx.strokeStyle = "rgba(50, 102, 168, 255)"
    ctx.fillStyle = "rgba(50, 102, 168, 255)"

  } else {
    ctx.strokeStyle = "rgba(150, 88, 200, 55)"
    ctx.fillStyle = "rgba(150, 88, 200, 55)";

  }
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.acc.setMagnitude(0);
  for (let i = 0; i < 1; i++) {
    let dist1 = this.loc.distance(bubAtract.loc);
    if (dist1 < 100) {
      this.acc = JSVector.subGetNew(bubAtract.loc, this.loc)
      this.acc.normalize()
      this.acc.multiply(0.1)
    }

    let dist2 = this.loc.distance(bubRepel.loc);
    if (dist2 < 250) {
      this.acc = JSVector.subGetNew(this.loc, bubRepel.loc)
      this.acc.normalize()
      this.acc.multiply(0.05)
    }
  }

  this.vel.add(this.acc)
  this.vel.limit(3)
  this.loc.add(this.vel);
}

