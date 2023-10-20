function Particles(x = 0, y = 0, r, col, lifespan, ranNum) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.acc = new JSVector(0, 0.1);
    this.lifespan = lifespan;
    this.r = r
    this.col = col;
    this.ranNum = ranNum;
}

Particles.prototype.run = function () {
    this.render();
    this.update();
    // this.checkEdges();

}

Particles.prototype.checkEdges = function () {
    // bounce on walls
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
}

Particles.prototype.render = function () { // render movers
    let ctx = context;
    if (this.ranNum <= 5) {
        ctx.strokeStyle = this.col;
        ctx.fillStyle = this.col;
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
        ctx.stroke();
        ctx.fill();
    } else if (this.ranNum <= 10) {
        ctx.save();
        ctx.translate(this.loc.x, this.loc.y);
        ctx.rotate(this.vel.getDirection() + Math.PI / 2);
        ctx.beginPath();
        ctx.strokeStyle = this.col;
        ctx.fillStyle = this.col;
        ctx.moveTo(0, -15);
        ctx.lineTo(-5, 5);
        ctx.lineTo(0, 0);
        ctx.lineTo(5, 5);
        ctx.closePath()
        ctx.stroke();
        ctx.fill()
        ctx.restore();
    } else if(this.ranNum <=15){
       
        ctx.beginPath();
        ctx.strokeStyle = this.col;
        ctx.fillStyle = this.col;
        ctx.rect(this.loc.x, this.loc.y, this.r, this.r);
        ctx.closePath()
        ctx.stroke();
        ctx.fill()
        
    }
}

Particles.prototype.update = function () {
    this.loc.add(this.vel);
    this.vel.limit(10)
    this.vel.add(this.acc);
    this.lifespan--;
}

