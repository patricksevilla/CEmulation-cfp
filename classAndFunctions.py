# code dito mga tol
import random
import pyodbc

def get_dbconn(file, password=None):
    pyodbc.pooling = False
    driver = '{Microsoft Access Driver (*.mdb, *.accdb)}'
    dbdsn = f'Driver={driver};Dbq={file};'
    if password:
        dbdsn += f'Pwd={password};'
    return pyodbc.connect(dbdsn)

def get_question():

    conn_str = 'D:\ENGINEERING\st year 2nd sem\SUBMISSIONS\COMP FUND\PYTHON WORKS\sample.accdb'
    conn = get_dbconn(conn_str)
    crsr = conn.cursor()

    # Get Table Names
    table_name = []
    for table_info in crsr.tables(tableType='TABLE'):
        table_name.append(table_info.table_name)

    # Read Data
    sql = f'select * from {table_name[0]}'
    crsr.execute(sql)
    Items = crsr.fetchall()

    question_all = []
    questions = []
    choices = []
    rightans = []
    index = 0
    questionno = 0

    for qs in Items:
        choicesq = []
        questions.append(qs[1])
        rightans.append(qs[6])
        choices.append(list(qs[2:6]))
        for i in choicesq:
            choices.append(choicesq)


    while questionno != len(questions):
        questions_full = []
        questions_full.append(questions[index])
        questions_full.append(choices[index])
        questions_full.append(rightans[index])
        question_all.append(questions_full)
        index = index + 1
        questionno = questionno + 1

    return question_all

def new_game():
    question_list = get_question()
    random.shuffle(question_list)
    question_number = 0
    score = 0
    for B in question_list:
        question_number = question_number + 1
        print(f'{question_number}. {B[0]}')
        for x in range(len(B[1])):
            print(f'\t{B[1][x]}')
        Answer = (input('Enter Your Answer (A,B,C,D,): ')).upper()
        if Answer == B[2]:
            score = score + 1
            print('Correct!')
        else:
            print(f'Your answer is incorrect the answer is {B[2]}')
    print(f'Your Score is {score}/{question_number}!')

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
dmd_sum = []
product = []

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

        x_comp.append(lat)
        y_comp.append(dep)

    except IndexError:
        print ("\nOoops! You entered the wrong format.")
        print ("Please refer to the sample input below:")
        print ("Input could be: S 27 29 E 11.81 Meters or N 45 E 15 meters")

for i in range(int(user_input)):
    bearing = input(f"Input Bearing No.0{i+1}: ")
    bearing = bearing.split(" ")
    user(bearing)

for a in range(len(y_comp)):
    if a == 0:
        q = (y_comp[0])
    else:
        q = (dmd_sum[a - 1]) + (y_comp[a - 1]) + (y_comp[a])
    dmd_sum.append(q)


for b in range(len(x_comp)):
    da = x_comp[b] * (dmd_sum[b])
    product.append(da)
area = sum(product) / 2

print(abs(area))
    
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

#-----------------------------------------vectors start
import math


