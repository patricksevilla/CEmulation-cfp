let bg;
let ratio = 3084/1920
let gilidRAtio = 320/1920
let xcoorBox;
let ycoorBox;
let boxwidth;
let boxheight;
let space;
let xcoorBoxConst
let subjectList = ["Vectors", "Average Speed, Velocity & Acceleratio", "Instantaneous Velocity", "Acceleration", "Motion in 1 Dimension (Horizontal)", "Free Fall", "Projectile Motion", "Uniform Circular Motion", "Non-Uniform Circular Motion", "Relative Motion"]

function preload(){
  bg = loadImage('Kinematics.jpg')
}

function setup(){
  createCanvas(windowWidth,windowWidth * ratio)
  textAlign(CENTER);
}

function draw(){
  background(0)
  image(bg,0,0,width,height)
  xcoorBox = width*0.125838
  xcoorBoxConst = xcoorBox
  ycoorBox = height*0.481012658
  boxwidth = width*0.237373737
  boxheight = height*0.085443037
  space = width*0.0202020
  
  
  for(let i = 0; i < 3; i++){
    rect(xcoorBox,ycoorBox,boxwidth,boxheight)
    text(subjectList[i], xcoorBox + (boxwidth/2), ycoorBox + (boxheight/2) )
    xcoorBox += boxwidth + space
  } 
  
  xcoorBox = xcoorBoxConst
  ycoorBox += space + boxheight
  for(let i = 3; i < 6; i++){
    rect(xcoorBox,ycoorBox,boxwidth,boxheight)
    text(subjectList[i], xcoorBox + (boxwidth/2), ycoorBox + (boxheight/2) )
    xcoorBox += boxwidth + space
  
  } 
  
  xcoorBox = xcoorBoxConst
  ycoorBox += space + boxheight
  for(let i = 6; i < 9; i++){
    rect(xcoorBox,ycoorBox,boxwidth,boxheight)
    text(subjectList[i], xcoorBox + (boxwidth/2), ycoorBox + (boxheight/2) )
    xcoorBox += boxwidth + space
  } 
  
}

function mousePressed(){
  
}

