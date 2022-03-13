/*
1. Select all elements
2. Create Questions. They will be containing in an Array, 3 questions
3. Display the questions to the user and begin counting down
4. Update progress bar while questions are answered
5. Display to the user in the progress bar if they got the answer correct/incorrect
*/

//Create variables for elements
const start = document.getElementById('start')
const startText = document.getElementById('start-quiz')
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
const scoreDiv = document.getElementById('highscore')


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
let count = 30
// const questionTime = 30
let TIMER
let grade = 0

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
  startText.style.display = "none"
  renderQuestion()
  quiz.style.display = "block"
  renderCounter()
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
const renderCounter = () => {
  if (count > -1) {
    counter.innerHTML = count
    count--
  } else {
    if (runningQuestion < lastQuestion) {
      runningQuestion++
      renderQuestion()
    } else {
      clearInterval(TIMER)
      scoreRender()
    }
  }
}

//check answers
function checkAnswer(answer) {
  //answer is correct
  if (answer === questions[runningQuestion].correct) {
    grade++;
  } else {
    //answer is wrong
    count -= 10;
    console.log('wrong')
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

//renders the ending score display
scoreRender = () => {
  quiz.style.display = 'none'
  scoreDiv.style.display = 'block'
}

submit.addEventListener(`click`, event => {
  let newScore = {
    time: grade,
    initials: document.getElementById(`first_name`).value
  }
  //This portion ensures that the scores and times are saved in local storage. Local storage requires us to use JSON to parse the information into strings easily. 
  if (localStorage.getItem(`scores`)) {
    let scores = [];
    scores = JSON.parse(localStorage.getItem(`scores`))
    scores.push(newScore)
    localStorage.setItem("scores", JSON.stringify(scores));
  } else {
    let scores = [];
    scores.push(newScore)
    localStorage.setItem("scores", JSON.stringify(scores));
  }
  // invoke the function to show the high scores.
  highscoreTable()
})
// function gets items from the local storage so we can display the scores on the website. Used innerHTML to simply display scores from javaScript
function highscoreTable() {
  scoreDiv.style.display = "none";
  let scores = [];
  scores = JSON.parse(localStorage.getItem(`scores`))
  console.log(scores)
  highTable.innerHTML = scores
    .map((grade) => `<li>${grade.initials} - ${grade.time}`)
    .join('');
}