function Planet(x, y){
    this.loc = new JSVector(x, y);
}

Planet.prototype.run = function(){
    this.render();
    this.update();
}

Planet.prototype.render = function(){
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
  context.stroke();
  context.fill();
}

Planet.prototype.update = function(){
  if(ship.loc.x < this.loc.x){
    this.loc.x += 200;
  }
}
