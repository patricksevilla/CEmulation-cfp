function setup() {
  createCanvas(windowWidth, windowHeight - 226, WEBGL);
  strokeWeight(4);

  dom = height * 0.04;
  angle = 0;
  cylinderRadius = 1;
  ballsRadius = 4;
  offset = 0;
  makeDoms();
}

function draw() {
  background(0);

  // Lighting
  ambientLight(166);
  directionalLight(255, 255, 255, 1, 1, -1);

  // Transformation
  orbitControl();
  rotateY(angle);
  if (rotating.checked()) {
    angle += rotateSpeed.value();
  }

  // Auto randomize
  if (autoRandomize.checked() && frameCount % 300 == 0) {
    randomizeVectors();
  }

  // Vectors
  makeVectors();
  noiseVectors();
  updateLabel();

  // Drawing
  drawSlimAxises();
  //drawAxises();
  drawCompass();
  drawVolume();
  drawVector(a, '#f37329');
  drawVector(b, '#4fa084');
  drawVector(c, '#a56de2');
}

function makeDoms() {
  // Bar
  // bar = createDiv('>briano');
  // bar.style('font-family: courier;');
  // bar.style('background: #9a905d;');

  // I
  iLabel = createSpan('(i) x-axis');
  iLabel.style('padding: 2px 18px;');
  iLabel.style('background: #c6262e');
  iLabel.style('font-family: courier;');
  iLabel.position(0,0)

  // J
  jLabel = createSpan('(j) y-axis');
  jLabel.style('padding: 2px 18px;');
  jLabel.style('background: #68b723');
  jLabel.style('font-family: courier;');
  jLabel.position(130,0)

  // K
  kLabel = createSpan('(k) z-axis');
  kLabel.style('padding: 2px 18px;');
  kLabel.style('background: #3689e6');
  kLabel.style('font-family: courier;');
  kLabel.position(260,0)
  createP();

  // A (Orange)
  aForm = createSpan();
  aForm.style('padding: 2px 4px;');
  aForm.style('background: #f37329');
  aForm.style('font-family: courier;');
  createDiv();
  ax = createSlider(-dom, dom, 0);
  ay = createSlider(-dom, dom, 0);
  az = createSlider(-dom, dom, 0);
  resetA = createButton('reset');
  resetA.mousePressed(resetSliderA);
  createP();

  // B (cyan)
  bForm = createSpan();
  bForm.style('padding: 2px 4px;');
  bForm.style('background: #4fa084');
  bForm.style('font-family: courier;');
  createDiv();
  bx = createSlider(-dom, dom, 0);
  by = createSlider(-dom, dom, 0);
  bz = createSlider(-dom, dom, 0);
  resetB = createButton('reset');
  resetB.mousePressed(resetSliderB);
  createP();

  // C (Purple)
  cForm = createSpan();
  cForm.style('padding: 2px 4px;');
  cForm.style('background: #a56de2');
  cForm.style('font-family: courier;');
  createDiv();
  cx = createSlider(-dom, dom, 0);
  cy = createSlider(-dom, dom, 0);
  cz = createSlider(-dom, dom, 0);
  resetC = createButton('reset');
  resetC.mousePressed(resetSliderC);
  createP();

  // Sum
  sum = createSpan();
  sum.style('font-family: courier;');
  createP();

  // Volume
  volume = createSpan();
  volume.style('font-family: courier;');
  showVolume = createCheckbox('Shade Volume', false);
  showVolume.style('font-family: courier;');
  createP();

  // Auto rotate
  rotateSpeed = createSlider(1 / 500, 1 / 50, 1 / 100, 1 / 1000);
  rotating = createCheckbox('Auto rotate', false);
  rotating.style('font-family: courier;');
  createP();

  // Randomize
  randomize = createButton('Randomize');
  randomize.style('font-family: courier;');
  randomize.mousePressed(randomizeVectors);
  autoRandomize = createCheckbox('Auto randomize', false);
  autoRandomize.style('font-family: courier;');
  createP();
  
  // Noise
  noiser = createCheckbox('noise', false);
  noiser.style('font-family: courier;');
  createP();
}

