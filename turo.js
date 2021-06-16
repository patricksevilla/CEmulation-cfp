let x = 50
let xvelocity = 1
let radius = 50
let rot = 0
let button
let color = 255



function changeColor(){
  color = 0
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  button = createButton("pindutin mo ko")
  button.position(0,0)
  button.mousePressed(changeColor)
  
  
  
}

function draw() {
  background(200, 5,100);
  circle(mouseX,mouseY,50)
  
  
  fill(color)
  stroke(255,0,0)
  strokeWeight(5)
  circle(width/2, height/2, 100)
  line(0,0,50,50)
  
}


// comment #//
// def function
// if condintion: - if (condition){adasd}
// 




