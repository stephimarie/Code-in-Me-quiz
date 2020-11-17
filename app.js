const questionContent = [
    question1 = {
        question: "What is JavaScript?",
        correctAnswer: "A scripting or programming language",
        answerArray: ["A scripting or programming language", "A web page", "it displays static information", "All of thee above"]
    },
    question2 = {
        question: "JavaScript and Java are the same thing. True or False?",
        correctAnswer: "False",
        answerArray: ["False", "True"]
    },
    question3 = {
        question: "Variables in JavaScript can be defined using either?",
        correctAnswer: "All of thee above",
        answerArray: ["Var", "Let", "Const", "All of thee above"]
    },
    question4 = {
        question: "What is the tag used to link a JavaScript page in HTML?",
        correctAnswer: "<script scr>",
        answerArray: ["<link rel>", "<meta name>", "<script scr>", "<script type>"]
    },
    question5 = {
        question: "The _____ is a function in JavaScript which is used to print any message that needs to be displayed to the user?",
        correctAnswer: "console.log",
        answerArray: ["console.asst", "console.log", "console.collapsed", "console.logged"]
    },
    question6 = {
        question: "Javascript boolean are data type that take the value of _____?",
        correctAnswer: "All of thee above",
        answerArray: ["True or False", "Yes and No", "On and Off", "All of thee above"]
    },
    question7 = {
        question: "What are conditional statements in Javascript?",
        correctAnswer: "All of thee above",
        answerArray: ["if", "else", "else if", "All of thee above"]
    }
]



// Section variables


let highScore = [];

// sections id
const landingPage = document.getElementById("landingPage");
const questionPage = document.getElementById("questionPage");
const finalScorePage = document.getElementById("finalScorePage");

// Buttons variables
let tryAgain = document.getElementById("tryAgain");
let startButton = document.getElementById("startQuiz");
// Q&A variables
let answers = document.getElementById("answers");
let question = document.getElementById("question");


// Score variables
let scoreList = document.getElementById("scoreList");
let high_score = document.getElementById("high-score");
let textExample = document.getElementById("textExample");

startButton.addEventListener("click", startQuiz);


let timer = document.getElementById("timer")

let sectionArray = [landingPage, questionPage, finalScorePage];


function hidePages() {
    for (let i = 0; i < sectionArray.length; i++) {
        if (! sectionArray[i].classList.contains('hide')) {
            sectionArray[i].classList.add('hide');
        }
    }
}


function hideTimer() {
    if (! timer.classList.contains('hide')) {
        timer.classList.add('hide');
    }
}

let isQuizzing = false;
let quizTime = 60;
let secondsLeft;
timer.textContent = "Time: " + quizTime;
let questionIndex;
let finalScore = 0;
let numberCorrect;
let numberIncorrect;

function questionOrder(arr) {

  let arrIndex = [];
  for(let i=0; i < arr.length; i++) {
    arrIndex.push[i];

  }
  return arrayShuffle(arrIndex);

}

let questionArrayOrders;



function startQuiz() {
  numberCorrect =0;
  numberIncorrect =0;
  questionArrayOrder = questionOrder(questionContent);

  secondsLeft= quizTime;
  isQuizzing = true;
  questionIndex = 0;
  hidePages();
  questionPage.classList.remove('hide');

  //clear the question
  questionUpdate(questionContent);

  let timerInterval = setInterval(function() {
    secondsLeft --;
    timer.textContent ="Timer: " + secondsLeft;

    if (secondsLeft < 0 || !isQuizzing) {
      clearInterval(timerInterval);
      secondsLeft = quizTime;

      if (isQuizzing) {
        finalScore =0;
        //back on Initial page function
      }

    }
  }, 1000);
}






function arrayShuffle(arr) {
  return arr.sort(() => Math.random() -0.5);
}

function questionUpdate(array, index) {

  //question.textContent = array[index].question;

  let ans;
  let but;
  let currentAnswerArray = arrayShuffle(array[index].answerArray);

  for(let i=0; i < currentAnswerArray.length; i++) {

    ans = document.createElement('LI');
    but = document.createElement('button');

    ans.appendChild(but);

    but.textContent = i + 1 + "." + currentAnswerArray[i];

    ans.addEventListener("click", questionController);

    answers.appendChild(ans);
  }
}

function questionController(event) {

  if(event.target.textContent.substring(3) == questionContent[questionArrayOrders[questionIndex]].correctAnswer) {
    secondsLeft += 5;
    numberCorrect ++;
  } else {
    secondsLeft -= 5;
    numberCorrect --;
  }
  timer.textContent = "Timer: " + secondsLeft;
  
  //clear the questions function

  questionIndex++;
  if(questionIndex < questionContent.length) {
    questionUpdate(questionContent, questionArrayOrders[questionIndex]);
  }else {
    finalScore = secondsLeft;
    //open the initial page function
  }

}