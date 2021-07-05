let velocity;
let submit;
let slider;
let state = "not moving"
let position = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // angleMode(DEGREES)
  // angleMode(RADIANS)
  
  velocity = createInput("Input Velocity");
  velocity.position(10,10);
  
  slider = createSlider(100,500,300);
  slider.position(10,40);
  
  submit = createButton("Submit");
  submit.mousePressed(go);
  submit.position(200,10);
}

function draw() {
  background(80, 200);
  
  push();
  strokeWeight(2);
  stroke(125, 180, 108);
  translate(width * 0.5, height * 0.5);
  ellipse(0, 0, slider.value(), slider.value());
  pop();
  // print(frameCount)
  
  // line(0,0,1,1)
  if(state == "not moving"){
    push();
    translate(width/2,height/2)
    rotate(0)
    ellipse(slider.value()/2,0,10,10)
    pop()
  }else{
    position = position + int(velocity.value())
    push();
    translate(width/2,height/2)
    rotate(position)
    ellipse(slider.value()/2,0,10,10)
    line(slider.value()/2,0,slider.value()/2 - 50, 0)
    pop()
    
  }

}

function go(){
  if(state == "not moving"){
    state = "moving"
  } else if(state == "moving"){
    state = "not moving"
  }
}

