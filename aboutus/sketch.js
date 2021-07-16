let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let j;
let k;
let l;
let m;
let n;
let wi;
let hi;

let bg;
let ab;



function setup() {
  
  wi = windowWidth;
  hi = windowWidth/1.77;
  
  createCanvas(wi, hi*14);
  

  a = loadImage('1.jpg');
  b = loadImage('2.jpg');
  c = loadImage('3.jpg');
  d = loadImage('4.jpg');
  e = loadImage('5.jpg');
  f = loadImage('6.jpg');
  g = loadImage('7.jpg');
  h = loadImage('8.jpg');
  i = loadImage('9.jpg');
  j = loadImage('10.jpg');
  k = loadImage('11.jpg');
  l = loadImage('12.jpg');
  m = loadImage('13.jpg');
  n = loadImage('14.jpg'); 

  
  
}

function draw() {
  background(220);
  
  image(a, 0, 0, wi, hi);
  image(b, 0, hi, wi, hi);
  image(c, 0, hi*2, wi, hi);
  
  image(d, 0, hi*3, wi, hi);
  image(e, 0, hi*4, wi, hi);
  image(f, 0, hi*5, wi, hi);
  image(g, 0, hi*6, wi, hi);
  image(h, 0, hi*7, wi, hi);
  image(i, 0, hi*8, wi, hi);
  image(j, 0, hi*9, wi, hi);
  image(k, 0, hi*10, wi, hi);
  image(l, 0, hi*11, wi, hi);
  image(m, 0, hi*12, wi, hi);
  image(n, 0, hi*13, wi, hi);

  
}