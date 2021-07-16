let xloc = 55;
let yloc = 290;
let x = 0
let y;
let xspeed = 10;
let yspeed = -13;
let acceleration = 9.81 / 30;
let pathx = [];
let pathy = [];
let state = "not moving";
let angle

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  
  img1 = loadImage('1bg.jpg')
  img2 = loadImage('CANNONBALL.png')
  img3 = loadImage('CANNON.png')
  
  slider = createSlider(0,200,0)
  slider.position(0,0)
  
  input1 = createInput()
  input1.position(3, 20)
  submit = createButton("submit")
  submit.position(363,20)
  submit.mousePressed(go)
  
  input2 = createInput()
  input2.position(183, 20)

}

function draw() {
  // frameRate(5);
  background(220);
  image(img1, 0, 0, windowWidth, windowHeight);
  
  
  if(state == "not moving"){
    xspeed = 0
    yspeed = 0
    xloc = 80
    yloc = height * 0.72121212 - slider.value() - 52
    
  }
  
  if(yloc > 400){
    state = "not moving"
    
    
  }
  

  
  displayProjectile();
  moveProjectile();
  displayPath();
  displayData();
}


function displayData() {
  text("xloc: " + str(xloc), xloc + 5, yloc);
  text("yloc: " + str(yloc), xloc + 5, yloc + 10);
  text("yspeed: " + str(yspeed), xloc + 5, yloc + 20);
}

function displayPath() {
  pathx.push(xloc);
  pathy.push(yloc);

  for (let i = 0; i < pathx.length; i++) {
    point(pathx[i], pathy[i]);
  }
}

function displayProjectile() {
  image(img2, xloc - 10, yloc - 10, 20, 20);
  
  y = height * 0.72121212 - 80 - slider.value()
  image(img3, x, y, 80, 80)
}

function moveProjectile() {
  yspeed += acceleration
  xloc = xloc + xspeed;
  yloc = yloc + yspeed;
}

function go(){
  if(state == "not moving"){
    state = "moving"
    submit.html("reset")
    xspeed = parseInt(input1.value())
    yspeed = parseInt(input2.value()) * -1
    
  }else if(state == "moving"){
    state = "not moving"
    submit.html("submit")
  }
}