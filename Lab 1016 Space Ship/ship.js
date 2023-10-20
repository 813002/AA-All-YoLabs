function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.acc = new JSVector(0, 0);
    this.col = "rgb(100, 150, 150)"
    this.fl = 40;

}

Ship.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}

Ship.prototype.render = function () {
    let ctx = context;
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    ctx.rotate(this.vel.getDirection() + Math.PI / 2)
    //ship render
    ctx.beginPath();
    ctx.strokeStyle = this.col;
    ctx.fillStyle = this.col;
    ctx.moveTo(0, -15)
    ctx.lineTo(-10, 10)
    ctx.lineTo(0, 0)
    ctx.lineTo(10, 10)
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // ship flame render
    ctx.beginPath();
    let col = "rgba(255, 80, 5, .8)";
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.moveTo(0, 15);
    ctx.lineTo(-4, 20);
    // this.fl += Math.random() * 4 - 2;
    // if(this.fl > 90 || this.fl < 35){this.fl = 45}
    ctx.lineTo(0, this.fl);
    ctx.lineTo(4, 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

Ship.prototype.update = function () {
    this.acc = new JSVector(0, 0);
    for (let i = 0; i < meteors.length; i++) {
        let dist = this.loc.distance(meteors[i].loc);

        if (dist < 100) {
            let temp = JSVector.subGetNew(this.loc, meteors[i].loc)
            temp.normalize()
            temp.setMagnitude(0.5)
            this.acc.add(temp);
        }
    }
    let temp2 = JSVector.subGetNew(planet.loc, this.loc)
    temp2.normalize()
    temp2.multiply(0.5)
    this.acc.add(temp2);
    this.vel.add(this.acc)
    this.vel.limit(6)
    this.loc.add(this.vel);
}

Ship.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0
    if (this.loc.x < 0) this.loc.x = canvas.width
    if (this.loc.y > canvas.height) this.loc.y = 0
    if (this.loc.y < 0) this.loc.y = canvas.height
}