function doubleClicked() {
  rotating.checked(!rotating.checked());
}

function makeVectors() {
  a = createVector(int(ax.value()), int(ay.value()), int(az.value()));
  b = createVector(int(bx.value()), int(by.value()), int(bz.value()));
  c = createVector(int(cx.value()), int(cy.value()), int(cz.value()));
}

function noiseVectors() {
  if (noiser.checked()) {
    a = createVector(noise((frameCount + 111) / 100)*2*dom-dom, noise((frameCount + 222) / 100)*2*dom-dom, noise((frameCount + 333) / 100)*2*dom-dom);
    b = createVector(noise((frameCount + 444) / 100)*2*dom-dom, noise((frameCount + 555) / 100)*2*dom-dom, noise((frameCount + 666) / 100)*2*dom-dom);
    c = createVector(noise((frameCount + 777) / 100)*2*dom-dom, noise((frameCount + 888) / 100)*2*dom-dom, noise((frameCount + 999) / 100)*2*dom-dom);
  }
}

function randomizeVectors() {
  ax.value(random(-dom, dom));
  ay.value(random(-dom, dom));
  az.value(random(-dom, dom));
  bx.value(random(-dom, dom));
  by.value(random(-dom, dom));
  bz.value(random(-dom, dom));
  cx.value(random(-dom, dom));
  cy.value(random(-dom, dom));
  cz.value(random(-dom, dom));
}

function resetSliderA() {
  ax.value(0);
  ay.value(0);
  az.value(0);
}

function resetSliderB() {
  bx.value(0);
  by.value(0);
  bz.value(0);
}

function resetSliderC() {
  cx.value(0);
  cy.value(0);
  cz.value(0);
}

function updateLabel() {
  mag = sqrt(sq(a.x) + sq(a.y) + sq(a.z)).toFixed(2);
  aForm.html(a.x + 'i + ' + a.y + 'j + ' + a.z + 'k' + ', magnitude: ' + mag);
  mag = sqrt(sq(b.x) + sq(b.y) + sq(b.z)).toFixed(2);
  bForm.html(b.x + 'i + ' + b.y + 'j + ' + b.z + 'k' + ', magnitude: ' + mag);
  mag = sqrt(sq(c.x) + sq(c.y) + sq(c.z)).toFixed(2);
  cForm.html(c.x + 'i + ' + c.y + 'j + ' + c.z + 'k' + ', magnitude: ' + mag);

  calcSum(a, b, c);
  calcVolume(a, b, c);
}

function calcSum(a, b, c) {
  sumI = a.x + b.x + c.x;
  sumJ = a.y + b.y + c.y;
  sumK = a.z + b.z + c.z;
  sumMag = sqrt(sq(sumI) + sq(sumJ) + sq(sumK)).toFixed(2);
  sum.html('Sum: ' + sumI + 'i + ' + sumJ + 'j + ' + sumK + 'k' + ', magnitude: ' + sumMag);
}

function calcVolume(a, b, c) {
  uno = a.x * (b.y * c.z - c.y * b.z);
  dos = b.x * (a.y * c.z - c.y * a.z);
  tre = c.x * (a.y * b.z - b.y * a.z);
  vol = abs(uno - dos + tre);
  volume.html('Volume: ' + vol);
}

