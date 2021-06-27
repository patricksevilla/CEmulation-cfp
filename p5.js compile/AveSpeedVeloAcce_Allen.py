let x = 10
let y 
let xspeed
let yspeed
let xacceleration
let submit
let state = "not moving"


function setup() {
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage('background.jpg')
  img2 = loadImage('car.png')
  
  xspeedInit = createInput("Input xspeed")
  xspeedInit.position(20,20)
  
  xaccelerationInit = createInput("Input xacceleration")
  xaccelerationInit.position(20,50)
  
  submit = createButton("submit")
  submit.mousePressed(go)
  submit.position(200,20)
}



function go(){
  if(state == "not moving"){
    state = "moving"
    xspeed = parseInt(xspeedInit.value())
    xacceleration = parseInt(xaccelerationInit.value())
  }else if(state == "moving"){
    state = "not moving"
  }
}

function draw() {
  image(img1, 0, 0, windowWidth, windowHeight)
  image(img2, x, 320, 150, 100);
  
  if(state == "not moving"){
      x = 10
      xspeed = 1
      submit.html("submit")
  }else if(state == "moving"){
      xspeed = xspeed + xacceleration
      x = x + xspeed
      submit.html("reset")
  }
  
  if(x >= width){
    x = width
  }
}
