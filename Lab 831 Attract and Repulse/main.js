window.addEventListener("load", init);

//Global var
let array = [];
let bubbles = [];
let movers = [];
let bubAtract;//
let bubRepel;


function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");     
    let numMax = 500

    bubAtract = new Mover(canvas.width-100,canvas.height-100, 15,  "rgba(200,150,255,255)");
    bubRepel = new Mover(canvas.width/2,canvas.height/2, 15, "rgba(0,200, 150,255)");
    
   
    animate();
    loadBubbles(numMax);
    
}

function animate() {  //draw
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgb(84,115,92)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    runBubbles();   // run bubbles
    bubRepel.run();
    bubAtract.run();
    requestAnimationFrame(animate);
    
}



function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = 10;
        bubbles[i] = new Bubble(x, y, r, false, false);
    }
}

// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}

function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
