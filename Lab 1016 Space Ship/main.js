window.addEventListener("load", init);
let ship, planet;

function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");   
    
    animate();
}

function animate() { //draw  
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(100,100,200,1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    requestAnimationFrame(animate);
}


function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}