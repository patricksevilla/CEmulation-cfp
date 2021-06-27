let x = 0
let velocity, acceleration, distance

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('unnamed.png')
  
  input = createInput();
  input.position(250, 50);
  
  input1 = createInput();
  input1.position(250, 80);
  
  input2 = createInput();
  input2.position(250, 110);
  
  
  button = createButton('Submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(draw);
}

function draw() {
  background(0, 0, 0);
  fill(50, 50, 0)
  image(img, x, 250);
  
  
  velocity = input.value();
  fill(255, 255, 255);
  text("Velocity: " + str(velocity), 50, 50);
  textSize(30);
  
  acceleration = input1.value();
  fill(255, 255, 255);
  text("Acceleration: " + str(acceleration), 50, 80);
  textSize(30);
  
  distance = input2.value();
  fill(255, 255, 255);
  text("Distance: " + str(distance), 50, 110);
  textSize(30);
  
  if (x <= distance) {
    x = ((x + velocity) * 1) + acceleration
  } else {
    x = x + 0
  }
}
