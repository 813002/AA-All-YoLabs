window.addEventListener("load", init);

//Global var
let array = [];
let bubbles = [];

function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");     
    animate();
    let min = 1
    let max = 100
    let numMax = 50
    let bubAtract = new Bubble(10, 10, 50);
    let bubRepel = new Bubble(100, 100, 50);

    
    // resizeCanvas();
    loadBubbles(numMax);
    animate(); 
}

function animate() {  //draw
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgb(200,100,100)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    runBubbles();   // run bubbles
    requestAnimationFrame(animate);
    
    
}



function loadNumbers (a, b, n) {
    
    for (let i = 0; i < n; i++){    
        let num = Math.floor(Math.random()*b + a);
        array.push(num);
    }
    return array;

    
}
function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 25 + 5;
        bubbles[i] = new Bubble(x, y, r);
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
