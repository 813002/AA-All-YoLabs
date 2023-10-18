window.addEventListener("load", init);
let ship, planet;

function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    ship = new Ship(1000, 400);
    planet = new Planet(1500, 500, "rgb(40, 255, 100)");

    animate();
}

function animate() { //draw
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(100,100,100,1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate);

    ship.run();
    planet.run();

}


function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