class Vector:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.x_components = []
        self.y_components = []
        self.force = 0
        self.angle = 0
        self.direction = 0
        self.sin = 0
        self.cos = 0
        self.arc_tan = 0
        self.resultant = 0

    def angles(self, angle):
        self.sin = 0
        self.sin = math.sin(math.radians(angle))

        self.cos = 0
        self.cos = math.cos(math.radians(angle))

        return self.sin, self.cos

    def components(self, force):
        # X-Component
        self.x = 0
        self.force = force
        self.x = self.force * self.cos

        # Y-Component
        self.y = 0
        self.y = (self.force * self.sin)
        self.x_components.append(self.x)
        self.y_components.append(self.y)

        return self.x_components, self.y_components

    def resultant_angle(self):
        self.arc_tan = 0
        self.y_components = sum(self.y_components)
        self.x_components = sum(self.x_components)
        self.resultant = (self.x_components ** 2 + self.y_components ** 2) ** 0.5

        angle_1 = self.y_components / self.x_components
        self.arc_tan = abs(math.atan(angle_1))
        self.arc_tan = math.degrees(self.arc_tan)
        return f'\n\nCOMPONENTS OF THE FORCE:\n\nX-COMPONENT: {self.x_components} \nY-COMPONENT: {self.y_components}\n\nRESULTANT OF THE FORCE: \n\nNet Force Magnitude: {self.resultant}\nForce Angle: {self.arc_tan} '

    def directions(self):

        if self.x_components > 0 and self.y_components > 0:
            self.direction_2 = 'North of East'
        elif self.x_components < 0 and self.y_components> 0:
            self.direction_2 = 'North of West'
        elif self.x_components > 0 and self.y_components < 0:
            self.direction_2 = 'South of East'
        else:
            self.direction_2 = 'South of West'
        return f'Direction of the Force: {self.direction_2}'

x = Vector()

no_forces = int(input('Number of Forces: '))
for i in range(no_forces):
    print(f'\nBearing {i + 1}')
    (x.angles(float(input('Angle: '))))
    (x.components(float(input('Force: '))))
print(x.resultant_angle())
print(x.directions())

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

# Two Unknown
def Time_FinalPos(Vf, Vo, Yo):  # Condition: Final Velocity, Initial Velocity, Initial Position
    g = 9.81
    t = (Vo-Vf)/g
    Y = Yo + (Vo * t) - (0.5 * g * (t ** 2))
    return Y

