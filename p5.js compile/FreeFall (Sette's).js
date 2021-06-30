let ylocation = 380
let velocity = 5
let initvelo = 5
let newVelocity = 0
let g = -9.81/30
let showVelocity = '5 m/s'
var vid;
let vidRatio = 2008/1075
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
    line (400, 380, 400, ylocation);
  }
  else
    {
      line (400, 380, 400, a);
      line (380, a, 420, a);
      maxH = 'Maximum Height: ' + ((380-a)/30) + ' m';
      textSize(15);
      text(maxH, 425, a+3);
    }
}

function FreeBodyDiagram()
{
  if (velocity >=0)
  {
    z = ylocation;
    line (780, 380, 780, ylocation);
  }
  else
    {
      textSize(15)
      text('Free Body Diagram', 720, a-5)
      line (780, 380, 780, (z+2));
      line (780, (z+2), 790, (z-1));
      line (790, (z-1), 800, (z+2));
      line (800, (z+2), 800, 380);
      line (798, 375, 800, 380);
      line (802, 375, 800, 380)
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
  circle(400,ylocation, 20);
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

  
