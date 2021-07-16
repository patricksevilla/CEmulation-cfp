const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('rst-btn')
const backButton = document.getElementById('bck-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, Questioncount
let countRightAnswers = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  Questioncount = Questioncount + 1
  document.getElementById('itemno').innerHTML = Questioncount;
})
resetButton.addEventListener('click', () =>{
    location.reload();
    })
backButton.addEventListener('click', () => {
    location.assign('https://patricksevilla.github.io/CEmulation/CE-1D/?fbclid=IwAR06tUO4BX22eE_z-udSPdy54DbibYZtH6yYWBCl1jxhKCT_zmSMER1CsP8')//pakipalitan na lang ito ng url or link nung intro page na aking pinapagawa
})

function startGame() {
  startButton.classList.add('hide')
  resetButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  countRightAnswers = 0
  Questioncount = 1
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    questions.sort(() => Math.random() - .5)
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
  questions.forEach(q => q.answers.sort(() => Math.random() - .5));

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resetButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers ++; +1
    }
  document.getElementById('right-answers').innerHTML = countRightAnswers;
  document.getElementById('answer-buttons').classList.add('no-click');
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = const_questions = [
   {
    question: 'A laser beam is aimed 15.95 degrees above the horizontal at a mirror 11,648 m away. It glances off the mirror and continues for an additional 8570. m at 11.44 degrees above the horizon until it hits its target. What is the resultant displacement of the beam to the target?',
    answers: [
      {text: '20, 203 m , 14.04 degrees', correct: true},
      {text: '19, 549 m , 13.04 degrees', correct: false},
      {text: '20, 103 m , 14.14 degrees', correct: false},
      {text: '10, 203 m , 14.04 degrees', correct: false}
    ]
   },
   {
    question: 'Vector A represents the first leg of a walk in which a person walks 53.0 m in a direction 20.0 degrees north of east. Vector B represents the second leg, a displacement of 34.0 m in a direction 63.0 degrees north of east. Find the magnitude and direction of the resultant.',
    answers: [
      {text: '80.2 m , 35. 7 degrees', correct: false},
      {text: '76.4 m , 26. 5 degrees', correct: false},
      {text: '81.2 m , 36.6 degrees', correct: true},
      {text: '34.6 m , 26.6 degrees', correct: false}
    ]
   },
   {
    question: 'A person is located 225 m and 35.0 degrees north of west from her initial position. She walked from her initial position to her final position in two stages. In the first stage of her walk, she walked 150 m at 20.0 degrees south of east. How far and in what direction did she walk in the second part?',
    answers: [
      {text: '172 m , 19.0 degrees', correct: false},
      {text: '256 m , 10.1 degrees', correct: false},
      {text: '460 m , 31.5 degrees', correct: false},
      {text: '372 m , 29.0 degrees', correct: true}
    ]
   },
   {
    question: 'A bus covers a certain distance at an average speed of 40 mph, while returning the same distance it runs at an average speed of 60 mph. What is the average speed of the bus throughout the journey?',
    answers: [
      {text: '48 mph', correct: true},
      {text: '50 mph', correct: false},
      {text: '52 mph', correct: false},
      {text: '54 mph', correct: false}
    ]
   },
   {
    question: "On a certain day, Paul started driving towards the house of Steve at a speed of 45 mph. After moving for 2 hours, he realized that he needed to reach the house in another 2 hours only. Therefore, he increased his speed to 65 mph and reached his destination exactly on time. What is the average speed of his journey?",
    answers: [
      {text: '50.0 mph', correct: false},
      {text: '52.5 mph', correct: false},
      {text: '55.0 mph', correct: true},
      {text: '57.5 mph', correct: false}
    ]
   },
   {
    question: 'If the average speed of bus during the entire journey is 16 km/hr, and if in the first half of the distance the average speed of the bus was 10 km/hr then what was the average speed for the second half of trip?',
    answers: [
      {text: '10 km/hr', correct: false},
      {text: '16 km/hr', correct: false},
      {text: '20 km/hr', correct: false},
      {text: '40 km/hr', correct: true}
    ]
   },
   {
    question: 'If magnitude of average speed and average velocity over a time interval are same, then',
    answers: [
      {text: 'The particle must move zero acceleration', correct: false},
      {text: 'The particle must move with non-zero acceleration', correct: false},
      {text: 'The particle must be at rest', correct: false},
      {text: 'The particle must move in a straight line without turning back', correct: true}
    ]
   },
   {
    question: 'A roller coaster car rapidly picks up speed as it rolls down a slope. As it starts down the slope, its speed is 4 m/s. But 3 seconds later, at the bottom of the slope, its speed is 22 m/s. What is its average acceleration?',
    answers: [
      {text: '5 m/s^2', correct: false},
      {text: '6 m/s^2', correct: true},
      {text: '9 m/s^2', correct: false},
      {text: '12 m/s^2', correct: false}
    ]
   },
   {
    question: 'The position (in meters) of a particle moving in a straight line is given by s(t)=4t^3+6t+2,s(t)=4t3+6t+2, where tt is measured in seconds. What is the instantaneous velocity of the particle at t=8t=8 seconds?',
    answers: [
      {text: '777 m/s', correct: false},
      {text: '776 m/s', correct: false},
      {text: '774 m/s', correct: true},
      {text: '775 m/s', correct: false}
    ]
   },
   {
    question: 'The motion of the car is provided by the function x = 4t2 + 10t + 6. Compute its Instantaneous Velocity at time t = 5s.',
    answers: [
      {text: '50 m/s', correct: true},
      {text: '53 m/s', correct: false},
      {text: '54 m/s', correct: false},
      {text: '57 m/s', correct: false}
    ]
   },
   {
    question: 'A bullet fired in space is traveling in a straight line and its equation of motion is S(t) = 4t + 6t2. If it travels for 15 seconds before impact, find the instantaneous velocity at the 10th second.',
    answers: [
      {text: '124 m/s', correct: true},
      {text: '121 m/s', correct: false},
      {text: '126 m/s', correct: false},
      {text: '123 m/s', correct: false}
    ]
   },
   {
    question: 'A particle is in motion and is accelerating. The functional form of the velocity is v(t) = 20t ? 5t2 m/s. Find the instantaneous acceleration at t = 1, 2, 3, and 5 s.',
    answers: [
      {text: '30 m/s^2', correct: false},
      {text: '-30 m/^2', correct: true},
      {text: '40 m/s^2', correct: false},
      {text: '-40 m/s^2', correct: false}
    ]
   },
   {
    question: 'Consider a man travelling at a velocity of 40 m/s. He then accelerates by 4 m/s^2 for 10 seconds. Find the final velocity of the man.',
    answers: [
      {text: '70 m/s', correct: false},
      {text: '80 m/s', correct: true},
      {text: '90 m/s', correct: false},
      {text: '100 m/s', correct: false}
    ]
   },
   {
    question: 'A girl left her house on her bicycle with a speed of 6 m/s. She decided to speed up to catch her friend she saw nearby. She accelerates by 2 m/s for 5 seconds to be able to do that. What is the distance of the place where she will meet her friend from their house?',
    answers: [
      {text: '50 m', correct: false},
      {text: '52 m', correct: false},
      {text: '55 m', correct: true},
      {text: '58 m', correct: false}
    ]
   },
   {
    question: 'For a goal distance of 100 meters, a boy wants to run with a speed of 10 m/s and acceleration of 2 m/s to improve his endurance. Find his final velocity when he finished his goal distance.',
    answers: [
      {text: '22.33 m/s', correct: false},
      {text: '22.34 m/s', correct: false},
      {text: '22.35 m/s', correct: false},
      {text: '22.36 m/s', correct: true}
    ]
   },
   {
    question: 'What do you call the motion of an object due solely to the gravitational pull of the Earth over small distances?',
    answers: [
      {text: 'Projectile Motion', correct: false},
      {text: 'Free Fall', correct: true},
      {text: 'Horizontal Motion', correct: false},
      {text: 'Relative Motion', correct: false}
    ]
   },
   {
    question: 'A man standing at a window 5m tall watches a falling ball pass by the window in 0.3 seconds. From how high above the top of the window was the ball released?',
    answers: [
      {text: '15.20 m', correct: false},
      {text: '13.68 m', correct: false},
      {text: '11.78 m', correct: true},
      {text: '10.00 m', correct: false}
    ]
   },
   {
    question: 'The following statement demonstrate free fall EXCEPT:',
    answers: [
      {text: 'Skydiving', correct: false},
      {text: 'A stone thrown downward', correct: false},
      {text: 'A spacecraft in continuous orbit', correct: false},
      {text: 'Parachuting', correct: true}
    ]
   },
   {
    question: 'Object A and object B were thrown downward from a h tall building simultaneously with the same initial velocity. If the mass of object A is twice the mass of object B, which will reach the ground first? Note that air resistance is neglected.',
    answers: [
      {text: 'Object A will land first because its mass is twice the mass of object B.', correct: false},
      {text: 'Object B will land first because its mass is half the mass of object A.', correct: false},
      {text: 'Object A and B will land at the same time.', correct: true},
      {text: 'Object A and B will never land.', correct: false}
    ]
   },
   {
    question: 'What is the force that attracts a body toward the center of the earth?',
    answers: [
      {text: 'Centripetal Force', correct: false},
      {text: 'Gravity', correct: true},
      {text: 'Centrifugal Force', correct: false},
      {text: 'Velocity', correct: false}
    ]
   },
   {
    question: 'Craving for a guava, a boy decided to climb up the guava tree to pick some. Up there, he saw a yellowish guava which he immediately picked to satisfy his craving. The moment he had it in his hands, he noticed that there is a worm feeding on it. What he did is throw the guava fruit up in the air with an initial velocity of 12 m/s at a 15-degree angle of release. The time of flight of the guava is estimated to be 1.47 s. At what height did the boy throw it?',
    answers: [
      {text: '6.0 m', correct: false},
      {text: '6.1 m', correct: false},
      {text: '6.2 m', correct: false},
      {text: '6.3 m', correct: true}
    ]
   },
   {
    question: 'In a basketball game, Kyle released the ball 2.2m above the ground when he was 8.2m away horizontally from the basket. The basket is 3m above the ground. After 2 seconds, the ball sank in the basket. Find the initial velocity when the angle of release is 35 degrees.',
    answers: [
      {text: '10.00 m/s', correct: false},
      {text: '14.30 m/s', correct: false},
      {text: '10.01 m/s', correct: true},
      {text: '14.29 m/s', correct: false}
    ]
   },
   {
    question: 'Since it is summer, Ella wants to try an extreme experience in their outing. As they arrived to the location of their swimming, she immediately climb a 50 m high pool diving board and jumped with an initial velocity of 9.6 m/s and a 23 degree angle. Within 3.71 s she reached the pool. How far is she from the starting point?',
    answers: [
      {text: '35.62 m', correct: false},
      {text: '32.78 m', correct: true},
      {text: '13.92 m', correct: false},
      {text: '12.54 m', correct: false}
    ]
   },
   {
    question: 'An object is launched at a velocity of 20 m/s in a direction making an angle of 25 degrees upward with the horizontal. What is the maximum height reached by the object?',
    answers: [
      {text: '6.59 m', correct: false},
      {text: '4.64 m', correct: false},
      {text: '3.64 m', correct: true},
      {text: '3.18 m', correct: false}
    ]
   },
   {
    question: 'An object is launched at a velocity of 20 m/s in a direction making an angle of 25 degrees upward with the horizontal. What is the total flight time (between launch and touching the ground) of the object?',
    answers: [
      {text: '0.86 s', correct: false},
      {text: '1.72 s', correct: true},
      {text: '3.97 s', correct: false},
      {text: '2.55 s', correct: false}
    ]
   },
   {
    question: 'An object is launched at a velocity of 20 m/s in a direction making an angle of 25degrees upward with the horizontal. What is the horizontal range (maximum x above ground) of the object?',
    answers: [
      {text: '33.33 m', correct: false},
      {text: '31.26 m', correct: true},
      {text: '30.04 m', correct: false},
      {text: '28.57 m', correct: false}
    ]
   },
   {
    question: 'An object is launched at a velocity of 20 m/s in a direction making an angle of 25 degrees upward with the horizontal. What is the magnitude of the velocity of the object just before it hits the ground?',
    answers: [
      {text: '10 m/s', correct: false},
      {text: '30 m/s', correct: false},
      {text: '40 m/s', correct: false},
      {text: '20 m/s', correct: true}
    ]
   },
   {
    question: 'A 0.2 kg ball rotates at a constant speed of 3 m/s on the end of 1.2 m long string. What is the centripetal acceleration of the object?',
    answers: [
      {text: '1.2 m/s^2', correct: false},
      {text: '3.0 m/s^2', correct: false},
      {text: '7.5 m/s^2', correct: true},
      {text: '3.2 m/s^2', correct: false}
    ]
   },
   {
    question: 'A child sits and accelerates with 19 m/s^2 at a distance of 3.0 m from the axis of a merry-go-round in an amusement park. Find its tangential speed.',
    answers: [
      {text: '8.34 m/s', correct: false},
      {text: '7.54 m/s', correct: true},
      {text: '6.24 m/s', correct: false},
      {text: '8.04 m/s', correct: false}
    ]
   },
   {
    question: 'The earth orbits the sun at a distance of 1.5 x 10^11 m. What is the centripetal acceleration of the earth around the sun?',
    answers: [
      {text: '5.95 x 10^-3 m/s^2', correct: true},
      {text: '4.35 x 10^4 m/s^2', correct: false},
      {text: '5.95 x 10^3 m/s^2', correct: false},
      {text: '4.35 x 10^-4 m/s^2', correct: false}
    ]
   },
   {
    question: 'In a carnival ride , the passengers travel in a circle of radius 5.0 m, making one complete circle in 4.0 s. What is the speed?',
    answers: [
      {text: '7.85 m/s', correct: true},
      {text: '8.75 m/s', correct: false},
      {text: '5.78 m/s', correct: false},
      {text: '6.57 m/s', correct: false}
    ]
   },
   {
    question: 'A toy car is held in a circle by a 0.10 m string attached to it when allowed to run in a flat track while the car is exerting a constant speed of 3.25 m/s. How much time needed for an object to make one complete revolution?',
    answers: [
      {text: '0.4 s', correct: false},
      {text: '0.3 s', correct: false},
      {text: '0.2 s', correct: true},
      {text: '0.5 s', correct: false}
    ]
   },
   {
    question: 'A small ant is sleeping on a turntable just as the turntable starts to spin from rest, with an angular acceleration ?=1rad/s2?=1rad/s2 that is small enough so that, initially, the ant remains on the turntable. The ant is a distance R=0.1mR=0.1m from the center of the turntable, as shown in Figure 6.4.16.4.1 and the coefficient of static friction between the feet of the ant and the turntable is ?s=0.5?s=0.5. After how much time will the ant slide off from the turntable?',
    answers: [
      {text: '2s', correct: false},
      {text: '4.5s', correct: false},
      {text: '7s', correct: true},
      {text: '6s', correct: false}
    ]
   },
   {
    question: 'A 1200kg car accelerates from rest to speed of 40 m/s in 5 seconds at a constant rate on a circular track of radius 800m. What is the tangential acceleration?',
    answers: [
      {text: '9m/s^2', correct: false},
      {text: '12m/s^2', correct: false},
      {text: '8m/s^2', correct: true},
      {text: '0m/s^2', correct: false}
    ]
   },
   {
    question: 'The net acceleration is no longer pointing towards the centre of the circle',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'There are 2 components of acceleration: radial and centripetal.',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'A car moving on a crowded road with a number of traffic red signals is in non-uniform motion.',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'Displacement of a body can be positive or zero, but never negative.',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'Angular displacement is measured in radians.',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'A freely falling body is uniformly accelerated.',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false},
      {text: 'Partly True', correct: false},
      {text: 'Partly False', correct: false}
    ]
   },
   {
    question: 'You drive north on a straight two-lane road at a constant 88 km/h. A truck in the other lane approaches you at a constant 104 km/h. Find the velocity of the truck relative to you.',
    answers: [
      {text: '192 km/h', correct: false},
      {text: '-192 km/h', correct: true},
      {text: '16 km/h', correct: false},
      {text: '-16 km/h', correct: false}
    ]
   },
   {
    question: 'The compass of a plane indicates that it is headed due north, and its airspeed indicator shows that it is moving through the air at 240 km/h. If there is a 100- km/h wind from west to east, what is the velocity of the plane relative to the earth?',
    answers: [
      {text: '260 km/h', correct: true},
      {text: '340 km/h', correct: false},
      {text: '140 km/h', correct: false},
      {text: '170 km/h', correct: false}
    ]
   },
   {
    question: 'A motorcycle traveling on the highway at a speed of 120 km/h passes a car traveling at a speed of 90 km/h. From the point of view of a passenger on the car, what is the velocity of the motorcycle?',
    answers: [
      {text: '210 km/h', correct: false},
      {text: '-210 km/h', correct: false},
      {text: '30 km/h', correct: true},
      {text: '-30 km/h', correct: false}
    ]
   },
   {
    question: 'A ship sails North in still water at 25 m/s directly across the sea that runs East at 11 m/s. What is the velocity of the ship relative to Earth?',
    answers: [
      {text: '36 m/s', correct: false},
      {text: '27.31 m/s', correct: true},
      {text: '14 m/s', correct: false},
      {text: '-36 m/s', correct: false}
    ]
   },
   {
    question: 'Across the river that flows with a rate of 4 m/s, Mr. Pepper swims at the velocity of 3 m/s. Find his velocity relative to the Earth.',
    answers: [
      {text: '1 m/s', correct: false},
      {text: '-1 m/s', correct: false},
      {text: '7 m/s', correct: false},
      {text: '5 m/s', correct: true}
    ]
    }
]
