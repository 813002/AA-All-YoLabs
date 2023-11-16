window.addEventListener("load", init);
let snake = [];
let target;


function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    snake[0] = new Snake(1000, 400);
    target = new Target(1500, 500, "rgb(40, 255, 100)");
  

    animate();
}

function animate() { //draw
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(100,100,100,1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate);

    snake[0].run();
    target.run();
  

}


function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
