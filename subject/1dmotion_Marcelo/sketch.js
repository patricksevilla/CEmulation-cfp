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
      distance = int_velocity * time + (0.5 * acceleration * time**2)
    }else if(isNaN(fin_velocity)){
      int_velocity = (distance - (0.5 * acceleration * (time ** 2))) / time
      fin_velocity = int_velocity + (acceleration * time)
    }else if(isNaN(time)){
      int_velocity = ((fin_velocity ** 2) - (2 * acceleration * distance)) ** 0.5
      time = (fin_velocity - int_velocity) / acceleration
    }
  }else if(isNaN(acceleration)){
    if(isNaN(distance)){
      acceleration = (fin_velocity - int_velocity) / time
      distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
    }else if(isNaN(time)){
      acceleration = ((fin_velocity ** 2) - (int_velocity ** 2)) / (2 * distance)
      time = (fin_velocity - int_velocity) / acceleration
    }else if(isNaN(fin_velocity)){
      acceleration = (distance - (int_velocity * time)) / (0.5 * (time ** 2))
      fin_velocity = int_velocity + (acceleration * time)
    }
  }else if(isNaN(distance)){
    if(isNaN(fin_velocity)){
      distance = (int_velocity * time) + (0.5 * acceleration * (time ** 2))
      fin_velocity = int_velocity + (acceleration * time)
    }else if(isNaN(time)){
      distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
      time = (fin_velocity - int_velocity) / acceleration
    }
  }else if(isNaN(fin_velocity)){
    if(isNaN(distance)){
      fin_velocity = int_velocity + (acceleration * time)
      distance = (int_velocity * time) + (0.5 * acceleration * (time ** 2))
    }else if(isNaN(time)){
      fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** 0.5
      time = (fin_velocity - int_velocity) / acceleration
    }
  }else if(isNaN(time)){
    if(isNaN(distance)){
      time = (fin_velocity - int_velocity) / acceleration
      distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
    }else if(isNaN(fin_velocity)){
      time = ((-1 * int_velocity) + ((int_velocity ** 2) - (4 * 0.5 * acceleration * distance))) / acceleration
      fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** 0.5
    }
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
      fin_velocity = 0
      time = 0
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
    
    texts()
}

