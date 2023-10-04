function Mover(x, y, rad, col){
    //constructor for mover
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*6-3, Math.random()*6-3);
    this.acc = new JSVector(0, 0);
    this.r = rad;
    this.col = col;
    this.mass = (Math.PI) * (rad ** 2);
}

Mover.prototype.run = function(){ // run all the functions
    this.render();
    this.checkEdges();
    this.update();
    this.applyAttraction();
    
}

Mover.prototype.checkEdges = function(){

    if(clickCounter === 1){ // if there is gravity or no forces applied, bounce on walls
        if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
        if(this.loc.x < 0) this.vel.x = -this.vel.x;
        if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
        if(this.loc.y < 0) this.vel.y = -this.vel.y;
        
    } else if(clickCounter === 0 || clickCounter === 2 || clickCounter === 3){ // if wind force is applied, make balls teleport
        if(this.loc.x > canvas.width) this.loc.x = 0
        if(this.loc.x < 0) this.loc.x = canvas.width
        if(this.loc.y > canvas.height) this.loc.y = 0
        if(this.loc.y < 0) this.loc.y = canvas.height
    }
}

Mover.prototype.render = function(){ // render movers
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI*2, 0);
    context.stroke();
    context.fill(); 
}

Mover.prototype.update = function(){
    this.acc = new JSVector(0,0);
    if(clickCounter === 0){   // sets acceleration to none
       this.applyAttraction();
    
    } else if(clickCounter === 1){ // sets gravity with acceleration based on mass/size (should be. IDK if there is bug)
        let gravMult = 0.01*this.r;
        this.acc = new JSVector(0, gravMult/4)
        
    } else if(clickCounter === 2){ // sets wind force to the right, making the movers go to the left
        this.acc = new JSVector(0.1, 0);
    } else if (clickCounter === 3){
        this.acc = new JSVector(-0.1, 0);
    }
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.loc.add(this.vel);
    
}

Mover.prototype.applyAttraction = function(){
    this.acc = new JSVector(0, 0);
    let temp = new JSVector();
    for (let i = 0; i < movers.length; i++){
        if(this !== movers[i]){ 
            // let temp = new JSVector();
            temp.add(movers[i].loc);
            temp.sub(this.loc);
            temp.normalize();
            temp.multiply(this.mass * movers[i].mass);
            temp.divide(this.loc.distance(movers[i].loc) ** 2);
            this.acc.add(temp);
        }
    }

    this.acc.divide(this.mass);
}
