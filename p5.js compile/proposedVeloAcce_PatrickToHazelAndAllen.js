let x = 10
let y 
let xspeed
let yspeed
let xacceleration
let submit
let state = "not moving"


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  xspeedInit = createInput("input xspeed")
  xspeedInit.position(0,0)
  
  xaccelerationInit = createInput("input xacceleration")
  xaccelerationInit.position(0,30)
  
  submit = createButton("submit")
  submit.mousePressed(go)
  submit.position(170,0)
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
  background(220);
  
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
  circle(x,height/2,20)
}
