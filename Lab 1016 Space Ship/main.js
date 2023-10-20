window.addEventListener("load", init);
let ship = [];
let planet;
let meteors = [];

function init(){ //setup
    canvas = document.getElementById("cnv");
    resizeCanvas(canvas);
    context = canvas.getContext("2d");
    ship[0] = new Ship(1000, 400);
    planet = new Planet(1500, 500, "rgb(40, 255, 100)");
    loadMeteors(40);

    animate();
}

function animate() { //draw
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(100,100,100,1)";
    context.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate);

    ship[0].run();
    planet.run();
    runMeteor();

}

function loadMeteors(n){
    for(let i = 0; i < n; i++){
        let x = Math.random() * (canvas.width - 1) +1
        let y = Math.random() * (canvas.height - 1) +1
        let r = 20;
        let c = "rgb(148, 153, 150)"
        meteors[i] = new Meteor(x, y, r, c);
    }
}

function runMeteor(){
    for(let i = 0; i < meteors.length; i++){
        meteors[i].run();
    }
}

function resizeCanvas(){
    const pxRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * pxRatio;
    canvas.height = canvas.clientHeight * pxRatio;
}
