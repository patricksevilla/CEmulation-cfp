# code dito mga tol
import random

def get_question():
    questions = []
    questions.append(['Question A', 'A'])#sample pa lang to di ko alam kung pano gagawin yung huhugot sa library ehh any suggestions?
    questions.append(['Question B', 'A'])
    questions.append(['Question C', 'A'])
    questions.append(['Question D', 'A'])
    questions.append(['Question E', 'A'])
    questions.append(['Question F', 'A'])
    questions.append(['Question G', 'A'])
    questions.append(['Question H', 'A'])
    questions.append(['Question I', 'A'])
    questions.append(['Question J', 'A'])
    return questions

def new_game():
    question_list = get_question()
    random.shuffle(question_list)
    question_number = 1
    score = 0
    for B in question_list:
        print(f'{B[0]} {question_number}')
        Answer = (input('Enter Your Answer (A,B,C,D,): ')).upper()
        if Answer == B[1]:
            score = score + 1
            print('Correct!')
        else:
            print(f'Your answer is incorrect the answer is {B[1]}')
        question_number = question_number + 1
    print(f'Your Score is {score}/10!')

def play_again():
    response = (input("Do you want to play again? (yes or no): ")).upper()

    if response == "YES":
        return True
    else:
        return False
    
    #---------------------------------------------------------------------LOTPLAN
    import math

user_input = int(input("Input the number of bearings: "))
x_comp = []
y_comp = []


def user(bearing):

    try:

        y = bearing[0]
        z = bearing [2]
        theta = bearing[1]
        if z.upper() == "E" or z.upper() == "W":
            x = bearing [2]
            mag = int(bearing [3])
        elif (int(z)) > 0:
            x = bearing [3]
            mag = float(bearing [4])
            theta = (float(theta)) + (int(z)/60)

        theta = math.radians(float(theta))
        lat = (float(mag))* (math.cos(float(theta)))
        dep = (float(mag)) * (math.sin(float(theta)))
        if y.upper() == "S":
            lat *= -1
        if x.upper() == "W":
            dep *= -1

        x_comp.append(dep)
        y_comp.append(lat)

    except IndexError:
        print ("\nOoops! You entered the wrong format.")
        print ("Please refer to the sample input below:")
        print ("Input could be: S 27 29 E 11.81 Meters or N 45 E 15 meters")

for i in range(int(user_input)):
    bearing = input(f"Input Bearing No.0{i+1}: ")
    bearing = bearing.split(" ")
    user(bearing)

if ((int(user_input)) % 2) == 0:
    dist = []
    for i in range(len(x_comp)):
        layo = math.sqrt(((((int(x_comp[i]))-(int(x_comp[i-1])))**2)) + (((int(y_comp[i]))-(int(y_comp[i-1])))**2))
        dist.append(layo)

    print (dist)
    
#ndi pa i2 tapos