def Time_FinalVelocity(Vo, Y, Yo):  # Condition: Initial Velocity, Final Position, Initial Position
    g = 9.81
    a = 0.5 * g
    b = (-1) * Vo
    c = Y - Yo
    t1 = (((-1) * b) - (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a)
    t2 = (((-1) * b) + (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a)
    if t1 > 0:
        t = t1
    else:
        t = t2
    Vf = Vo - (g * t)
    return Vf
#------------------------------------------------------free fall end

#------------------------------------------------------motion 1D
# Motion in One Dimension

# Given initial velocity, acceleration, and time
def final_velocity1(vo, a, t):
    vf = vo + (a * t)
    return vf


# Given final velocity, acceleration, and time
def initial_velocity1(vf, a, t):
    vo = vf - (a * t)
    return vo


# Given final velocity, initial velocity, and time
def acceleration(vf, vo, t):
    a = (vf - vo) / t
    return a


# Given final velocity, initial velocity, and acceleration
def time1(vf, vo, a):
    t = (vf - vo) / a
    return t


# Given initial position, initial velocity, acceleration, and time
def final_position1(xo, vo, t, a):
    xf = xo + (vo * t) + (0.5 * a * (t ** 2))
    return xf


# Given final position, initial velocity, acceleration, and time
def initial_position1(xf, vo, t, a):
    xo = xf - (vo * t) - (0.5 * a * (t ** 2))
    return xo


# Given final position, initial position, initial velocity, and time
def acceleration2(xf, xo, vo, t):
    a = (2 * (xf - xo - (vo * t))) / (t ** 2)
    return a


# Given final position, initial position, acceleration, and time
def initial_velocity2(xf, xo, a, t):
    vo = (xf - xo - (0.5 * a * (t ** 2))) / t
    return vo


# Given final position, initial position, initial velocity, and acceleration
def time2(xf, xo, vo, a):
    t = ((-1 * vo) + ((vo ** 2) - (4 * 0.5 * a * (xo - xf)))) / a
    return t


# Given final position, initial position, initial velocity, and acceleration
def time3(xf, xo, vo, a):
    t = ((-1 * vo) - ((vo ** 2) - (4 * 0.5 * a * (xo - xf)))) / a
    return t


# Given initial velocity, final position, initial position, and acceleration
def final_velocity2(vo, a, xf, xo):
    vf = ((vo ** 2) + ((2 * a) * (xf - xo))) ** 0.5
    return vf


# Given final velocity, final position, initial position, and acceleration
def initial_velocity3(vf, a, xf, xo):
    vo = ((vf ** 2) - ((2 * a) * (xf - xo))) ** 0.5
    return vo


# Given final velocity, initial velocity, final position, and initial position
def acceleration3(vf, vo, xf, xo):
    a = ((vf ** 2) - (vo ** 2)) / (2 * (xf - xo))
    return a


# Given final velocity, initial velocity, final position, and acceleration
def initial_position2(vf, vo, a, xf):
    xo = xf - (((vf ** 2) - (vo ** 2)) / (2 * a))
    return xo


# Given final velocity, initial velocity, initial position, and acceleration
def final_position2(vf, vo, a, xo):
    xf = xo + (((vf ** 2) - (vo ** 2)) / (2 * a))
    return xf
#------------------------------------------------------motion 1D end

#------------------------------------------------------Non Uniform Circular Motion 1D 
    from math import sqrt,atan,degrees
class NonUniformMotion:
    
    def __init__(self,m=0,vi=0,vf=0,r=0,v = 0,t = 0):
        self.radius = r
        self.mass = m
        self.initial_velocity = vi
        self.final_velocity = vf
        self.velocity = v
        self.time = t
    
    def getYAcc(self):
        v = self.velocity or self.final_velocity
        y = (v**2)/self.radius
        return y
    def getResAcc(self):
        r =  sqrt((self.tan_acc)**2 + (self.cen_acc)**2)
        return float('%.2f'%r)
    def getXAcc(self):
        x = (self.final_velocity - self.initial_velocity)/self.time
        return x
    def getNetf(self,tanf=0,cenf=0):
        if tanf and cenf:
            return float('%.2f'%sqrt((tanf)**2 + (cenf)**2))
        return self.mass*self.net_acc
    
    def getCforce(self):
        return self.mass*self.cen_acc
    def getTForce(self):
        return self.mass*self.tan_acc
    
    
    @property
    def net_acc(self):
        return self.getResAcc()
    @property
    def tan_acc(self):
        return self.getXAcc()
    @property
    def cen_acc(self):
        return self.getYAcc()
 
    # forces
    @property
    def cen_force(self):
        return self.getCforce()
    @property
    def net_force(self,t = 0,c=0):
        if t and c:
            return self.getNetf(t,c)
        return self.getNetf()
    @property
    def tan_force(self):
        return self.getTForce()
    @property
    def angle(self):
        ang = atan(self.cen_acc/self.tan_acc)
        return float('%.2f'%degrees(ang))
    
    
# solutions where based on youtube discussion
# http://youtu.be/XlvD5_0FVSc
# problem was given in youtube link . . . 
u = NonUniformMotion(t = 5,vf= 40,m=1200,r=800)
print('centripetal acceleration :',u.cen_acc,'m/s2') # centripetal acc
print('tangental acceleration :',u.tan_acc,'m/s2') # tangental acceleration x
print('net acceleration :',u.net_acc,'m/s2') # net acceleration
print('net force :',u.net_force,'N') # net force Newton
 
print('centripetal force :',u.cen_force,'N') # centripetal force Newton
print('tangental force :',u.tan_force,'N')
print('net force second formula :',u.getNetf(u.tan_force,u.cen_force),'N')# second formula for net force given 2 parameters
print('angle :',u.angle,'degrees') # angle calculation
#------------------------------------------------------Non Uniform Circular Motion 1D end

# -----------------------------------------------------ave speed, ave velocity, ave acceleration
# Average Speed, Average Velocity, Average Acceleration

# Average Speed
# Given: distance, and time
def average_speed(d, t):
    a_s = d / t
    return a_s


# Given: average speed, and time
def distance(a_s, t):
    d = a_s * t
    return d


# Given: average speed, and distance
def time(a_s, d):
    t = d / a_s
    return t


# Average Speed (Other Formulas)
# Case 1: Different Distance at the Same Time
# Given: initial speed, and final speed
def average_speed1(si, sf):
    a_s = (si + sf) / 2
    return a_s


# Given: average speed, and final speed
def initial_speed(a_s, sf):
    si = (2 * a_s) - sf
    return si


# Given: average speed, and initial speed
def final_speed(a_s, si):
    sf = (2 * a_s) - si
    return sf


# Case 2: Same Distance at the Different Time
# Given: initial speed, and final speed
def average_speed2(si, sf):
    a_s = (2 * si * sf) / (si + sf)
    return a_s


# Given: average speed, and final speed
def initial_speed1(a_s, sf):
    si = (a_s * sf) / ((2 * sf) - a_s)
    return si


# Given: average speed, and initial speed
def final_speed1(a_s, si):
    sf = (a_s * si) / ((2 * si) - a_s)
    return sf


# Average Velocity
# Given: initial position, final position, initial time, and final time
def average_velocity(xi, xf, ti, tf):
    a_v = (xf - xi) / (tf - ti)
    return a_v


# Given: average_velocity, final position, initial time, and final time
def initial_position(a_v, xf, ti, tf):
    xi = xf - a_v * (tf - ti)
    return xi


# Given: average_velocity, initial position, initial time, and final time
def final_position(a_v, xi, ti, tf):
    xf = xi + a_v * (tf - ti)
    return xf


# Given: average_velocity, initial position, final position, and final time
def initial_time(a_v, xi, xf, tf):
    ti = (a_v * tf - (xf - xi)) / a_v
    return ti


# Given: average_velocity, initial position, final position, and initial time
def final_time(a_v, xi, xf, ti):
    tf = ((xf - xi) + a_v * ti) / a_v
    return tf


# Average Acceleration
# Given: final velocity, initial velocity, initial time, and final time
def average_acceleration(vf, vi, ti, tf):
    a = (vf - vi) / (tf - ti)
    return a


# Given: average acceleration, final velocity, initial time, and final time
def initial_velocity(a, vf, ti, tf):
    vi = vf - a * (tf - ti)
    return vi


# Given: average acceleration, initial velocity, initial time, and final time
def final_velocity(a, vi, ti, tf):
    vf = vi + a * (tf - ti)
    return vf


# Given: average acceleration, initial velocity, final velocity, and final time
def initial_time1(a, vi, vf, tf):
    ti = (a * tf - (vf - vi)) / a
    return ti


# Given: average acceleration, initial velocity, final velocity, and initial time
def final_time1(a, vi, vf, ti):
    tf = ((vf - vi) + a * ti) / a
    return tf
# -----------------------------------------------------ave speed, ave velocity, ave acceleration end

# -----------------------------------------------------Projectile Motion

g = 9.81

# Given x initial, initial velocity, angle along x-axis, and time
def x_final(xo, vo, cos0, t):
    xf = xo + (vo * cos0 * t)
    return xf


# Given y initial, initial velocity, angle along x-axis, time
def y_final(yo, vo, sin0, t):
    yf = yo + (vo * sin0 * t) - (1/2 * g * t**2)
    return yf


# Given initial velocity, and angle along x-axis
def velocity_along_x(vo, cos0):
    vx = vo * cos0
    return vx


# Given initial velocity, angle along x-axis, and time
def velocity_along_y(vo, sin0, t):
    vy = vo * sin0 - (g * t)
    return vy


# Given initial velocity, angle along x-axis, y final, and y initial
def velocity_along_y(vo, sin0, yf, yo):
    vy = ((vo * sin0) ** 2 - (2 * g) * (yf - yo))**1/2
    return vy


# Given x velocity and y velocity
def initial_velocity(vx, vy):
    vo = (vx ** 2 + vy ** 2) ** 1/2


# Given x velocity and angle along x
def initial_velocity(vx, cos0):
    vo = vx / cos0
    return vo


# Given x final, x initial, angle along x, and time
def initial_velocity(xf, xo, cos0, t):
    vo = (xf - xo) / (cos0 * t)
    return vo


# Given y velocity, time, and angle along x
def initial_velocity(vy, t, sin0):
    vo = (vy + (g * t)) / sin0
    return vo


# Given y final, y initial, time, and angle along x
def initial_velocity(yf, yo, t, sin0):
    vo = ((yf - yo) + (1/2 * g * (t ** 2))) / (sin0 * t)
    return vo


# Given x final, x initial, initial velocity, and angle along x
def time(xf, xo, vo, cos0):
    t = (xf - xo) / (vo * cos0)
    return t


# Given initial velovity, angle along x, and y velocity
def time(vo, sin0, vy):
    t = ((vo * sin0) - vy) / g
    return t

#--------------------------------------------------------- Projectile Motion

# ----------------------------------------------------- Uniform Circular Motion
import math


def CentripetalAcceleration(v, R):  # Given Velocity and RADIUS
    Ac = v ** 2 / R
    return Ac


def Radius_Ac(Ac, v):  # Given CENTRIPETAL ACCELERATION and VELOCITY
    R = v ** 2 / Ac
    return R


def Vel_ac(Ac, R):  # Given CENTRIPETAL ACCELERATION AND RADIUS
    v = math.sqrt(R * Ac)
    return v


def Speed(d, T):  # Given DISTANCE and TIME
    speed = d / T
    return speed


def Time(d, s):  # Given DISTANCE and SPEED
    time = d / s
    return time


def Distancce(s, T):  # Given SPEED and TIME
    d = s * T
    return d


def Period(R, v):  # Given RADIUS and VELOCITY
    T = (2 * math.pi * R) / v
    return T


def Velocity(R, T):  # Given RADIUS and TIME
    v = (2 * math.pi * R) / T
    return v


def Radius(T, v):  # Given TIME and Velocity
    R = (T * v) / 2 * math.pi
    return R


# Ac = Arad
def Arad(R, T):  # Given RADIUS and TIME
    arad = (4 * math.pi * R) / T ** 2
    return arad


def R_rad(arad, T):  # Given ARAD and TIME
    R = ((T ** 2) * arad) / (4 * math.pi)
    return R


def T_rad(arad, R):  # Given ARAD and RADIUS
    T = math.sqrt((4 * math.pi * R) / arad)
    return T


def vel_grav(g, R):  # Velocity affected by gravity (Given GRAVITY AND RADIUS)
    v = math.sqrt(g * R)
    return v
# ----------------------------------------------------- Uniform Circular Motion End

# ----------------------------------------------------- Clark and Aljean's Code, di ko alam ano topicc nila
import re
time = int(input("Input Change in Time: "))
def read(eq):
    terms = eq.split('+')
    equation = [re.split('x\^?', t) for t in terms]
    eq_map = []
    for e in equation:
        try:
            coeff = int(e[0])
        except ValueError:
            coeff = 1
        try:
            power = int(e[1])
        except ValueError:
            power = 1
        except IndexError:
            power = 0
        eq_map.append((coeff, power))
    return eq_map

def write(eq_map):
    def str_power(p):
        if p == 0:
            return ''
        elif p == 1:
            return 'x'
        else:
            return 'x^%d' % (p,)

    def str_coeff(c):
        return '' if c == 1 else str(c)
    str_terms = [(str_coeff(c) + str_power(p)) for c, p in eq_map]
    return "+".join(str_terms)

def derivative(eq):
    eq_map = read(eq)
    der_map = [(p*c, p-1) for c, p in eq_map[:-1]]
    return write(der_map)

def run(eq):
    print(eq, '->', derivative(eq))


def read(eq):
    terms = eq.split('+')
    equation = [re.split('x\^?', t) for t in terms]
    eq_map = []



print("Enter Polynomial ")
run(input(str("Enter Polynomial: ")))

# ----------------------------------------------------- Clark and Aljean's Code, di ko alam ano topicc nila End
