function Mover(x, y, rad, col) {
    //constructor for mover
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.acc = new JSVector(0.1, 0.1);
    this.r = rad;
    this.col = col;
    this.mass = (Math.PI) * (rad ** 2);
    this.orbiters = [];
    this.loadOrbiter(10);
    this.dead = false;
}

Mover.prototype.run = function () { // run all the functions
    this.render();
    this.checkEdges();
    this.update();
    this.runOrbiter();
    this.sizeChase();
    this.checkInside();
}

Mover.prototype.checkEdges = function () {
    // bounce on walls
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
}

Mover.prototype.sizeChase = function () {
    for(let i = 0; i < movers.length; i++){
        //if other mover is smaller than this mover, this will chase 
        if(movers[i].r < this.r){
            this.acc = JSVector.subGetNew(movers[i].loc, this.loc)
            this.acc.normalize()
            this.acc.multiply(0.05)
           
        }
        //if other mover is bigger than this mover, this will run
        if (movers[i].r > this.r){
            this.acc = JSVector.subGetNew(this.loc, movers[i].loc)
            this.acc.normalize()
            this.acc.multiply(0.05)
            
        }
    }
}

Mover.prototype.checkInside = function(){
    for (let i = 0; i < movers.length; i++){
        if (this.loc.distance(movers[i].loc) <= this.r + movers[i].r && this.r < movers[i].r){
            this.dead = true;
            // this.r += 5;
        } else if (this.loc.distance(movers[i].loc) <= this.r + movers[i].r && this.r === movers[i].r){
            
        }
        
    }
}

Mover.prototype.render = function () { // render movers
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}

Mover.prototype.update = function () {//moves around
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.loc.add(this.vel);
    if(this.dead === true){
        movers.splice(movers.indexOf(this), 1);
        
    }
    
}

Mover.prototype.loadOrbiter = function (n) {
    for (let i = 0; i < n; i++) {
       
        let r = 10;
        let angle = (Math.PI * 2) * (i / n)
        let angVel = 0.1//Math.random() * 0.1 + 0.1;
        this.orbiters[i] = new Orbiter(this, r, "rgb(220,111, 0)", angle, angVel);
        
    }
}
Mover.prototype.runOrbiter = function () {
    for (let i = 0; i < this.orbiters.length; i++) {
        this.orbiters[i].run();
    }
}