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
const scoreContainer = document.getElementById('scoreContainer')

//Question display variables
let lastQuestionIndex = questions.length - 1
let runningQuestionIndex = 0;

//Timer variables
const questionTime = 30

//Array container for the questions
let questions = [
  {
    question: "What is one way of declaring a variable in JS?",
    choiceA: "const",
    choiceB: "function",
    choiceC: "string"
  },
  {
    question: "What is a true/false data type called?",
    choiceA: "string",
    choiceB: "boolean",
    choiceC: "int"
  },
  {
    question: "The condition in an if / else statement is enclosed within:",
    choiceA: "quotes",
    choiceB: "parentheses",
    choiceC: "square brackets"
  }
]

//function that displays the questions
const renderQuestion = () => {
  let q = questions[runningQuestionIndex]
  question.innerHTML = "<p>" + q.question + "</p>"
  choiceA.innerHTML = q.choiceA
  choiceB.innerHTML = q.choiceB
  choiceC.innerHTML = q.choiceC
}

//progress bar changer
const progressBar = () => {
  for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>"

  }
}
//Changes the progress bar to GREEN if the answer is correct
const correctAnswer = () => {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
//Changes the progress bar to RED if the answer is wrong
const incorrectAnswer = () => {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}


