function Snake(x, y) {
    this.loc = new JSVector(x, y);
    // let dx = Math.random() * 8 - 4;
    // let dy = Math.random() * 8 - 4;
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.acc = new JSVector(0, 0);
    this.col = "rgb(100, 150, 150)"
    this.segs = [];
    this.numSegs = 250
    this.segLength = 13;
    for (let i = 0; i < this.numSegs; i++) {
        this.segs.push(new JSVector(0, 0));
    }

}

Snake.prototype.run = function () {
    this.render();
    this.update();
    
    this.checkEdges();
}

Snake.prototype.render = function () {
    let ctx = context;
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    ctx.rotate(this.vel.getDirection() + Math.PI / 2)
    //Snake render
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


    ctx.restore();
}

Snake.prototype.update = function () {
    this.acc = new JSVector(0, 0);

    let temp2 = JSVector.subGetNew(target.loc, this.loc)
    temp2.normalize()
    temp2.multiply(0.4)
    this.acc.add(temp2);
    this.vel.add(this.acc)
    this.vel.limit(2)
    this.loc.add(this.vel);

    this.updateSegments(0, this.loc);
    for(let i = 0; i < this.numSegs - 1; i++){
        this.updateSegments(i + 1, this.segs[i]);
    }

}

Snake.prototype.updateSegments = function (nextI, vec) {
    let dx = vec.x - this.segs[nextI].x;
    let dy = vec.y - this.segs[nextI].y;
    let angle = Math.atan2(dy, dx);
    this.segs[nextI].x = vec.x - Math.cos(angle) * this.segLength;
    this.segs[nextI].y = vec.y - Math.sin(angle) * this.segLength;
    this.renderSegment(nextI, angle);
}

Snake.prototype.renderSegment = function (nextI, a) {
    let ctx = context;
    ctx.save();
    ctx.translate(this.segs[nextI].x, this.segs[nextI].y);
    ctx.rotate(a + Math.PI / 2);
    let scaleFactor = 1 + (3 / (nextI));
    ctx.scale(scaleFactor, scaleFactor);
    ctx.beginPath();
    let r = 255 - nextI * 2;
    let b = nextI;
    let g = nextI * 2;
    ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b +', 0.8)';
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b +', 0.8)';
    
    //segment design
    // ctx.moveTo(20, 20);
    // ctx.lineWidth = 15;
    // ctx.lineCap = "round";
    // ctx.lineTo(100, 100);
    // ctx.stroke(); // use this one for segment

    //ship design
    ctx.moveTo(0,-15);
    ctx.lineTo(-10,10);
    ctx.lineTo(0,0);
    ctx.lineTo(10,10);
    ctx.closePath();
    ctx.stroke // use this one for ship
    ctx.fill();
    ctx.restore();
}

Snake.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0
    if (this.loc.x < 0) this.loc.x = canvas.width
    if (this.loc.y > canvas.height) this.loc.y = 0
    if (this.loc.y < 0) this.loc.y = canvas.height
}
