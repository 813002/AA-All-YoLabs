function Orbiter(parent, rad, col, a, av){
    this.mover = parent;
    this.loc = new JSVector(parent.loc.x, parent.loc.y);
    this.rad = rad;
    this.orbitalRadius = 65;
    this.c = col;
    this.angle = a;
    this.angularVelocity = av;
}

Orbiter.prototype.run = function(){
    this.render();
    this.update();
}

Orbiter.prototype.render = function(){
    context.strokeStyle = this.c;
    context.fillStyle = this.c;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}

Orbiter.prototype.update = function(){
   this.loc.x = this.mover.loc.x + Math.cos(this.angle)*this.orbitalRadius;
   this.loc.y = this.mover.loc.y + Math.sin(this.angle)*this.orbitalRadius;
   this.angle += this.angularVelocity;
}