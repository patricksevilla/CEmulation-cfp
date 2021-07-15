let velocity;
let submit;
let slider;
let state = "not moving"
let position = 0;
let ratio;
let radius;

function setup() {
  
  createCanvas(windowWidth, windowWidth/1.77);

  // angleMode(DEGREES)
  // angleMode(RADIANS)
  
  velocity = createInput("");
  velocity.position(10,windowHeight/3.4);
  velocity.size(300, 30)
  
  slider = createSlider(100,600,300);
  slider.position(10,windowHeight/2.95);
  slider.size(310, 100);
  
  submit = createButton("Run");
  submit.mousePressed(go);
  submit.position(10, 500);
  submit.size(150, 80);
  
  mont = loadFont("Montserrat-SemiBold.otf")
  
  bg = loadImage("bgg.png");
  formula = loadImage("formula.jpg");
  ap = loadImage("ap.png");
}

function draw() {
  image(bg, 0, 0, windowWidth, windowWidth/1.77);
  
  text('Input Velocity m/s', 10, windowHeight/3.5)
  text('Set Radius in m', 10, windowHeight/2.7)
  text(radius, 300, windowHeight/2.7)
  textSize(30);
  textFont(mont);

  radius = slider.value() - 90;
  ratio = radius * 20;
  
  push();
  strokeWeight(4);
  stroke(300, 255, 45);
  translate(width * 0.5, height * 0.6);
  fill(0, slider.value() - 150, 255, 25);
  ellipse(0, 0, slider.value(), slider.value());
  
  pop();
  // print(frameCount)
  
  // line(0,0,1,1)
  if(state == "not moving"){
    push();
    translate(width/2,height*0.6);
    rotate(0);
    image(ap, (slider.value()/2) -40 , -25, 80, 80);
    pop();
    
  }else{
    position = position + int(velocity.value())/ratio;
    push();
    translate(width/2,height*0.6);
    rotate(-position);
    line(slider.value()/2, 0, ratio/radius-20, 0);
    image(ap, (slider.value()/2) - 40 ,-25, 80 ,80);
    pop()
  }

  image(formula, 10, 620, 300, 169);
  ac = (velocity.value() * velocity.value())/radius;
  
  textSize(20)
  text("The Centripetal Acceleration in meter/seconds is", 10, 850)
  text(ac, 90, 880)
}

function go(){
  if(state == "not moving"){
    state = "moving"
  } else if(state == "moving"){
    state = "not moving"
  }
}