function texts() {
    int_velocity = parseInt(input.value())
    acceleration = parseInt(input1.value())
    distance = parseInt(input2.value())
    fin_velocity = parseInt(input3.value())
    time = parseInt(input4.value())
    textSize(30);
    fill(0, 0, 0);
    
    if(isNaN(int_velocity)){
      if(isNaN(distance)){
        int_velocity = fin_velocity - (acceleration * time);
        text("Initial Velocity:", 300, 350);
        text("V = Vₒ + at", 300, 390);
        text("Vₒ = V - at", 300, 430);
        text("Vₒ = " + fin_velocity + " - (" + acceleration + ")(" + time + ")", 300, 470);
        text("Vₒ = " + fin_velocity + " - " + (acceleration * time), 300, 510);
        text("Vₒ = " + int_velocity, 300, 550);
        
        distance = int_velocity * time + (0.5 * acceleration * time**2);
        text("Distance: (let xₒ = 0)", 800, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 800, 390);
        text("x - xₒ = Vₒt + (1/2)at²", 800, 430);
        text("x = (" + int_velocity + ")(" + time + ") + (1/2)(" + acceleration + ")(" + time + ")²", 800, 470);
        text("x = " + (int_velocity * time) + " + " + (0.5 * acceleration * (time) ** 2), 800, 510);
        text("x = " + distance, 800, 550)
      
      }else if(isNaN(fin_velocity)){
        int_velocity = (distance - (0.5 * acceleration * (time ** 2))) / time
        text("Initial Velocity:", 300, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 300, 390);
        text("Vₒ = (x - xₒ - (1/2)at²) / t", 300, 430);
        text("Vₒ = (" + distance + " - 0 - (1/2)(" + acceleration + ")(" + time + ")²) / 2", 300, 470);
        text("Vₒ = (" + distance + " - " + (0.5 * acceleration * time**2) + ") / 2", 300, 510);
        text("Vₒ = " + (int_velocity * 2) + " / 2", 300, 550);
        text("Vₒ = " + int_velocity, 300, 590);
        
        fin_velocity = int_velocity + (acceleration * time)
        text("Final Velocity:", 1000, 350);
        text("V = Vₒ + at", 1000, 390);
        text("V = " + int_velocity + " + (" + acceleration + ")(" + time + ")", 1000, 430);
        text("V = " + int_velocity + " + " + (acceleration * time), 1000, 470);
        text("V = " + fin_velocity, 1000, 510)
        
      }else if(isNaN(time)){
        int_velocity = ((fin_velocity ** 2) - (2 * acceleration * distance)) ** 0.5
        text("Initial Velocity:", 300, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
        text("Vₒ = (V² - 2a (x - xₒ)) ^ (1/2)", 300, 430);
        text("Vₒ = (" + fin_velocity + ")² - 2(" + acceleration + ")(" + distance + ")) ^ (1/2)", 300, 470);
        text("Vₒ = (" + (fin_velocity ** 2) + " - " + (2 * acceleration * distance) + ") ^ (1/2)", 300, 510);
        text("Vₒ = (" + (int_velocity ** 2) + ") ^ (1/2)", 300, 550);  
        text("Vₒ = " + int_velocity, 300, 590);
        
        time = (fin_velocity - int_velocity) / acceleration
        text("Time:", 900, 350);
        text("V = Vₒ + at", 900, 390);
        text("t = (V - Vₒ) / a", 900, 430);
        text("t = (" + fin_velocity + " - " + int_velocity + ") / " + acceleration, 900, 470);
        text("t = " + (fin_velocity - int_velocity) + " / " + acceleration, 900, 510);
        text("t = " + time, 900, 550)
      }
      
    }else if(isNaN(acceleration)){
      if(isNaN(distance)){
        acceleration = (fin_velocity - int_velocity) / time
        text("Acceleration:", 300, 350);
        text("V = Vₒ + at", 300, 390);
        text("a = (V - Vₒ) / t", 300, 430);
        text("a = (" + fin_velocity + " - " + int_velocity + ") / " + time, 300, 470);
        text("a = " + (fin_velocity - int_velocity) + " / " + time, 300, 510);
        text("a = " + acceleration, 300, 550)
        
        distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
        text("Distance:", 800, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 800, 390);
        text("x - xₒ = Vₒt + (1/2)at²", 800, 430);
        text("x = (" + int_velocity + ")(" + time + ") + (1/2)(" + acceleration + ")(" + time + ")²", 800, 470);
        text("x = " + (int_velocity * time) + " + " + (0.5 * acceleration * (time) ** 2), 800, 510);
        text("x = " + distance, 800, 550)
        
      }else if(isNaN(time)){
        acceleration = ((fin_velocity ** 2) - (int_velocity ** 2)) / (2 * distance)
        text("Acceleration:", 300, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
        text("a = (V² - Vₒ²) / 2(x - xₒ)", 300, 430);
        text("a = (" + fin_velocity + "² - " + int_velocity + "²) / 2(" + distance + ")", 300, 470);
        text("a = " + (fin_velocity ** 2) + " - " + (int_velocity ** 2) + " / " + (2 * distance), 300, 510);
        text("a = " + (acceleration * 2 * distance) + " / " + (2 * distance), 300, 550);
        text("a = " + acceleration, 300, 590)
        
        time = (fin_velocity - int_velocity) / acceleration
        text("Time:", 900, 350);
        text("V = Vₒ + at", 900, 390);
        text("t = (V - Vₒ) / a", 900, 430);
        text("t = (" + fin_velocity + " - " + int_velocity + ") / " + acceleration, 900, 470);
        text("t = " + (fin_velocity - int_velocity) + " / " + acceleration, 900, 510);
        text("t = " + time, 900, 550)
        
      }else if(isNaN(fin_velocity)){
        acceleration = (distance - (int_velocity * time)) / (0.5 * (time ** 2))
        text("Acceleration:", 300, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 300, 390);
        text("a = (x - xₒ - Vₒt) / (1/2)t²", 300, 430);
        text("a = (" + distance + " - (" + int_velocity + ")(" + time + ")) / ((1/2)(" + time + ")²)", 300, 470);
        text("a = (" + distance + " - " + (int_velocity * time) + ") / ((1/2)(" + (time ** 2) + "))", 300, 510);
        text("a = " + (distance - (int_velocity * time)) + " / " + (0.5 * (time ** 2)), 300, 550);
        text("a = " + acceleration, 300, 590)
        
        fin_velocity = int_velocity + (acceleration * time)
        text("Final Velocity:", 800, 350);
        text("V = Vₒ + at", 800, 390);
        text("V = " + int_velocity + " + (" + acceleration + ")(" + time + ")", 800, 430);
        text("V = " + int_velocity + " + " + (acceleration * time), 800, 470);
        text("V = " + fin_velocity, 800, 510)
      }
      
    }else if(isNaN(distance)){
      if(isNaN(fin_velocity)){
        distance = (int_velocity * time) + (0.5 * acceleration * (time ** 2))
        text("Distance:", 300, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 300, 390);
        text("x - xₒ = Vₒt + (1/2)at²", 300, 430);
        text("x = (" + int_velocity + ")(" + time + ") + (1/2)(" + acceleration + ")(" + time + ")²", 300, 470);
        text("x = " + (int_velocity * time) + " + " + (0.5 * acceleration * (time) ** 2), 300, 510);
        text("x = " + distance, 300, 550)
        
        fin_velocity = int_velocity + (acceleration * time)
        text("Final Velocity:", 800, 350);
        text("V = Vₒ + at", 800, 390);
        text("V = " + int_velocity + " + (" + acceleration + ")(" + time + ")", 800, 430);
        text("V = " + int_velocity + " + " + (acceleration * time), 800, 470);
        text("V = " + fin_velocity, 800, 510)
        
      }else if(isNaN(time)){
        distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
        text("Distance:", 300, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
        text("x - xₒ = V² - Vₒ² / 2a", 300, 430);
        text("x  = (" + fin_velocity + "² - " + int_velocity + "²) / 2(" + acceleration + ")", 300, 470);
        text("x = (" + (fin_velocity ** 2) + " - " + (int_velocity ** 2) + " / " + (2 * acceleration), 300, 510);
        text("x = (" + (acceleration * 2 * distance) + " / " + (2 * acceleration), 300, 550);
        text("x = " + distance, 300, 590);
        
        time = (fin_velocity - int_velocity) / acceleration
        text("Time:", 800, 350);
        text("V = Vₒ + at", 800, 390);
        text("t = (V - Vₒ) / a", 800, 430);
        text("t = (" + fin_velocity + " - " + int_velocity + ") / " + acceleration, 800, 470);
        text("t = " + (fin_velocity - int_velocity) + " / " + acceleration, 800, 510);
        text("t = " + time, 800, 550)
      }
    }else if(isNaN(fin_velocity)){
      if(isNaN(distance)){
        fin_velocity = int_velocity + (acceleration * time)
        text("Final Velocity:", 300, 350);
        text("V = Vₒ + at", 300, 390);
        text("V = " + int_velocity + " + (" + acceleration + ")(" + time + ")", 300, 430);
        text("V = " + int_velocity + " + " + (acceleration * time), 300, 470);
        text("V = " + fin_velocity, 300, 510)
        
        distance = (int_velocity * time) + (0.5 * acceleration * (time ** 2))
        text("Distance:", 800, 350);
        text("x = xₒ + Vₒt + (1/2)at²", 800, 390);
        text("x - xₒ = Vₒt + (1/2)at²", 800, 430);
        text("x = (" + int_velocity + ")(" + time + ") + (1/2)(" + acceleration + ")(" + time + ")²", 800, 470);
        text("x = " + (int_velocity * time) + " + " + (0.5 * acceleration * (time) ** 2), 800, 510);
        text("x = " + distance, 800, 550)
        
      }else if(isNaN(time)){
        fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** 0.5
        text("Final Velocity:", 300, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 300, 390);
        text("V = (Vₒ² + 2a (x - xₒ)) ^ (1/2)", 300, 430);
        text("V = (" + int_velocity + ")² + 2(" + acceleration + ")(" + distance + ")) ^ (1/2)", 300, 470);
        text("V = (" + (int_velocity ** 2) + " + " + (2 * acceleration * distance) + ") ^ (1/2)", 300, 510);
        text("V = (" + (fin_velocity ** 2) + ") ^ (1/2)", 300, 550);  
        text("V = " + fin_velocity, 300, 590);
        
        time = (fin_velocity - int_velocity) / acceleration
        text("Time:", 800, 350);
        text("V = Vₒ + at", 800, 390);
        text("t = (V - Vₒ) / a", 800, 430);
        text("t = (" + fin_velocity + " - " + int_velocity + ") / " + acceleration, 800, 470);
        text("t = " + (fin_velocity - int_velocity) + " / " + acceleration, 800, 510);
        text("t = " + time, 800, 550)
      }
      
    }else if(isNaN(time)){
      if(isNaN(distance)){
        time = (fin_velocity - int_velocity) / acceleration
        text("Time:", 300, 350);
        text("V = Vₒ + at", 300, 390);
        text("t = (V - Vₒ) / a", 300, 430);
        text("t = (" + fin_velocity + " - " + int_velocity + ") / " + acceleration, 300, 470);
        text("t = " + (fin_velocity - int_velocity) + " / " + acceleration, 300, 510);
        text("t = " + time, 300, 550)
        
        distance = ((fin_velocity ** 2) - (int_velocity ** 2)) / (acceleration * 2)
        text("Distance:", 800, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 800, 390);
        text("x - xₒ = V² - Vₒ² / 2a", 800, 430);
        text("x  = (" + fin_velocity + "² - " + int_velocity + "²) / 2(" + acceleration + ")", 800, 470);
        text("x = (" + (fin_velocity ** 2) + " - " + (int_velocity ** 2) + " / " + (2 * acceleration), 800, 510);
        text("x = (" + (acceleration * 2 * distance) + " / " + (2 * acceleration), 800, 550);
        text("x = " + distance, 800, 590);
        
      }else if(isNaN(fin_velocity)){
        time = ((-1 * int_velocity) + ((int_velocity ** 2) - (4 * 0.5 * acceleration * distance))) / acceleration
        text("Time:", 300, 350);
        text("Quadratic Formula", 300, 390);
        text("a = 0.5" + acceleration + "; b = " + int_velocity + "; c = -" + distance, 300, 430);
        text("t = " + time, 300, 470)
        
        fin_velocity = ((int_velocity ** 2) + (2 * acceleration * distance)) ** 0.5
        text("Final Velocity:", 1000, 350);
        text("V² = Vₒ² + 2a (x - xₒ)", 1000, 390);
        text("V = (Vₒ² + 2a (x - xₒ)) ^ (1/2)", 1000, 430);
        text("V = (" + int_velocity + ")² + 2(" + acceleration + ")(" + distance + ")) ^ (1/2)", 1000, 470);
        text("V = (" + (int_velocity ** 2) + " + " + (2 * acceleration * distance) + ") ^ (1/2)", 1000, 510);
        text("V = (" + (fin_velocity ** 2) + ") ^ (1/2)", 1000, 550);  
        text("V = " + fin_velocity, 1000, 590);
      }
    }
  }
}

function formula(){
  if(screen == 0){
    solution();
  }
}

function solution(){
    screen = 1;
}