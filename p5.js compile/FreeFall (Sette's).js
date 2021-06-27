let ylocation = 380
let velocity = 15
let initvelo = 15
let g = -9.81/30

function setup() {
  createCanvas(700, 400);
}

function lining()
{ 
  
  if (velocity >=0)
  {
    a = ylocation;
    line (100, 380, 100, ylocation);
  }
  else
    {
      line (100, 380, 100, a);
      line (80, a, 120, a);
      maxH = 'Maximum Height: ' + ((380-a)/30) + ' m';
      textSize(15);
      text(maxH, 125, a+3);
    }
}

function FreeBodyDiagram()
{
  if (velocity >=0)
  {
    z = ylocation;
    line (480, 380, 480, ylocation);
  }
  else
    {
      textSize(15)
      text('Free Body Diagram', 420, a-5)
      line (480, 380, 480, (z+2));
      line (480, (z+2), 490, (z-1));
      line (490, (z-1), 500, (z+2));
      line (500, (z+2), 500, 380);
      line (498, 375, 500, 380);
      line (502, 375, 500, 380)
    }
}

function displayHeights()
{
  b = mouseY;
  h = 'Height: ' + ((380-b)/30) + ' m';
  textSize(15);
  text(h, 200, 150);
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
  text(vPos, 200, 170);
}

function displayTimeUpward()
{
  t = ((v-initvelo)/g);
  tUpward = 'Time: ' + (t/30)+' s';
  textSize(15);
  text(tUpward, 200, 190);
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
  text(vNeg, 200, 170);
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
  text(tDownward, 200, 190);
}

function displayDetailsDownward()
{
  displayHeights()
  displaySpeedDownward()
  displayTimeDownward()
}


function draw() {
  background(220)
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
  circle(100,ylocation, 20);
  FreeBodyDiagram();
  
  if (mouseX >= 477 && mouseX <= 483 && mouseY <= 380 && mouseY >= a)
  {
    displayDetailsUpward();
    fill (220, 0, 0)
  }
  else
  {
    if(mouseX >= 497 && mouseX <= 503 && mouseY <= 380 && mouseY >= a)
  {
    displayDetailsDownward();
    fill (0, 0, 220)
  }
  else
    {
      fill(50, 205, 50)
    }
  }
  
}
  
