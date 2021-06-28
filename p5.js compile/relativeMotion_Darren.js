let carA_x = 273;
let carA_y = 440;
let carA_yvelo = 0;
let carB_x = 489;
let carB_y = 40;
let carB_yvelo = 0;
let rectpos = 0;
let angle = 180;

function preload() {
  bg = loadImage("bg1.png");
  carA = loadImage("carpng.png");
  carB = loadImage("carpng2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  angleMode(DEGREES);
  showrelativemotion();
  inputCarA_yvelo = createInput("Input Velocity of A");
  inputCarB_yvelo = createInput("Input Velocity of B");
  submitCarA_yvelo = createButton("MOVE");
  submitCarA_yvelo.mousePressed(submitTheInput);
  relativemotion = createButton("Push to see Relative Motion");
  relativemotion.position(0, 460);
  relativemotion.mousePressed(showrelativemotion);
}

function draw() {
  image(bg, width / 2, height / 2.05, width, height);
  if (carA_y >= windowHeight || carA_y <= 0) {
    carA_yvelo = carA_yvelo * -1;
    angle = angle + 180;
  }
  if (carB_y >= windowHeight || carB_y <= 0) {
    carB_yvelo = carB_yvelo * -1;
  }
  carB_y = carB_y + carB_yvelo;
  carA_y = carA_y + carA_yvelo;
  textSize(20);
  fill(0, 0, 0);
  text("VELOCITY OF A: " + str(-carA_yvelo * 40), 24, 13, 130);
  text("VELOCITY", 600, 470);
  text(" OF B: " + str(-carB_yvelo * 40), 600, 490);
  push();
  translate(carA_x, carA_y);
  rotate(angle + 180);
  image(carA, 0, 0, 32, 52);
  pop();
  push();
  translate(carB_x, carB_y);
  rotate(angle);
  image(carB, 0, 0, 32, 52);
  pop();
}

function submitTheInput() {
  carA_yvelo = parseInt(inputCarA_yvelo.value()) / 40;
  carB_yvelo = -parseInt(inputCarB_yvelo.value()) / 40;
}

function showrelativemotion() {
  carB_yvelo = carA_yvelo - carB_yvelo;
  carA_yvelo *= 0;
}
