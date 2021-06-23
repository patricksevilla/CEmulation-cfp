#python file po dito kapag naggawa kayo sa https://berinhard.github.io/pyp5js/pyodide/

#dito po kapag sa p5 editor naggawa
carA_x = 100
carA_y = 380
carA_yvelo = 0
carB_x = 300
carB_y = 20
carB_yvelo = 0
rectpos = 0

inputCarA_yvelo = 0
inputCarB_yvelo = 0
submitCarA_yvelo = 0
relativemotion = 0

def setup():
  createCanvas(400, 400)
  
  global inputCarA_yvelo
  global inputCarB_yvelo
  global submitCarA_yvelo 
  global relativemotion
  
  showrelativemotion()
  inputCarA_yvelo = createInput("yvel of left ball")
  inputCarB_yvelo = createInput("yvel of right ball")  
  submitCarA_yvelo = createButton("submit")
  submitCarA_yvelo.mousePressed(submitTheInput)
  relativemotion = createButton("Push to see Relative Motion")
  relativemotion.position(0,430)
  relativemotion.mousePressed(showrelativemotion) 


def draw():
  background(220);
  
  global carA_y
  global carA_yvelo
  global carB_y
  global carB_yvelo
  global inputCarA_yvelo
  global inputCarB_yvelo
  
  fill(0,0,0);
  if(carA_y >= height or carA_y <= 0):
    carA_yvelo = carA_yvelo *-1
  if(carB_y >= height or carB_y <= 0):
    carB_yvelo = carB_yvelo *-1
    
  carA_y = carA_y + carA_yvelo
  circle(carA_x, carA_y, 25) 
  carB_y = carB_y + carB_yvelo
  circle(carB_x, carB_y, 25)
  textSize(20)
  fill(255,100,0)
  text("VELOCITY OF A: " + inputCarA_yvelo.value() ,0,20)
  text("VELOCITY OF B: " + inputCarB_yvelo.value() ,150,400)


def submitTheInput():
  global carA_yvelo
  global carB_yvelo
  global inputCarA_yvelo
  global inputCarB_yvelo
  carA_yvelo = parseInt(inputCarA_yvelo.value())/70
  carB_yvelo = -parseInt(inputCarB_yvelo.value())/70


def showrelativemotion():
  global carB_yvelo
  global carA_yvelo
  
  carB_yvelo = carA_yvelo - carB_yvelo
  carA_yvelo *= 0

#di ko na kaya antok
