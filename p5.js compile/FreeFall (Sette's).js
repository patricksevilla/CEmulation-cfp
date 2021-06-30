let ylocation = 380
let velocity = 5
let initvelo = 5
let newVelocity = 0
let g = -9.81/30
let showVelocity = '5 m/s'
var vid;
let vidRatio = 1920/1080
let vidx, vidy, vidWidth, vidHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   if(vidRatio > (width/height))
   {
    vidx = 0;
    vidWidth = width;
    vidHeight = width/vidRatio;
    vidy = height/2 - vidHeight/2; 
    } 
  else 
  {
    vidHeight = height;
    vidWidth = vidHeight * vidRatio;
    vidx = width/2 - vidWidth/2;
    vidy = 0;
  }
  
  vid = createVideo(['FreeFall BG1.mp4']);
  vid.hide();
  vid.loop();
  
  button = createButton('PLAY');
  button.position(vidx+30 ,238);
  button.mousePressed(ChangeValues);
  
  newVelocity = createSlider(0,15,5);
  newVelocity.position (vidx+145,213);
  newVelocity.size(100);
  newVelocity.changed(ChangeValues);
  newVelocity.mouseOver(ShowVelocityChoice);
  newVelocity.mouseOut(RemoveShow);
  
}


function ShowVelocityChoice()
{
  showVelocity = newVelocity.value() + ' m/s';
}

function RemoveShow()
{
  showVelocity = ''
}


function ChangeValues()
{ 
  if (isNaN(newVelocity.value()))
    {
      velocity = 5;
      initvelo = 5;
    }
  else
    {
      velocity = newVelocity.value();
      initvelo = newVelocity.value();
    }
}

function lining()
{ 
  
  if (velocity >=0)
  {
    a = ylocation;
    line (width*0.56, 380, width*0.56, ylocation);
  }
  else
    {
      line (width*0.56, 380, width*0.56, a);
      line (width*0.56 - 20, a, width*0.56 + 20, a);
      maxH = 'Maximum Height: ' + round(((380-a)/30),2) + ' m';
      textSize(15);
      text(maxH, width * 0.56 + 25, a+3);
    }
}

function FreeBodyDiagram()
{
  if (velocity >=0)
  {
    z = ylocation;
    line (width * 0.78, 380, width * 0.78, ylocation);
  }
  else
    {
      textSize(15)
      text('Free Body Diagram', width * 0.72, a-5)
      line (width * 0.78, 380, width * 0.78, (z+2));
      line (width * 0.78, (z+2), width * 0.79, (z-1));
      line (width * 0.79, (z-1), width * 0.8, (z+2));
      line (width * 0.8, (z+2), width * 0.8, 380);
      line (width * 0.798, 375, width * 0.8, 380);
      line (width * 0.802, 375, width * 0.8, 380)
    }
}

function displayHeights()
{
  b = mouseY;
  h = 'Height: ' + ((380-b)/30) + ' m';
  textSize(15);
  text(h, 500, 150);
}

function displaySpeedUpward()
{
  b = mouseY;
  v = Math.sqrt((initvelo ** 2) + (2*g*(380-b)));
  if (isNaN(v))
    {
      v = 0;
    }
  vPos = 'Velocity: ' + v + ' m/s';
  textSize(15);
  text(vPos, 500, 170);
}

function displayTimeUpward()
{
  t = ((v-initvelo)/g);
  tUpward = 'Time: ' + (t/30)+' s';
  textSize(15);
  text(tUpward, 500, 190);
}

function displayDetailsUpward()
{
  displayHeights();
  displaySpeedUpward();
  displayTimeUpward();
}

function displaySpeedDownward()
{
  b = mouseY;
  vd = Math.sqrt((initvelo ** 2) + (2*g*(380-b)));
  if (isNaN(vd))
    {
      vd = 0;
    }
  vNeg = 'Velocity: ' + (vd*(-1)) + ' m/s';
  textSize(15);
  text(vNeg, 500, 170);
}

function displayTimeDownward()
{
  tAtMax = ((initvelo/g)*(-1));
  b = mouseY;
  v = Math.sqrt((initvelo ** 2) + (2*g*(380-b)));
  if (isNaN(v))
    {
      v = 0;
    }
  t = tAtMax - ((v-initvelo)/g);
  tDownward = 'Time: ' + ((tAtMax/30)+(t/30)) + ' s';
  textSize(15);
  text(tDownward, 500, 190);
}

function displayDetailsDownward()
{
  displayHeights()
  displaySpeedDownward()
  displayTimeDownward()
}

function draw() 
{
  image(vid, vidx, vidy, vidWidth, vidHeight);
  textSize(15);
  text(showVelocity, vidx+148, 245);
  
  if (velocity >= 0)
    {
      ylocation = ylocation - velocity;
    }
  
  else if (velocity <= 0 && ylocation <= 380)
    {
      ylocation = ylocation - velocity;
    }
  else
    {
      ylocation = ylocation + 0;
    }
  velocity = velocity + g;
  lining ();
  circle(width*0.56,ylocation, 20);
  FreeBodyDiagram();
  
  if (mouseX >= 777 && mouseX <= 783 && mouseY <= 380 && mouseY >= a)
  {
    displayDetailsUpward();
    fill (65, 105, 225)
  }
  else
  {
    if(mouseX >= 797 && mouseX <= 803 && mouseY <= 380 && mouseY >= a)
  {
    displayDetailsDownward();
    fill (255, 99, 71)
  }
  else
    {
      fill(128, 128, 0)
    }
  }
}

  
