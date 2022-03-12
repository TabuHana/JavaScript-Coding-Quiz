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
const score = document.getElementById('score')

let grade = 0

//Question display variables
let runningQuestion = 0;

//Timer variables
let count = 60
const questionTime = 60
let TIMER

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

//indexing the question, have to put it under questions
const lastQuestion = questions.length - 1

//function that displays the questions
const renderQuestion = () => {
  let q = questions[runningQuestion]
  question.innerHTML = "<p>" + q.question + "</p>"
  choiceA.innerHTML = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC
}

//progress bar changer
const progressBar = () => {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>"

  }
}


const renderCounter = () => {
  if (count <= questionTime) {
    counter.innerHTML = count;
    count++
  } else {
    count = 0
  }
}

const startQuiz = () => {
  start.style.display = "none"
  renderQuestion()
  quiz.style.display = "block"
  renderCounter()
  checkAnswer()
  TIMER = setInterval(renderCounter, 1000)
  console.log(grade)

}

start.addEventListener('click', startQuiz)

