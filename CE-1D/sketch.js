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

let logoSide;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); 
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
  
  logoSide = vidWidth/2.5
  
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


  textSize(45)
  textFont(tabFont);
  
  fill(cchome)
  text('HOME', 0 + width/10 , 27.5);
  
  fill(ccsubject)
  text('SUBJECT',width/5 + width/10, 27.5);
  
  fill(ccquiz)
  text('QUIZ', 2*width/5 + width/10, 27.5);
  
  fill(cclotplan)
  text('LOT PLAN',3*width/5 + width/10, 27.5);
  
  fill(ccabout)
  text('ABOUT US', 4*width/5 + width/10, 27.5);
  
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
  if(mouseX < 2*width/5 && mouseX > width/5 && mouseY > 0 && mouseY < 50){
    print("subject ere")
    window.open('https://editor.p5js.org/ioewyzh/present/zJljCsiqM',"_self")
  } 
  
  if(mouseX < 3*width/5 && mouseX > 2*width/5 && mouseY > 0 && mouseY < 50){
    print("quiz ere")
    window.open('https://patricksevilla.github.io/CFP-Project/',"_self")
    
  }

  if(mouseX < 4*width/5 && mouseX > 3*width/5 && mouseY > 0 && mouseY < 50){
    print("lot plan ere")
    // window.open("https://www.w3schools.com")
  }

  if(mouseX < 5*width/5 && mouseX > 4*width/5 && mouseY > 0 && mouseY < 50){
    print("about us ere")
    // window.open("https://www.w3schools.com")
  }
}

// https://editor.p5js.org/drewraemonn/sketches/45IwFq8eK
