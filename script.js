/*
1. Select all elements
2. Create Questions. They will be containing in an Array, 3 questions
3. Display the questions to the user and begin counting down
4. Update progress bar while questions are answered
5. Display to the user in the progress bar if they got the answer correct/incorrect
*/

//Create variables for elements
const start = document.getElementById('start')
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const counter = document.getElementById('counter')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const choiceC = document.getElementById('C')
const progress = document.getElementById('progress')
const score = document.getElementById('scores')
const scoreTable = document.getElementById('highScores')
const submit = document.getElementById('submit')


//Questions for the quiz
let questions = [
  {
    question: "What is one way of declaring a variable in JS?",
    choiceA: "const",
    choiceB: "function",
    choiceC: "string",
    correct: "A"
  },
  {
    question: "What is a true/false data type called?",
    choiceA: "string",
    choiceB: "boolean",
    choiceC: "int",
    correct: "B"
  },
  {
    question: "The condition in an if / else statement is enclosed within:",
    choiceA: "quotes",
    choiceB: "parentheses",
    choiceC: "square brackets",
    correct: "B"
  }
]

//variables
const lastQuestion = questions.length - 1

let runningQuestion = 0;
let count = 60
const questionTime = 60
let TIMER
let scorez = 0

//function that displays the questions
const renderQuestion = () => {
  let q = questions[runningQuestion]

  question.innerHTML = "<p>" + q.question + "</p>"
  choiceA.innerHTML = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC
}

//starts Quiz

const startQuiz = () => {
  start.style.display = "none"
  renderQuestion()
  quiz.style.display = "block"
  renderCounter()
  checkAnswer()
  TIMER = setInterval(renderCounter, 1000)
  
}

start.addEventListener('click', startQuiz)
//render process
const renderProcess = () => {
  for (let qIndex = 0; qIndex < lastQuestion; qIndex++) {
    progress.innerHTML += "<div class = 'prog' id=" + qIndex + "></div>"
  }
}

//counter
//const renderCounter = () => 

//check answers
function checkAnswer(answer) {
  //answer is correct
  if (answer == questions[runningQuestion].correct) {
    grade++;
  } else {
    //answer is wrong
    count -= 10;
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    //ends the quiz
    clearInterval(TIMER);
    scoreRender();
  }
}