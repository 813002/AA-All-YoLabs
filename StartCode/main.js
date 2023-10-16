window.addEventListener("load", init);
window.addEventListener("resize", resizeCanvas);


function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    animate();      
}

function animate() { //draw  
    
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgb(100,100,100)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    
}

function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}