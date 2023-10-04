//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*6-3, Math.random()*6-3);
  this.acc = new JSVector(0, 0.05);
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
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
  if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
  if(this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
    
  
}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  let b = bubbles;
  for (let i = 0; i < b.length; i++){
    if(this !== b[i]){
      let d = Math.sqrt((this.loc.x - b[i].loc.x) * (this.loc.x - b[i].loc.x) + (this.loc.y - b[i].loc.y) * (this.loc.y - b[i].loc.y));
      if(d < this.diam + b[i].diam){
        this.isOverlapping = true;
        return;
      }
    }
  }
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {
  let ctx = context;
  if(this.isOverlapping){
    ctx.strokeStyle = "rgba(255, 155, 0, 255)"
    ctx.fillStyle = "rgba(255, 155, 0, 255)"
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  } else {
    ctx.strokeStyle = "rgba(0, 88, 200, 55)"
    ctx.fillStyle = "rgba(0, 88, 200, 55)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.loc.add(this.vel);
  if(this.loc.y <= 0){
    this.vel.sub(this.acc)
  } else if (this.loc.y >= 40) {
    this.vel.add(this.acc);
  }
 
}

