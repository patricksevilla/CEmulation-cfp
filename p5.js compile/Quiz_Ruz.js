let questions = [["A laser beam is aimed 15.95° above the horizontal at a mirror 11,648 m away. It glances off the mirror and","choices","tamangsagot"], ["pangalawang tanong","choices","tamangsagot"]]

let randomQ = []
let numberOfQuestions
let score = 0
let askHowMany;

function setup(){
  createCanvas(500,500)
  textAlign(CENTER)
  
  for(let i = 0; i < questions.length; i++){
    randomQ.push(questions[floor(random(2))])
  }
}

function draw(){
  
  background(50)
  for(let i = 0; i < randomQ.length; i++){
    text(randomQ[0][0],width/2,height/2)
    text(randomQ[0][1],width/2,height/2 + 50)
    
    
    background(50)
  }
  
  
}
