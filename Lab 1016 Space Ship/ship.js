function Ship(x, y){
    this.loc = new JSVector(x, y)
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
    this.col = "rgb(100, 150, 150)"
}

Ship.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Ship.prototype.render = function(){

    context.beginPath();
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.moveTo(0, -15)
    context.lineTo(-10, 10)
    context.lineTo(0, 0)
    context.lineTo(10, 10)
    context.closePath();
}

Ship.prototype.update = function(){

}

Ship.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0
    if(this.loc.x < 0) this.loc.x = canvas.width
    if(this.loc.y > canvas.height) this.loc.y = 0
    if(this.loc.y < 0) this.loc.y = canvas.height
}