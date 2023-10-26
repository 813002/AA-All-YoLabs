function Meteor(x, y, r, col) {
    this.loc = new JSVector(x, y)
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3)
    this.r = r;
    this.col = col;
}

Meteor.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}

Meteor.prototype.render = function () {
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.r, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}

Meteor.prototype.update = function () {
    this.vel.limit(6);
    this.loc.add(this.vel);
}





Meteor.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
}