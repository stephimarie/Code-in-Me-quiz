let questions = [
    {
        q : "What is JavaScript?",
        a: "A scripting or programming language",
        answerArray : ["A scripting or programming language", "A web page", "it displays static information", "All of thee above"]
    },
    {
        q : "JavaScript and Java are the same thing. True or False?",
        a: "False",
        answerArray : ["False", "True"]
    },
    {
        q : "Variables in JavaScript can be defined using either?",
        a: "All of thee above",
        answerArray : ["Var", "Let", "Const", "All of thee above"]
    },
    {
        q : "What is the tag used to link a JavaScript page in HTML?",
        a: "<Script scr>",
        answerArray : ["<link rel>", "<meta name>", "<script scr>", "<script type>"]
    },
    {
        q : "The _____ is a function in JavaScript which is used to print any message that needs to be displayed to the user?",
        a: "console.log",
        answerArray : ["console.asst", "console.log", "console.collapsed", "console.logged"]
    },
    {
        q : "Javascript boolean are data type that take the value of _____?",
        a: "All of thee above",
        answerArray : ["True or False", "Yes and No", "On and Off", "All of thee above"]
    },
    {
        q : "What are conditional statements in Javascript?",
        a: "All of thee above",
        answerArray : ["if", "else", "else if", "All of thee above"]
    }
]
let highScore = [];
//Section variables
let landingpage = document.getElementById("landingPage");
let questionPage = document.getElementById("questionPage");
let finalscorePage = document.getElementById("finalscorePage");
//Buttons variables
let clickMe = document.getElementById("clickMe");
let tryAgain = document.getElementById("tryAgain");
//Q&A variables
let quesionPointer = 0
let questions = document.getElementById("question");
let answers = document.getElementById("answer");
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")
var optionD = document.querySelector("#optionD")

//Score variables
let scoreList = document.getElementById("scoreList");
let finalScore = document.getElementById("finalScore");
let textExample = document.getElementById("textExample");
//time variablele
let timerCount = 60
let timerEl = document.querySelector("#timer")

timerEl.textContent = timerCount

let timer = window.setInterval(function () {
  timerCount--;
  timerEl.textContent = timerCount

  if (timerCount === 0) {
    clearInterval(timer)
  }
}, 1000)

let timer = document.getElementById("timer");
let sectionArray = [landingpage, questionPage, finalscorePage];
clickMe.addEventListener("click", startQuiz);

function startQuiz() {
    hidePages();
    questionPage.classList.remove('hide');
}
function hidePages() {
    for(let i = 0; i < sectionArray.length; i++) {
        if(!sectionArray[i].classList.contains('hide')) {
            sectionArray[i].classList.add('hide');
        }
    }
}
function setQuestions() {

    if (questionsPointer === questions.length) {
      clearInterval(timer)
      alert("You are done with " + timerCount + " time left")
      return
    }
  
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].answerArray[0]
    optionB.textContent = questions[questionsPointer].answerArray[1]
    optionC.textContent = questions[questionsPointer].answerArray[2]
    optionD.textContent = questions[questionsPointer].answerArray[3]

  }
