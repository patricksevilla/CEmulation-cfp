let bg;
let ratio = 3084/1920
let gilidRAtio = 320/1920
let xcoorBox;
let ycoorBox;
let boxwidth;
let boxheight;
let space;
let xcoorBoxConst

function preload(){
  bg = loadImage('Kinematics.jpg')
}

function setup(){
  createCanvas(windowWidth,windowWidth * ratio)
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
    xcoorBox += boxwidth + space
  } 
  
  xcoorBox = xcoorBoxConst
  ycoorBox += space + boxheight
  for(let i = 0; i < 3; i++){
    rect(xcoorBox,ycoorBox,boxwidth,boxheight)
    xcoorBox += boxwidth + space
  } 
  
  xcoorBox = xcoorBoxConst
  ycoorBox += space + boxheight
  for(let i = 0; i < 3; i++){
    rect(xcoorBox,ycoorBox,boxwidth,boxheight)
    xcoorBox += boxwidth + space
  } 
  
  


  
//   rect(xcoorBox,ycoorBox,boxwidth,boxheight)

//   xcoorBox += boxwidth + space
//   rect(xcoorBox,ycoorBox,boxwidth,boxheight)
  
//   ycoorBox += boxheight + space
    
//   rect(xcoorBox,ycoorBox,boxwidth,boxheight)
}

