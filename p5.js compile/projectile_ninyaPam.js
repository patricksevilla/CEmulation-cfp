// --------Projectile Motion-----------
let xloc = 0;
let yloc = 300;
let xspeed = 10;
let yspeed = -13;
let acceleration = 9.81/30;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  displayProjectile();
  moveProjectile();
}

function displayProjectile() {
  ellipse(xloc, yloc, 20, 20);
}

function moveProjectile() {
  xloc = xloc + xspeed;
  yloc = yloc + yspeed;
  yspeed = yspeed +acceleration
}

// -----------i-uupdate pa po itu--------------
