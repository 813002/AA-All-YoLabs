window.addEventListener("load", init);
//Global variables
let particles = [];


function init() { //setup
    let numMax = 5;
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    loadParticles(numMax);
    animate();
}

function animate() {  //draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(84,0,92, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    runParticle();
    requestAnimationFrame(animate);
}

function loadParticles(n){
    for (let i = 0; i < n; i++) {
       
        let x = canvas.width/2;
        let y = canvas.height/2;
        let r = 10;
        particles[i] = new Particles(x, y, r, "rgba(0, 0, 250, 0.75)", Math.floor(Math.random()*(1000-100)+100));
        
    }
}

function runParticle(){
    for(let i = 0; i < particles.length; i++){
        particles[i].run();
    }
}

function resizeCanvas() {
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
