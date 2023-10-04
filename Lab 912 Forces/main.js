window.addEventListener("load", init);

//Global variables
let movers = [];
let mouseX, mouseY;
let clickCounter = 0;


function init() { //setup
    
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    let numMax = 100;

    loadMovers(numMax);
    loadListeners();
   

    animate();
}

function animate() {  //draw
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(84,115,92,0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    

    runMover();
    requestAnimationFrame(animate);

    context.fillText("Hello", 50, 60, 600)
}


function loadListeners() { // callbacks/listeners
    canvas.addEventListener('mousemove', function (event) { // 'listens' for when mouse moves, and puts mouse coords in variables
        mouseX = event.offsetX;
        mouseY = event.offsetY;

    })

    canvas.addEventListener('click', function (event) { // listens for when any mouse button is clicked
        clickCounter++
        if (clickCounter === 4) {
            clickCounter = 0
        }

    });
}

function loadMovers(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        // let y = canvas.height/2 
        let y = Math.random() * canvas.height//2 + canvas.height/2;
        let r = Math.floor(Math.random() * (100 - 10) + 10);
        movers[i] = new Mover(x, y, r, "rgba(150, 111, 250, 0.75)")
    }
}

function runMover() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}


function resizeCanvas() {
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
