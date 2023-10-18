function PartSyst(x, y) {
    this.loc = new JSVector(x, y);
    this.particles = [];
    this.lifespan = 30// Math.floor(Math.random()*(1000-100)+100);
    this.loadParticle(5);
}

PartSyst.prototype.run = function () {
    this.render();
    this.runParticle();
    this.loadParticle(1)
    console.log(this.particles.length)
}

PartSyst.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}


PartSyst.prototype.loadParticle = function (n) {
    for (let i = 0; i < n; i++) {
        let ranNum = Math.random() * (10 - 1) + 1
        let x = this.loc.x;
        let y = this.loc.y;
        let r = 10;
        this.particles.push(new Particles(x, y, r, "rgba(100, 190, 250, 0.75)", this.lifespan, ranNum));

    }
}

PartSyst.prototype.runParticle = function () {
    for (let i = 0; i < this.particles.length; i++) {
        if (this.lifespan <= 0) {
            this.particles[i].splice(i, 1);

        }

    }

    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].run();
    }
}

