var mouseDown = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0,0,0);
}

function draw() {
    //background(255, 255, 255);
    var resolution = 6;
    var size = 4;
    if (mouseDown) {
        circle (resolution * (Math.floor(mouseX / resolution)), resolution * (Math.floor(mouseY / resolution)), size);
        circle (resolution * (Math.floor(mouseX / resolution)+1), resolution * (Math.floor(mouseY / resolution)), size);
        circle (resolution * (Math.floor(mouseX / resolution)-1), resolution * (Math.floor(mouseY / resolution)), size);
        circle (resolution * (Math.floor(mouseX / resolution)), resolution * (Math.floor(mouseY / resolution+1)), size);
        circle (resolution * (Math.floor(mouseX / resolution)), resolution * (Math.floor(mouseY / resolution-1)), size);
    }

    if (touches.length > 0) {
        //print(touches);
        circle (resolution * (Math.floor(touches[0].x / resolution)), resolution * (Math.floor(touches[0].y / resolution)), size);
        circle (resolution * (Math.floor(touches[0].x / resolution)+1), resolution * (Math.floor(touches[0].y / resolution)), size);
        circle (resolution * (Math.floor(touches[0].x / resolution)-1), resolution * (Math.floor(touches[0].y / resolution)), size);
        circle (resolution * (Math.floor(touches[0].x / resolution)), resolution * (Math.floor(touches[0].y / resolution+1)), size);
        circle (resolution * (Math.floor(touches[0].x / resolution)), resolution * (Math.floor(touches[0].y / resolution-1)), size);
    }
    
}

function mousePressed() {
    mouseDown = true;
}

function mouseReleased() {
    mouseDown = false;
}

function keyPressed() {
    if (key === "r") {
      background(0,0,0);
    }
  }