function PartSyst(x, y){
    this.loc = new JSVector(x, y);
    this.particles = [];

    
    this.lifespan = 10// Math.floor(Math.random()*(1000-100)+100);

 
    this.loadParticle(5);
}

PartSyst.prototype.run = function(){
    this.render();
    this.runParticle();
}

PartSyst.prototype.render = function(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}


PartSyst.prototype.loadParticle = function(n){
    for (let i = 0; i < n; i++) {
       
        let x = canvas.width/2;
        let y = canvas.height/2;
        let r = 10;
        this.particles[i] = new Particles(x, y, r, "rgba(0, 0, 250, 0.75)", this.lifespan);
        
    }
}

PartSyst.prototype.runParticle = function(){
    for(let i = 0; i < this.particles.length; i++){
        // console.log(this.particles)
        this.particles[i].run(this.particles);
    }
}

