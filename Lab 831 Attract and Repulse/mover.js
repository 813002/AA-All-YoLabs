function Mover(x, y, diam, col){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
    this.acc = new JSVector(0, 0);
    this.diam = diam;
    this.col = col;
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}

Mover.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0
  if(this.loc.x < 0) this.loc.x = canvas.width
  if(this.loc.y > canvas.height) this.loc.y = 0
  if(this.loc.y < 0) this.loc.y = canvas.height
}

Mover.prototype.render = function(){
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI*2, 0, false);
    context.stroke();
    context.fill();
}

Mover.prototype.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.loc.add(this.vel);
}

