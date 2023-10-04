window.addEventListener("load", init);


function init(){ //setup
    let cnv = createCanvas(900, 700);
    cnv.position((windowWidth - width) /2, 50)
    
    // canvas = document.getElementById("cnv");
    // context = canvas.getContext("2d"); 
    
    let v1 = new JSVector(3, 4);
    let v2 = new JSVector(3, 7);
   
    v1.add(v2);
    console.log(v1.x)

    // console.log("V1 mag = " + v1.getMagnitude())
    
    animate();         
}

function animate() { //draw  
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate); // next cycle


}

