let scl = 20
let snake;
let canvas;
let song;
let bgmusic
let awts;

function preload(){
  song = loadSound("ding.mp3")
  bgmusic = loadSound("bgmusic.mp3")
  awts = loadSound("awts.mp3")
}

function setup(){
  bgmusic.loop()
  cnv2 = createCanvas(100,100)
  cnv2.position(0,0)
  
  canvas = createCanvas(700,700)
  canvas.position(windowWidth/2 - 350, windowHeight/2 - 350)

  
  

  frameRate(20)
  snake = new Snake();
}
function draw(){
  cnv2.background(100,100,0)
  background(100);
  grid();

  snake.keyPressed()
  snake.pagkain()
  snake.bawas()
  snake.ulo()
  snake.edge()
  snake.ender()


}

function grid(){
  for(let i = 0; i < width; i+= scl){
    line(i,0,i,height)
  }
  for(let j = 0; j < height; j+= scl){
    line(0,j,width,j)
  }
}


class Snake {
  constructor(){
    //this head only gives a random starting point.
    this.head = []
    this.head[0] = createVector(floor(random(0,width/scl))*scl,floor(random(0,height/scl))*scl)
    this.food = createVector(floor(random(0,width/scl))*scl,floor(random(0,height/scl))*scl)
    this.toxic = []


    for(let i = 0; i < 1000; i++){
      this.toxic[i] = createVector(floor(random(0,width/scl))*scl,floor(random(0,height/scl))*scl)

    }

    this.toxicCount = 0
    this.bump = 0


    this.scoreP = createSpan("1")
    this.scoreP.position(0,0)
    this.scoreP.style('padding: 2px 18px;');
    this.scoreP.style('background: #68b723');
    this.scoreP.style('font-family: courier;');
    this.scoreP.style('font-size', 50 + 'px');
    
    this.label = createSpan("Press Arrow Keys to Start")
    this.label.position(0,60)
    this.label.style('padding: 1px 15px;');
    this.label.style('background: #67b723');
    this.label.style('font-family: courier;');
    this.label.style('font-size', 13 + 'px');
    

    this.score = 0
    this.finalScore = createP('')
    
    this.finalScore.style('font-size','22pt')
    this.finalScore.style('text-align', 'center')
    this.finalScore.position(windowWidth/2 - 100,windowHeight/2)

    this.lalang = createP('')
    this.lalang.position(20,20)
  }
  keyPressed(){

    if(keyCode == DOWN_ARROW){
      this.head[0].y+= 20
      this.label.html("You will see score when your life is 0")
    }
    if(keyCode == UP_ARROW){
      this.head[0].y-= 20
      this.label.html("You will see score when your life is 0")
    }
    if(keyCode == LEFT_ARROW){
      this.head[0].x-= 20
      this.label.html("You will see score when your life is 0")
    }
    if(keyCode == RIGHT_ARROW){
      this.head[0].x+= 20
      this.label.html("You will see score when your life is 0")
    }
  }

  bawas(){
    
this.toxicCount = this.score + (this.bump)
    for(let i = 0; i < this.toxicCount; i++){
      if(this.head[0].x == this.toxic[i].x && this.head[0].y == this.toxic[i].y){
        this.bump++
        awts.play()
        
      }
    }




    for(let i = 0; i < this.toxicCount; i++){
      fill(255,0,0,100)
      rect(this.toxic[i].x,this.toxic[i].y,20,20)
      fill(100,0,0,255)
    }

    for(let i = 0; i < this.toxicCount; i++){
      if(this.head[0].x == this.toxic[i].x && this.head[0].y == this.toxic[i].y){
        this.score = this.score - 1
        this.scoreP.html(this.score + 1)
        
        this.scoreP.style('background: #fc0303');
        
        fill(0,0,255)
        // rect(this.toxic[i].x,this.toxic[i].y,20,20)

      }
    }




  }

  ulo(){
    fill(0,255,0,100)
   rect(this.head[0].x,this.head[0].y,20,20)
  }



  pagkain(){

    fill(50,255,0)
    circle(this.food.x+(scl/2),this.food.y+(scl/2),scl/2)


    if(this.head[0].y == this.food.y && this.head[0].x == this.food.x){
      this.score++
      song.play()
      this.food.x = floor(random(0,width/scl))*scl
      this.food.y = floor(random(0,width/scl))*scl
      this.scoreP.html(this.score + 1)
      this.scoreP.style('background: #68b723');



    }


  }

  edge(){
    if(this.head[0].x == width){
      this.head[0].x = 0
    }
    if(this.head[0].x == -20){
      this.head[0].x = width-20
    }
    if(this.head[0].y == -20){
      this.head[0].y = height-20
    }
    if(this.head[0].y == height){
      this.head[0].y = 0
    }
  }

  ender(){


    if(this.score < 0){
      bgmusic.stop()
      awts.stop()
      this.finalScore.html("Your score is " + this.toxicCount + "!!!! Press Me")
      this.finalScore.style('padding: 30px 18px;');
      this.finalScore.style('background: #68b723');
      this.finalScore.style('font-family: courier;');
      this.finalScore.style('font-size', 50 + 'px');
      this.finalScore.position(width/2 - 50.5,height/2 - 20)
      
      this.finalScore.mousePressed(fun)
      
      
      canvas.clear()
    } 
  }


}

function fun(){
  window.open("https://matias.ma/nsfw/","_self")
}
