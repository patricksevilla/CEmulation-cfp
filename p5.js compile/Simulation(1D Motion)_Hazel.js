let x = 0
let int_velocity
let fin_velocity
let time
let distance
let acceleration
let state = "not moving"

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  img = loadImage('unnamed.png')
  bg = loadImage('cartoon-landscape-lovely-cute-scenery-design-cartoon-landscape-lovely-cute-scenery-design-provided-empty-area-127291529.jpg')
  
  input = createInput();
  input.position(0, 25);
  input.size(100, 30);
  
  input1 = createInput();
  input1.position(0, 85);
  input1.size(100, 30);
  
  input2 = createInput();
  input2.position(0, 145);
  input2.size(100, 30);
  
  button = createButton('Enter');
  button.position(0, 195);
  button.size(120, 30);
  button.mousePressed(run);
}

function run() {
  if(state == "not moving"){
    state = "moving"
    int_velocity = parseInt(input.value())
    acceleration = parseInt(input1.value())
    distance = parseInt(input2.value())
  }else if(state == "moving"){
    state = "not moving"
  }
}

function draw() {
  background(bg);
  textFont("monospace");
  
  fill(0, 0, 0);
  text("Enter Initial Velocity:", 0, 20);
  
  fill(0, 0, 0);
  text("Enter Acceleration:", 0, 80);
  
  fill(0, 0, 0);
  text("Enter Distance:", 0, 140);
  
  if(state == "not moving"){
      x = 0
      int_velocity = 0
      acceleration = 0
      fin_velocity = "unknown"
      time = "unknown"
      button.html("Enter")
  }else if(state == "moving"){
    if(x <= distance){
        fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** (1/2);
        time = (fin_velocity - int_velocity) / acceleration
        x = x + fin_velocity
    }else if(x == parseInt(input2.value())){
        velocity = 0
        acceleration = 0
        button.html("Reset")
    }
  }
  
  fill(0, 0, 0);
  text("Initial Velocity: " + str(int_velocity), x + 300, (height/1.5) + 50);
  textSize(20);
  
  fill(0, 0, 0);
  text("Acceleration: " + str(acceleration), x + 300, (height/1.5) + 70);
  textSize(20);
  
  fill(0, 0, 0);
  text("Final Velocity: " + str(fin_velocity), x + 300, (height/1.5) + 90);
  textSize(20);
  
  fill(0, 0, 0);
  text("Time: " + str(time), x + 300, (height/1.5) + 110);
  textSize(20);
  
  fill(0, 0, 0);
  text("Formula:", 500, 20);
  
  fill(0, 0, 0);
  text("V² = Vₒ² + 2a (x - xₒ)", 500, 50);
  
  fill(0, 0, 0);
  text("V = Vₒ + at", 500, 80);
  
  if(x >= width){
    x = width
  }
  image(img,x, height/1.5, 300)
}
