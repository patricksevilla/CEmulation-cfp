const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  countRightAnswers = 0
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
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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

const questions = [
   {
    question: 'If magnitude of average speed and average velocity over a time interval are same, then',
    answers: [
      { text: 'The particle must move zero acceleration', correct: false },
      { text: 'The particle must move in a straight line without turning back', correct: true },
      { text: 'The particle must move with non-zero acceleration;', correct: false },
      { text: 'The particle must be at rest', correct: false }
    ]
   },
   {
    question: 'A car moving on a crowded road with a number of traffic red signals is in non-uniform motion',
    answers: [
      { text: 'False', correct: false },
      { text: 'True', correct: true },
      { text: 'Partly True', correct: false },
      { text: 'Partly False', correct: false }
      ]
    },
    {
    question: 'A ship sails North in still water at 25 m/s directly across the sea that runs East at 11 m/s. What is the velocity of the ship relative to Earth?',
    answers: [
      { text: '36 m/s', correct: false },
      { text: '27.31 m/s', correct: true },
      { text: '14 m/s', correct: false },
      { text: '-36 m/s', correct: false }
      ]
    }
]