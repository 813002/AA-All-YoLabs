function Particles(x = 0, y = 0, r, col, lifespan){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.acc = new JSVector(0, 0.1);
    this.lifespan = lifespan;
    this.r = r
    this.col = col;
    this.isDead = false;
}

Particles.prototype.run = function(arr){
    this.render();
    this.update();
    this.checkEdges();
    this.checkDead(arr);
}

Particles.prototype.checkEdges = function () {
    // bounce on walls
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
}

Particles.prototype.render = function () { // render movers
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}

Particles.prototype.update = function(){
    this.loc.add(this.vel);
    this.vel.limit(10)
    this.vel.add(this.acc);
    this.lifespan--;
}

Particles.prototype.checkDead = function(arr){
    if(this.lifespan <= 0){
        console.log();

        // console.log(arr)
        arr.splice(arr.indexOf(this), 1);
    } 
}