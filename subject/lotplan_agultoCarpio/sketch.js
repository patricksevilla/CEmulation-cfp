let bg;
let xcomp = [];
let ycomp = [];
let bearings = [];
let reset;

let counter = 0;
let sumx = [];
let sumy = [];
let inp = [];
let data = [];
let tb;
let currentData;
let vert;
let hori;
let theta;
let magnitude;
let latitude;
let departure;
let slider;
let state = "not yet"
let sum = 0
//plotting
let plot;

function preload(){
  bg = loadImage('bg.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image (bg,windowWidth,windowHeight);
  slider = createSlider(0, 4000, 500);
  slider.position(10,10);
  tb = createInput("Your Bearing Here:")
  tb.position(15,500);
  submit = createButton('add')
  submit.position(15,520);
  submit.mousePressed(submission);
  plot = createButton('plot')
  plot.position(50,520);
  plot.mousePressed(plotting);
  reset = createButton('reset')
  reset.position(85,520);
  reset.mousePressed(resetsketch)
  
}
function resetsketch(){
  window.location.reload();
}


function submission(){
  currentData = tb.value();
  bearings.push(currentData)
  data.push(currentData.split(" "));
  tb.value('');
  counter = counter + 1;
  let i = int(counter) - 1;
  if (i < counter){
    vert = data[i][0];
    hori = data[i][3];
    theta = radians(float(data[i][1]) + float((data[i][2])/60));
    magnitude = float(data[i][4]);
    latitude = float(magnitude) * (cos((theta)));
    departure = float(magnitude) * (sin((theta)));
            
    if (isNaN(magnitude) || isNaN(theta)) { 
      alert("Wrong input, please try again. Sample Input: N 19 25 W 12.46");
      return;}
    
    if (vert.toUpperCase() == "S"){
      latitude *= -1}
    if (hori.toUpperCase() == "W") {
      departure *= -1}
    xcomp.push(departure);
    ycomp.push(latitude);
  }}
  
 
function draw() {
  background(bg);
  if(state == "deploy"){
    translate(width / 2, height / 2);
    scale(slider.value() * 0.01,slider.value()*0.01);
    beginShape();
    stroke(0,0,0)
    strokeWeight(0.5)
    fill(255);
    for (let i = 0; i < xcomp.length; i++) {
      if (i == 0) {
        vertex(xcomp[i], -ycomp[i]);
        sumx.push(xcomp[0]);
        sumy.push(ycomp[0]);
      } else if (i <= xcomp.length) {
        a = xcomp[i] + sumx[i - 1];
        b = ycomp[i] + sumy[i - 1];
        sumx.push(a);
        sumy.push(b);
        vertex(a, -b);
      }
    }
    endShape(CLOSE);
  
  for(let i = 0; i < xcomp.length; i++){
    ellipse(sumx[i], -sumy[i], 0.5, 0.5);}
    
  for(let i = 0; i <= xcomp.length; i++){
    textSize(2);
    let num = (i + 1);
    if (i == xcomp.length) {
      text("1", sumx[i-1] - 1 , -sumy[i-1] - 2 )}
    else {
      text(num, sumx[i-1] - 1 , -sumy[i-1] - 2 );}}
      }  
}

function plotting(){
  if(state == "not yet"){
    state = "deploy"
  } else if(state == "deploy"){
    state = "not yet"
  }
}