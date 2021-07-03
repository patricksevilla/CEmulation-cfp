let ylocation = 500
let velocity = 7
let initvelo = 7
let newVelocity = 0
let g = -9.81/30
let showVelocity = '7 m/s'
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
  button.position(width*0.044,height*0.48);
  button.mousePressed(ChangeValues);
  
  newVelocity = createSlider(0,17,7);
  newVelocity.position (width*0.158,height*0.437);
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
    line (width*0.56, 500, width*0.56, ylocation);
  }
  else
    {
      line (width*0.56, 500, width*0.56, a);
      line (width*0.56 - 20, a, width*0.56 + 20, a);
      maxH = 'Maximum Height: ' + round(((500-a)/30),2) + ' m';
      textSize(15);
      text(maxH, width * 0.56 +10, a+15);
    }
}

function FreeBodyDiagram()
{
  if (velocity >=0)
  {
    z = ylocation;
    line (width * 0.80, 500, width * 0.80, ylocation);
  }
  else
    {
      textSize(15)
      text('Free Body Diagram', width * 0.75, a-5)
      line (width * 0.80, 500, width * 0.80, (z+2));
      line (width * 0.80, (z+2), width * 0.81, (z-1));
      line (width * 0.81, (z-1), width * 0.82, (z+2));
      line (width * 0.82, (z+2), width * 0.82, 500);
      line (width * 0.82 -2, 495, width * 0.82, 500);
      line (width * 0.82 +2, 495, width * 0.82, 500)
    }
}

function displayHeights()
{
  b = mouseY;
  h = round(((500-b)/30), 4) + ' m';
  textSize(15);
  text(h, width*0.1021, height*0.8759 -9);
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
  text(vPos, width*0.1073 + 2, height*0.8759 + 11);
}

function displayTimeUpward()
{
  t = ((v-initvelo)/g);
  tUpward = round((t/30), 4)+' s';
  textSize(15);
  text(tUpward, width*0.1021 -13, height*0.8759 +30);
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
  text(vNeg, width*0.1073 + 2, height*0.8759 + 11);
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
  text(tDownward, width*0.1021 -13, height*0.8759 +30);
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
  circle(width*0.56,ylocation, 20);
  FreeBodyDiagram();
  
  fill(220);
  textFont('Comic Sans MS');
  textSize(15);
  text(showVelocity, width*0.158+3, height*0.4925);
  
  if (mouseX >= (width*0.80 - 3) && mouseX <= (width*0.80 + 3) && mouseY <= 500 && mouseY >= a)
  {
    displayDetailsUpward();
    fill (65, 105, 225)
  }
  else
  {
    if(mouseX >= (width*0.82 - 3) && mouseX <= (width*0.82 + 3) && mouseY <= 500 && mouseY >= a)
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
