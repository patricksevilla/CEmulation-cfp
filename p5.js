//dito po kapag sa p5 editor naggawa
let carA_x = 100;
let carA_y = 370;
let carA_yvelo = 0;
let carB_x = 300;
let carB_y = 30;
let carB_yvelo = 0;
let rectpos = 0;
let carA;

function preload() {
  carA = loadImage("carpng.png");
  carB = loadImage("carpng2.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER)
  angleMode(DEGREES);
  showrelativemotion();
  inputCarA_yvelo = createInput("Input Velocity of A");
  inputCarB_yvelo = createInput("Input Velocity of B");
  submitCarA_yvelo = createButton("MOVE");
  submitCarA_yvelo.mousePressed(submitTheInput);
  relativemotion = createButton("Push to see Relative Motion");
  relativemotion.position(0, 430);
  relativemotion.mousePressed(showrelativemotion);
}

function draw() {
  background(220);
  fill(10, 10, 20);
  if (carA_y >= height || carA_y <= 0) {
    carA_yvelo = carA_yvelo * -1;
  }
  if (carB_y >= height || carB_y <= 0) {
    carB_yvelo = carB_yvelo * -1;
  }
  carB_y = carB_y + carB_yvelo;
  carA_y = carA_y + carA_yvelo;
  textSize(20);
  fill(200,190,10);  
  text("VELOCITY OF A: " + str(-carA_yvelo * 40), 0, 20,100);
  text("VELOCITY OF B: " + str(-carB_yvelo * 40), 150, 390);
  image(carA, carA_x, carA_y, 32, 52);
  image(carB, carB_x, carB_y, 32, 52);
}

function submitTheInput() {
  carA_yvelo = parseInt(inputCarA_yvelo.value()) / 40;
  carB_yvelo = -parseInt(inputCarB_yvelo.value()) / 40;
}

function showrelativemotion(){
  carB_yvelo = carA_yvelo - carB_yvelo;
  carA_yvelo *= 0
}//di ko na kaya antok2


--------Projectile Motion-----------
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

-----------i-uupdate pa po itu--------------
