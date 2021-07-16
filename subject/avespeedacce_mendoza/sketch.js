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

  xspeedInit = createInput()
  xspeedInit.position(120,20)

  xaccelerationInit = createInput()
  xaccelerationInit.position(120,50)

  submit = createButton("submit")
  submit.mousePressed(go)
  submit.position(300,20)
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
  image(img2, x, height*0.7, 150, 100);

  fill(0, 0, 0);
  text("Input Speed:", 20, 35);
    
  fill(0, 0, 0);
  text("Input Acceleration:", 20, 65);

  
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
    x = width - 100
  }
  
  if(x >= width - 150){
  x = width - 150
  }
}
