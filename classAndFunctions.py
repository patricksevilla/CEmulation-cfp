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
#---------------------------------Relative motion start
import math

class Relative_Motion:
    def one_d_VofX(self,VofXRtoY,VofX):
        answer_y = VofXRtoY + VofX
        return answer_y

    def one_d_VofX_Y(self,VofX,VofY):
        answer_x_y = VofX - VofY
        return answer_x_y

    def resultant(self,xy,yw):
        Result = ((xy**2) + (yw**2))**0.5
        return Result

    def resultantangle(self,yw,xy):
        yyy = math.radians(yw)
        xxx = math.radians(xy)
        theta = 90 - float(math.atan(xxx/yyy)/(math.pi/180))
        return theta

    def summ_on_X(self,vofx_y,txy,vofy_w,tyw):
        summ_x = float((vofx_y*math.cos(math.radians(txy))) + (vofy_w*math.cos(math.radians(tyw))))
        return summ_x

    def summ_on_y(self,vofx_y,txy,vofy_w,tyw):
        summ_y = float((vofx_y*math.sin(math.radians(txy))) + (vofy_w*math.sin(math.radians(tyw))))
        return summ_y

print("Choose from One-Dimensional or Two-Dimensional Relative Motion")
choice = input("Type 'YES' if One-Dimensional or 'TRUE' for Two-Dimensional: ")
z = Relative_Motion()

while True:
    if choice.upper() == 'YES':
        print("\nWhat is the unknown? (a/b)")
        spec = input("\ta = Velocity of X | b = Velocity of X Relative to Y: ")
        if spec.lower() == 'a':
           x_y = int(input("Input Velocity of X Relative to Y: "))
           y = int(input("Input Velocity of Y: "))
           ans_1 = z.one_d_VofX(x_y,y)
           print(f"Velocity of X is: {ans_1}")
        elif spec.lower() == 'b':
            v_x = int(input("Input Velocity of X: "))
            v_y = int(input("Input Velocity of Y: "))
            ans_2 = z.one_d_VofX_Y(v_x,v_y)
            print(f"Velocity of X Relative to Y is: {ans_2}")
        else:
            continue
        break

    elif choice.upper() == 'TRUE':
        vx_y = int(input("Input Velocity of X Relative to Y: "))
        thetaxy = int(input("Theta along Positive X-Axis: "))
        vy_w = int(input("Input Velocity of Y Relative to W: "))
        thetayw = int(input("Theta along Positive X-Axis: "))
        xsumm = z.summ_on_X(vx_y,thetaxy,vy_w,thetayw)
        ysumm = z.summ_on_y(vx_y,thetaxy,vy_w,thetayw)
        r_force = z.resultant(xsumm,ysumm)
        r_theta = z.resultantangle(ysumm,xsumm)
        print(f"The Velocity of X Relative to W is: {r_force} unit/time")
        print(f"Direction of Velocity is: {r_theta}° along positive x-axis.")
        break
    else:
        break
print("\nThank You for using the Program!")
#-----------------------------------------relative motion end

#-----------------------------------------vextors start
class Trigonometry:
    def __init__(self):

        self.factor = 0
        self.angle = 0
        self.pi = 3.1415926535
        self.x = 0
        self.sin, self.cos, self.tan, self.sec, self.csc, self.cot = 0, 0, 0, 0, 0, 0
        self.exclusion_1, self.exclusion_2 = (90, 270, 450, 630, 810), (0, 180, 360, 540, 720)
        self.first_quad, self.fourth_quad, self.rev_1, self.rev_2 = list(range(0, 90 + 1)), list(
            range(270, 360 + 1)), list(range(540, 630 + 1)), list(range(720, 810 + 1))
        self.positive_angle_cos = self.first_quad + self.fourth_quad + self.rev_1 + self.rev_2
        self.force = 0
        self.x_component = 0
        self.y_component = 0
        self.resultant = 0
        self.x_components = []
        self.y_components = []
        self.component_x = 0
        self.component_y = 0
        self.direction = 0
        self.ar_tan = 0
        self.direction_2 = 0
        
    def factorial(self, x):

        self.factor = 1
        self.x = x
        for i in range(x):
            self.factor *= i + 1
        return self.factor

    def Trigonometric_Functions(self, angle):

        theta = angle % 360
        self.angle = theta * self.pi / 180

        # SINE
        self.sin = 0
        for i in range(10):
            y = (2 * i + 1)
            self.sin += (-1) ** i * self.angle ** y / self.factorial(y)
        # COSINE
        self.cos = 0
        if angle in self.positive_angle_cos:
            self.cos = (1 - (self.sin ** 2)) ** 0.5
        else:
            self.cos = -(1 - (self.sin ** 2)) ** 0.5

        # TANGENT
        self.tan = 0
        if angle not in self.exclusion_1:
            self.tan = self.sin / self.cos
        else:
            self.tan = 'Undefined'
        return self.sin, self.cos, self.tan

    def components(self, force):
        
        # X-Component
        self.x_component = 0
        self.force = force
        self.x_component = (self.force * self.cos)
        
        # Y-Component
        self.y_component = 0
        self.y_component = (self.force * self.sin)
        self.x_components.append(self.x_component)
        self.y_components.append(self.y_component)
        return self.x_components, self.y_components

    def resultants(self):
        
        # Resultant
        self.component_x = sum(self.x_components)
        self.component_y = sum(self.y_components)
        self.resultant = (self.component_x ** 2 + self.component_y ** 2) ** 0.5

        # Angle
        self.direction = self.component_y / self.component_x
        for w in range(10):
            y = (2 * w + 1)
            self.ar_tan += (-1) ** w * self.direction ** y / y
        self.angle += abs((self.ar_tan * 180) / self.pi)

        return f'\nCOMPONENTS OF FORCE:\n\nX-Component of Force: {self.component_x}\nY-Component of Force: {self.component_y}\n\nRESULTANT FORCE:\n\nNet Force Magnitude: {self.resultant}\nForce Angle: {self.angle}'

    def directions(self):

        if self.component_x > 0 and self.component_y > 0:
            self.direction_2 = 'North of East'
        elif self.component_x < 0 and self.component_y > 0:
            self.direction_2 = 'North of West'
        elif self.component_x > 0 and self.component_y < 0:
            self.direction_2 = 'South of East'
        else:
            self.direction_2 = 'South of West'
        return f'Direction of Force: {self.direction_2}'
    
