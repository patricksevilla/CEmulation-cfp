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
  input1.position(290, 55);
  input1.size(150, 50);
  
  input2 = createInput();
  input2.position(560, 55);
  input2.size(150, 50);
  
  input3 = createInput();
  input3.position(830, 55);
  input3.size(150, 50);
  
  input4 = createInput();
  input4.position(1100, 55);
  input4.size(150, 50);
  
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
  button1.mousePressed(formula);
}

function compute() {
  if(isNaN(int_velocity)){
    if(isNaN(distance)){
      int_velocity = fin_velocity - (acceleration * time)
    }else if(isNaN(fin_velocity)){
      int_velocity = (distance - (0.5 * acceleration * (time ** 2))) / time
    }else if(isNaN(time)){
      int_velocity = ((fin_velocity ** 2) - (2 * acceleration * distance)) ** 0.5
    }
  }else if(isNaN(acceleration)){
    if(isNaN(distance)){
      acceleration = (fin_velocity - int_velocity) / time
    }else if(isNaN(time)){
      acceleration = ((fin_velocity ** 2) - (int_velocity ** 2)) / (2 * distance)
    }else if(isNaN(fin_velocity)){
      acceleration = (distance - (int_velocity * time)) / (0.5 * (time ** 2))
    }
  }else if(isNaN(distance)){
    if(isNaN(fin_velocity)){
      distance = (int_velocity * time) + (0.5 * acceleration * (time ** 2))
    }else if(isNaN(time)){
      distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
    }
  }else if(isNaN(fin_velocity)){
    if(isNaN(distance)){
      fin_velocity = int_velocity - (acceleration * time)
    }else if(isNaN(time)){
      fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** 0.5
    }
  }else if(isNaN(time)){
      time = (fin_velocity - int_velocity) / acceleration
    }
}

function run() {
  if(state == "not moving"){
    state = "moving"
    int_velocity = parseInt(input.value())
    acceleration = parseInt(input1.value())
    distance = parseInt(input2.value())
    fin_velocity = parseInt(input3.value())
    time = parseInt(input4.value())
  }else if(state == "moving"){
    state = "not moving"
  }
}

function draw() {
  background(bg);
  textFont("monospace");
  textSize(25);
  
  if (screen == 0) {
  
  fill(0, 0, 0);
  text("Initial Velocity:", 10, 45);
    
  fill(0, 0, 0);
  text("Acceleration:", 280, 45);

  fill(0, 0, 0);
  text("Distance:", 580, 45);
    
  fill(0, 0, 0);
  text("Final Velocity:", 820, 45);
    
  fill(0, 0, 0);
  text("Time:", 1150, 45);
  
  if(state == "not moving"){
      x = 0
      int_velocity = 0
      acceleration = 0
      distance = 0
      fin_velocity = "unknown"
      time = "unknown"
      button.html("Enter")
  }else if(state == "moving"){
    compute();
    if(x <= distance){
      x = x + fin_velocity
    }else if(x == parseInt(input2.value())){
        velocity = 0
        acceleration = 0
        button.html("Reset")
    }
  }

    
  textSize(30);
  
  fill(0, 0, 0);
  text("Initial Velocity: " + int_velocity, x + 300, (height/1.5) + 60);
  
  fill(0, 0, 0);
  text("Acceleration: " + acceleration, x + 300, (height/1.5) + 90);
    
  fill(0, 0, 0);
  text("Distance: " + distance, x + 300, (height/1.5) + 120);
  
  fill(0, 0, 0);
  text("Final Velocity: " + fin_velocity, x + 300, (height/1.5) + 150);
  
  fill(0, 0, 0);
  text("Time: " + time, x + 300, (height/1.5) + 180);
  
  if(x >= width){
    x = width
  }
  image(img, x, height/1.5, 300)
  }
  
  else if(screen == 1) {
    
    textSize(25);
    
    fill(0, 0, 0);
    text("Initial Velocity:", 10, 45);
    
    fill(0, 0, 0);
    text("Acceleration:", 280, 45);

    fill(0, 0, 0);
    text("Distance:", 580, 45);

    fill(0, 0, 0);
    text("Final Velocity:", 820, 45);

    fill(0, 0, 0);
    text("Time:", 1150, 45);
    
    textSize(30);
    
    fill(0, 0, 0);
    text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) + "² + " + "2(" + str(acceleration) + ")(" + str(distance) + " - 0)", 300, 430);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) ** 2 + " + " + "2(" + str(acceleration) + ")(" + str(distance) + ")", 300, 470);
    
    fill(0, 0, 0);
    text("V² = " + str(int_velocity) ** 2 + " + " + (2 * str(acceleration) * str(distance)), 300, 510);

    fill(0, 0, 0);
    text("V² = " + ((int_velocity ** 2)  + (2 * acceleration * distance)), 300, 550);
    
    fill(0, 0, 0);
    text("V =  " + str(fin_velocity), 300, 590);
    
    fill(0, 0, 0);
    text("Time:", 800, 350);
    
    fill(0, 0, 0);
    text("V = Vₒ + at", 800, 390);
    
    fill(0, 0, 0);
    text("t = (V - Vₒ) / a", 800, 430);
    
    fill(0, 0, 0);
    text("t = (" + str(fin_velocity) + " - " + str(int_velocity) + ") / " + str(acceleration), 800, 470);
    
    fill(0, 0, 0);
    text("t = " + (str(fin_velocity) - str(int_velocity)) + " / " + str(acceleration), 800, 510);
    
    fill(0, 0, 0);
    text("t = " + str(time), 800, 550);
  }
}

function formula(){
  if(screen == 0){
    solution();
  }
}

function solution() {
  screen = 1;
}
