window.addEventListener("load", init);
//Global variables
let particleSystem = []
let mouseX, mouseY;

function init() { //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    loadListeners();
    loadSystem(1);
    animate();
}

function animate() {  //draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "rgba(84,100,92, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    runSystem();
    requestAnimationFrame(animate);
}

function loadSystem(n) {
    canvas.addEventListener('click', function (event) { // listens for when any mouse button is clicked
        for (let i = 0; i < n; i++) {
            let x = mouseX;
            let y = mouseY;
            particleSystem.push(new PartSyst(x, y));
        }
    });
    
}

function runSystem() {
    for (let i = 0; i < particleSystem.length; i++) {
        particleSystem[i].run();
    }
}

function loadListeners() { // callbacks/listeners
    canvas.addEventListener('mousemove', function (event) { // 'listens' for when mouse moves, and puts mouse coords in variables
        mouseX = event.offsetX;
        mouseY = event.offsetY;

    })

   
}

function resizeCanvas() {
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
