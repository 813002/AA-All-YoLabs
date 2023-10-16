function Ship(x, y){
    this.loc = new JSVector(x, y)
    this.vel = new JSVector(Math.random() * 6 - 3, Math.random() * 6 - 3);
}

Ship.prototype.run() = function(){
    this.render();
    this.update();
}

Ship.prototype.render = function(){
    
}