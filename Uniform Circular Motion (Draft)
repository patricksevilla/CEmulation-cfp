function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let c = color(231, 235, 224);
  fill(c);
  push();
  noStroke();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 100, 100);
  pop();
 
  // rep. line for acceleration
  push();
  strokeWeight(5);
  stroke(125, 180, 108);
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 100, 2);
  pop();
  
  push();
  strokeWeight(0);
  translate(width * 0.5, height * 0.5);
  polygon(0, 0, 50, 100);
  pop(); 
  }

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  
  endShape(CLOSE);
}
