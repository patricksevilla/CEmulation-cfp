let x = 0
let int_velocity
let fin_velocity
let time
let distance
let acceleration
let state = "not moving"
let screen = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  img = loadImage('unnamed.png')
  bg = loadImage('cartoon-landscape-lovely-cute-scenery-design-cartoon-landscape-lovely-cute-scenery-design-provided-empty-area-127291529.jpg')
  
  input = createInput();
  input.position(20, 55);
  input.size(150, 50);
  
  input1 = createInput();
  input1.position(370, 55);
  input1.size(150, 50);
  
  input2 = createInput();
  input2.position(720, 55);
  input2.size(150, 50);
  
  let col = color(130, 250, 156)
  button = createButton('Enter');
  button.position(20, 130);
  button.size(150, 50);
  button.style('font-size', '30px');
  button.style('background-color', col);
  button.mousePressed(run);
  
  let col1 = color(247, 121, 218)
  button1 = createButton('Show Solution');
  button1.position(20, 200);
  button1.size(200, 100);
  button1.style('font-size', '30px');
  button1.style('background-color', col1);
  button1.mousePressed(compute);
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
  textSize(30);
  
  if (screen == 0) {
  
  fill(0, 0, 0);
  text("Initial Velocity:", 10, 45);
    
  fill(0, 0, 0);
  text("Acceleration:", 360, 45);

  fill(0, 0, 0);
  text("Distance:", 710, 45);
  
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
  text("Initial Velocity: " + str(int_velocity), x + 300, (height/1.5) + 60);
  textSize(30);
  
  fill(0, 0, 0);
  text("Acceleration: " + str(acceleration), x + 300, (height/1.5) + 90);
  textSize(30);
  
  fill(0, 0, 0);
  text("Final Velocity: " + str(fin_velocity), x + 300, (height/1.5) + 120);
  textSize(30);
  
  fill(0, 0, 0);
  text("Time: " + str(time), x + 300, (height/1.5) + 150);
  textSize(30);
  
  if(x >= width){
    x = width
  }
  image(img,x, height/1.5, 300)
  }
  
  else if(screen == 1) {
    
    fill(0, 0, 0);
    text("Initial Velocity:", 10, 45);

    fill(0, 0, 0);
    text("Acceleration:", 360, 45);

    fill(0, 0, 0);
    text("Distance:", 710, 45);
    
    fill(0, 0, 0);
    text("Formula and Solution:", 470, 300);
    textSize(30);

    fill(0, 0, 0);
    text("Final Velocity:", 300, 350);
    textSize(30);
    
    fill(0, 0, 0);
    text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
    textSize(30);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) + "² + " + "2(" + str(acceleration) + ")(" + str(distance) + " - 0)", 300, 430);
    textSize(30);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) ** 2 + " + " + "2(" + str(acceleration) + ")(" + str(distance) + ")", 300, 470);
    textSize(30);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) ** 2 + " + " + (2 * str(acceleration) * str(distance)), 300, 510);
    textSize(30);

    fill(0, 0, 0);
    text("V² = " + ((int_velocity ** 2)  + (2 * acceleration * distance)), 300, 550);
    textSize(30);
    
    fill(0, 0, 0);
    text("V =  " + str(fin_velocity), 300, 590);
    textSize(30);
    
    fill(0, 0, 0);
    text("Time:", 800, 350);
    textSize(30);
    
    fill(0, 0, 0);
    text("V = Vₒ + at", 800, 390);
    textSize(30);
    
    fill(0, 0, 0);
    text("t = (V - Vₒ) / a", 800, 430);
    textSize(30);
    
    fill(0, 0, 0);
    text("t = (" + str(fin_velocity) + " - " + str(int_velocity) + ") / " + str(acceleration), 800, 470);
    textSize(30);
    
    fill(0, 0, 0);
    text("t = " + (str(fin_velocity) - str(int_velocity)) + " / " + str(acceleration), 800, 510);
    textSize(30);
    
    fill(0, 0, 0);
    text("t = " + str(time), 800, 550);
    textSize(30);
  }
}

function compute(){
  if(screen == 0){
    solution();
  }
}

function solution() {
  screen = 1;
}
