let tabFont;
function preload() {
  tabFont = loadFont('FormulaCondensed-Bold.otf');
}

let concept = "home"
let cchome = (255)
let ccsubject =  (48, 40, 38)
let ccquiz = (48, 40, 38)
let cclotplan = (48, 40, 38)
let ccabout = (48, 40, 38)

var vid;
let vidRatio = 2008/1075
let vidx, vidy, vidWidth, vidHeight

let logoSide = 250

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //determines the properties of the videos
  if(vidRatio > (width/height)){
    vidx = 0
    vidWidth = width
    vidHeight = width/vidRatio
    vidy = height/2 - vidHeight/2 
  } else {
    vidHeight = height
    vidWidth = vidHeight * vidRatio
    vidx = width/2 - vidWidth/2
    vidy = 0
  }
  
  
  
  logo = loadImage('logo.png');
  tab = loadImage('tab.png');
  
  vid = createVideo(['bg.mp4']);
  vid.hide();
  vid.loop();
  
}

function draw() {
  
  image(vid, vidx, vidy, vidWidth, vidHeight);

  image(tab, 0, 0);
  
  image(logo,width/2 - logoSide/2 ,height/2 - logoSide/2,logoSide,logoSide)

  // image(logo, 1075 / 2, height / 5 , logo.height / 3, logo.width / 3 );
  // print(logo.height)

  textSize(45)
  textFont(tabFont);
  
  fill(cchome)
  text('HOME', 250, 55);
  
  fill(ccsubject)
  text('SUBJECT', 590, 55);
  
  fill(ccquiz)
  text('QUIZ', 1000, 55);
  
  fill(cclotplan)
  text('LOT PLAN',1360, 55);
  
  fill(ccabout)
  text('ABOUT US', 1720, 55);
  
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