conversion = Trigonometry()

no_forces = int(input('Number of Forces: '))
for i in range(no_forces):
    print(f'\nBearing {i + 1}')
    (conversion.Trigonometric_Functions(float(input('Angle: '))))
    (conversion.components(float(input('Force: '))))
print(conversion.resultants())
print(conversion.directions())
#------------------------------------------------------vectors end

#------------------------------------------------------free fall
# Convention: Upward - Positive
def init_velocity1(Y, Yo, t): # Condition: time, Initial Y-Position, Final Y-Position
    g = 9.81
    Vo = (Y+(0.5*g*(t**2))-Yo)/ t
    return Vo

def init_velocity2(Vf, t):  # Condition: Final Velocity, Time
    g = 9.81
    Vo = Vf + (g*t)
    return Vo

def init_velocity3(Vf, Yo, Y):  # Condition: Final Velocity=0, Initial Y-Position, Final Y-Position
    g = 9.81
    Vo = ((Vf**2) + (2*g*(Y-Yo))) **0.5
    return Vo

def final_velocity1(Vo, t):  # Condition: Initial Velocity, time
    g = 9.81
    Vf = Vo - (g*t)
    return Vf

def final_velocity2(Vo, Yo, Y):  # Condition: Initial Velocity, Initial Y-Position, Final Y-Position
    g = 9.81
    Vf = ((Vo**2) - (2*g*(Y-Yo))) **0.5
    return Vf

def time_1(Vo, Vf):  # Condition: Final Velocity, Initial Velocity
    g = 9.81
    t = (Vo-Vf)/g
    return t

def time_2(Vo, Yo, Y): # Condition: Initial Velocity, Initial Y-Position, Final Y-Position
    g = 9.81
    a = 0.5 * g
    b = (-1) * Vo
    c = Y - Yo
    t1 = (((-1)*b) - (((b**2)-(4*a*c))**0.5)) / (2*a)
    t2 = (((-1)*b) + (((b**2)-(4*a*c))**0.5)) / (2*a)
    if t1 > 0:
        return t1
    else:
        return t2

def Final_Pos1(Yo, Vo, t):  # Condition: Initial Y-Position, Initial Velocity, Time
    g = 9.81
    Y = Yo + (Vo * t) - (0.5 * g * (t**2))
    return Y

def Final_Pos2(Vf, Vo, Yo):  # Condition: Final Velocity, Initial Velocity, Inital Y-Position
    g = 9.81
    Y = Yo + (((((-1)*Vf) ** 2) + (Vo ** 2)) / (2*g))
    return Y

def Initial_Pos1(Y, Vo, t):  # Condition: Final Y-Position, Initial Velocity, Time
    g = 9.81
    Yo =  Y - (Vo*t) + (0.5 * g * (t**2))
    return Yo

def Initial_Pos2(Vf, Vo, Y):  # Condition: Final Velocity, Initial Velocity, Final Y-Position
    g = 9.81
    Yo = Y - (((((-1)*Vf) ** 2) + (Vo ** 2)) / (2*g))
    return Yo
#------------------------------------------------------free fall end
