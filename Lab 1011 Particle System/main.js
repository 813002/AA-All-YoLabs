window.addEventListener("load", init);
//Global variables
let particleSystem = []


function init() { //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    loadSystem(1);
    animate();
}

function animate() {  //draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(84,0,92, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    runSystem();
    requestAnimationFrame(animate);
}

function loadSystem(n){
    for(let i = 0; i < n; i++){
        let x = canvas.width/2;
        let y = 50;
        particleSystem[i] = new PartSyst(x, y);
    }
}

function runSystem(){
    for (let i = 0; i < particleSystem.length; i++){
        particleSystem[i].run();
    }
}

function resizeCanvas() {
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
