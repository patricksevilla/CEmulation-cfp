let xloc = 0;
let yloc = 300;
let xspeed = 10;
let yspeed = -13;
let acceleration = 9.81/30;
let pathx = []
let pathy = []


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(5)
  background(220);
  displayProjectile();
  moveProjectile();
  displayPath();
  displayData()
}

function displayData(){
  text("xloc: " + str(xloc),xloc + 5,yloc)
  text("yloc: " + str(yloc),xloc + 5, yloc + 10)
  text("yspeed: " + str(yspeed), xloc + 5, yloc + 20)
}

function displayPath(){
  pathx.push(xloc)
  pathy.push(yloc)
  
  for(let i = 0; i < pathx.length; i++){
    point(pathx[i],pathy[i])
  }
}

function displayProjectile() {
  ellipse(xloc, yloc, 20, 20);
}

function moveProjectile() {
  xloc = xloc + xspeed;
  yloc = yloc + yspeed;
  yspeed = yspeed +acceleration
}
