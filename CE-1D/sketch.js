let tabFont;
function preload() {
  tabFont = loadFont('FormulaCondensed-Bold.otf');
}

let concept = "home"
let cchome = (255)
let ccsubject =  (48, 40, 38)
let ccquiz =(48, 40, 38)
let cclotplan = (48, 40, 38)
let ccabout = (48, 40, 38)

function setup() {
  createCanvas(2008, 1075);
  img = loadImage('1.jpg');
}


function draw() {
  background(img, 0, 0);
  
  textSize(45)
  textFont(tabFont);
  
  fill(cchome)
  text('HOME', 250, 55);
  
  fill(ccsubject)
  text('SUBJECT', 585, 55);
  
  fill(ccquiz)
  text('QUIZ', 970, 55)
  
  fill(cclotplan)
  text('LOT PLAN', 1320, 55)
  
  fill(ccabout)
  text('ABOUT US', 1720, 55)
  
  if(mouseX < 2*width/5 && mouseX > width/5 && mouseY > 0 && mouseY < 50){
    ccsubject = 240
  } else {
    ccsubject = (48, 40, 38)
  } 
  
  if(mouseX < 3*width/5 && mouseX > 2*width/5 && mouseY > 0 && mouseY < 50){
    ccquiz = 240
  } else {
    ccquiz = (48, 40, 38)
  }

  if(mouseX < 4*width/5 && mouseX > 3*width/5 && mouseY > 0 && mouseY < 50){
    cclotplan = 240
  } else {
    cclotplan = (48, 40, 38)
  }

  if(mouseX < 5*width/5 && mouseX > 4*width/5 && mouseY > 0 && mouseY < 50){
    ccabout = 240
  } else {
    ccabout = (48, 40, 38)
  }
}

  

function mousePressed(){
  if(mouseX < width/5 && mouseX > 0 && mouseY > 0 && mouseY < 50){
    concept = "home"
    cchome = 255
  }
}

function mousePressed(){
  if(mouseX < 5*width/5 && mouseX > 4*width/5 && mouseY > 0 && mouseY < 50){
    concept = "about"
    cchome = 255
  }
}
