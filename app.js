let qa = [
    question1 =
    {
        question : "What is JavaScript?",
        correctAnsw: "A scripting or programming language",
        answerArray : ["A scripting or programming language", "A web page", "it displays static information", "All of thee above"]
    },
    question2 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
    },
    question3 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
    },
    question4 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
    },
    question5 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
    },
    question6 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
    },
    question7 =
    {
        question : "Where does Stephanie lives?",
        correctAnsw: "Pasadena",
        answerArray : ["Pasadena", "Studio City", "Hollywood", "Glendale"]
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
let questions = document.getElementById("questions");
let answers = document.getElementById("answers");
//Score variables
let scoreList = document.getElementById("scoreList");
let finalScore = document.getElementById("finalScore");
let textExample = document.getElementById("textExample");
//time variable
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

