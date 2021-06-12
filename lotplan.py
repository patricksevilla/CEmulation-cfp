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
