//dito po kapag sa p5 editor naggawa
let carA_x = 100
let carA_y = 380
let carA_yvelo = 0
let carB_x = 300
let carB_y = 20
let carB_yvelo = 0
let rectpos = 0
function setup() {
  createCanvas(400, 400);
  showrelativemotion();
  inputCarA_yvelo = createInput("yvel of left ball")
  inputCarB_yvelo = createInput("yvel of right ball")  
  submitCarA_yvelo = createButton("submit")
  submitCarA_yvelo.mousePressed(submitTheInput)
  relativemotion = createButton("Push to see Relative Motion")
  relativemotion.position(0,430)
  relativemotion.mousePressed(showrelativemotion) 
}

function draw() {
  background(220);
  fill(0,0,0);
  if(carA_y >= height || carA_y <= 0){
    carA_yvelo = carA_yvelo *-1}
  if(carB_y >= height || carB_y <= 0){
    carB_yvelo = carB_yvelo *-1}
  carA_y = carA_y + carA_yvelo
  circle(carA_x, carA_y, 25) 
  carB_y = carB_y + carB_yvelo
  circle(carB_x, carB_y, 25)
  textSize(20)
  fill(255,100,0)
  text("VELOCITY OF A: " + inputCarA_yvelo.value() ,0,20)
  text("VELOCITY OF B: " + inputCarB_yvelo.value() ,150,400)
}

function submitTheInput(){
  carA_yvelo = parseInt(inputCarA_yvelo.value())/70
  carB_yvelo = -parseInt(inputCarB_yvelo.value())/70
}

function showrelativemotion(){
  carB_yvelo = carA_yvelo - carB_yvelo
  carA_yvelo *= 0
}
//di ko na kaya antok
