let xloc = 55;
let yloc = 290;
let x = 0
let y = 260
let xspeed = 10;
let yspeed = -13;
let acceleration = 9.81 / 30;
let pathx = [];
let pathy = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage('bbg.jpg')
  img2 = loadImage('CANNONBALL.png')
  img3 = loadImage('CANNON.png')
}

function draw() {
  frameRate(5);
  background(220);
  image(img1, 0, 0, windowWidth, windowHeight);
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
  image(img2, xloc, yloc, 20, 20);
  image(img3, x, y, 80, 80)
}

function moveProjectile() {
  xloc = xloc + xspeed;
  yloc = yloc + yspeed;
  yspeed = yspeed + acceleration;
}
