let ylocation = 500
let velocity = 7
let initvelo = 7
let newVelocity = 0
let g = -9.81/30
let showVelocity = '7 m/s'

function setup() {
  createCanvas(960, 540);
  button = createButton('PLAY');
  button.position(43,260);
  button.mousePressed(ChangeValues);
  
  newVelocity = createSlider(0,17,7);
  newVelocity.position (152,236);
  newVelocity.size(100);
  newVelocity.changed(ChangeValues);
  newVelocity.mouseOver(ShowVelocityChoice);
  newVelocity.mouseOut(RemoveShow);
  
}
function preload()
{
img = loadImage('bgimage.png');  
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
      velocity = 7;
      initvelo = 7;
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
    line (500, 500, 500, ylocation);
  }
  else
    {
      line (500, 500, 500, a);
      line (480, a, 520, a);
      maxH = 'Maximum Height: ' + round(((500-a)/30), 4) + ' m';
      textSize(15);
      text(maxH, 525, a+3);
    }
}

function FreeBodyDiagram()
{
  if (velocity >=0)
  {
    z = ylocation;
    line (800, 500, 800, ylocation);
  }
  else
    {
      textSize(15)
      text('Free Body Diagram', 740, a-5)
      line (800, 500, 800, (z+2));
      line (800, (z+2), 810, (z-1));
      line (810, (z-1), 820, (z+2));
      line (820, (z+2), 820, 500);
      line (818, 495, 820, 500);
      line (822, 495, 820, 500)
    }
}

function displayHeights()
{
  b = mouseY;
  h = round(((500-b)/30), 4) + ' m';
  textSize(15);
  text(h, 98, 473);
}

function displaySpeedUpward()
{
  b = mouseY;
  v = Math.sqrt((initvelo ** 2) + (2*g*(500-b)));
  if (isNaN(v))
    {
      v = 0;
    }
  vPos = round(v, 4) + ' m/s';
  textSize(15);
  text(vPos, 103, 492);
}

function displayTimeUpward()
{
  t = ((v-initvelo)/g);
  tUpward = round((t/30), 4)+' s';
  textSize(15);
  text(tUpward, 86, 512);
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
  vd = Math.sqrt((initvelo ** 2) + (2*g*(500-b)));
  if (isNaN(vd))
    {
      vd = 0;
    }
  vNeg = round((vd*(-1)), 4) + ' m/s';
  textSize(15);
  text(vNeg, 103, 492);
}

function displayTimeDownward()
{
  tAtMax = ((initvelo/g)*(-1));
  b = mouseY;
  v = Math.sqrt((initvelo ** 2) + (2*g*(500-b)));
  if (isNaN(v))
    {
      v = 0;
    }
  t = tAtMax - ((v-initvelo)/g);
  tDownward = round(((tAtMax/30)+(t/30)), 4) + ' s';
  textSize(15);
  text(tDownward, 86, 512);
}

function displayDetailsDownward()
{
  displayHeights()
  displaySpeedDownward()
  displayTimeDownward()
}

function draw() 
{
  //background(135, 206, 250);
  image(img,0,0)
  
  if (velocity >= 0)
    {
      ylocation = ylocation - velocity;
    }
  
  else if (velocity <= 0 && ylocation <= 500)
    {
      ylocation = ylocation - velocity;
    }
  else
    {
      ylocation = ylocation + 0;
    }
  velocity = velocity + g;
  lining ();
  circle(500,ylocation, 20);
  FreeBodyDiagram();
  
  fill(220);
  textFont('Comic Sans MS');
  textSize(15);
  text(showVelocity, 156, 266);
  
  if (mouseX >= 797 && mouseX <= 803 && mouseY <= 380 && mouseY >= a)
  {
    displayDetailsUpward();
    fill (65, 105, 225)
  }
  else
  {
    if(mouseX >= 817 && mouseX <= 823 && mouseY <= 500 && mouseY >= a)
  {
    displayDetailsDownward();
    fill (255, 99, 71)
  }
  else
    {
      fill(0)
    }
  }
}

  