function drawAxises() {
  push();
  noStroke();

  // X-axis
  push();
  rotateZ(HALF_PI);
  ambientMaterial(220, 220, 220);
  cylinder(cylinderRadius, dom * 24);
  translate(0, -dom*12, 0);
  cone(cylinderRadius*3, -cylinderRadius*9);
  translate(0, dom*24, 0);
  cone(cylinderRadius*3, cylinderRadius*9);
  pop();

  // Y-axis (green)
  push();
  ambientMaterial(220, 220, 220);
  cylinder(cylinderRadius, dom * 24);
  translate(0, -dom*12, 0);
  cone(cylinderRadius*3, -cylinderRadius*9);
  translate(0, dom*24, 0);
  cone(cylinderRadius*3, cylinderRadius*9);
  pop();

  // Z-axis (blue)
  push();
  rotateX(HALF_PI);
  ambientMaterial(220, 220, 220);
  cylinder(cylinderRadius, dom * 24);
  translate(0, -dom*12, 0);
  cone(cylinderRadius*3, -cylinderRadius*9);
  translate(0, dom*24, 0);
  cone(cylinderRadius*3, cylinderRadius*9);
  pop();

  pop();
}

function drawSlimAxises() {
  push();
  stroke('#c6262e');
  beginShape();
  vertex(dom*12, 0, 0);
  vertex(-dom*12, 0, 0);
  endShape();
  stroke('#68b723');
  beginShape();
  vertex(0, dom*12, 0);
  vertex(0, -dom*12, 0);
  endShape();
  stroke('#3689e6');
  beginShape();
  vertex(0, 0, dom*12);
  vertex(0, 0, -dom*12);
  endShape();
  pop();
}

function drawCompass() {
  push();
  noStroke();
  translate(-200, -200, 0);

  // X-axis (red)
  push();
  rotateZ(HALF_PI);
  translate(0, -dom, 0);
  ambientMaterial('#c6262e');
  cylinder(cylinderRadius, dom*2);
  translate(0, -dom, 0);
  cone(cylinderRadius*2, -cylinderRadius*6);
  pop();

  // Y-axis (green)
  push();
  translate(0, -dom, 0);
  ambientMaterial('#68b723');
  cylinder(cylinderRadius, dom*2);
  translate(0, -dom, 0);
  cone(cylinderRadius*2, -cylinderRadius*6);
  pop();

  // Z-axis (blue)
  push();
  rotateX(HALF_PI);
  translate(0, +dom, 0);
  ambientMaterial('#3689e6');
  cylinder(cylinderRadius, dom*2);
  translate(0, dom, 0);
  cone(cylinderRadius*2, cylinderRadius*6);
  pop();

  pop();
}

function drawVector(v, c) {
  push();
  // Stroke
  stroke(c);
  beginShape(a);
  vertex(0, 0, 0);
  vertex(v.x*6, -v.y*6, v.z*6);
  endShape();

  // Sphere
  noStroke();
  translate(v.x*6, -v.y*6, v.z*6);
  ambientMaterial(c);
  sphere(ballsRadius);
  pop();
}

function drawVolume() {
  push();
  // Shading
  stroke(220);
  strokeWeight(2);
  ambientMaterial(220, 220, 220, 16);
  if (showVolume.checked()) {
    beginShape();
    vertex(0, 0, 0);
    vertex(a.x*6, -a.y*6, a.z*6);
    vertex(b.x*6, -b.y*6, b.z*6);
    vertex(c.x*6, -c.y*6, c.z*6);
    vertex(a.x*6, -a.y*6, a.z*6);
    endShape();
    beginShape();
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    vertex(a.x*6, -a.y*6, a.z*6);
    vertex(b.x*6, -b.y*6, b.z*6);
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    endShape();
    beginShape();
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    vertex(b.x*6, -b.y*6, b.z*6);
    vertex(c.x*6, -c.y*6, c.z*6);
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    endShape()
    beginShape();
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    vertex(c.x*6, -c.y*6, c.z*6);
    vertex(a.x*6, -a.y*6, a.z*6);
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    endShape();
  } else {
    beginShape();
    vertex(0, 0, 0);
    vertex(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
    endShape();
  }
  // Rainbow ball
  translate(a.x*6 + b.x*6 + c.x*6, -a.y*6 - b.y*6 - c.y*6, a.z*6 + b.z*6 + c.z*6);
  normalMaterial();
  sphere(ballsRadius*1.1);
  pop();
}
