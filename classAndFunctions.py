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
