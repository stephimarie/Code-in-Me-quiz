const questions = [
     {
        q: "What is JavaScript?",
        a: "A scripting or programming language",
        answerArray: ["A scripting or programming language", "A web page", "it displays static information", "All of thee above"]
    },
     {
        q: "JavaScript and Java are the same thing. True or False?",
        a: "False",
        answerArray: ["False", "True"]
    },
     {
        q: "Variables in JavaScript can be defined using either?",
        a: "All of thee above",
        answerArray: ["Var", "Let", "Const", "All of thee above"]
    },
    {
        q: "What is the tag used to link a JavaScript page in HTML?",
        a: "<script scr>",
        answerArray: ["<link rel>", "<meta name>", "<script scr>", "<script type>"]
    },
    {
        q: "The _____ is a function in JavaScript which is used to print any message that needs to be displayed to the user?",
        a: "console.log",
        answerArray: ["console.asst", "console.log", "console.collapsed", "console.logged"]
    },
    {
        q: "Javascript boolean are data type that take the value of _____?",
        a: "All of thee above",
        answerArray: ["True or False", "Yes and No", "On and Off", "All of thee above"]
    },
    {
        q : "What are conditional statements in Javascript?",
        a: "All of thee above",
        answerArray: ["if", "else", "else if", "All of thee above"]
    }
]


/* 

 let highScore = [];
 
 if highScore === 0
 alert "Try again"

 if highScore 20    
 alert "Way to go"

 if highScore 35
 alert "You know Javascript, Great job!"


*/

// Section variables

function myFunction() {
  var element = document.getElementById("landingPage");
  element.classList.remove("landingPage");
}

let highScore= [];

// sections id
const landingpage = document.getElementById("landingPage");
const questionPage = document.getElementById("questionPage");
const finalscorePage = document.getElementById("finalscorePage");

//Buttons variables
let tryAgain = document.getElementById("tryAgain");

// Q&A variables
let questionPointer = 0;
let answers = document.getElementById("answers");
let question = document.getElementById("question");


//Score variables
let scoreList = document.getElementById("scoreList");
let finalScore = document.getElementById("finalScore");
let textExample = document.getElementById("textExample");

//time variablele
let timerCount = 60
let timer = document.querySelector("#timer")

timer.textContent = timerCount
// let sectionArray = [landingpage, questionPage, finalscorePage];
// clickMe.addEventListener("click", startQuiz);


let pageArray = [landingpage, finalscorePage, questionPage]


function startQuiz() {
  console.log(questions[2]["answerArray"]);
  hidePages();
  questionPage.classList.remove('hide');
}


function hidePages() {
    for(let i = 0; i < pageArray.length; i++) {
        if(!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}


function hideTimer() {
  if(!timer.classList.contains('hide')) {
    timer.classList.add('hide');
  }
}

for (let i = 0; i < questions.answerArray; i++) {

  ans = document.createElement('LI');
  but = document.createElement('button');

  ans.appendChild(but);
  but.textContent = i + 1 + ". " + questions.answerArray[i];

  ans.addEventListener("click", questionController);

  answers.appendChild(ans);
}