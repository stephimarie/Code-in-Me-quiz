let qa = [
    question1 =
    {
        question : "What is JavaScript?",
        correctAnsw: "A scripting or programming language",
        answerArray : ["A scripting or programming language", "A web page", "it displays static information", "All of thee above"]
    },
    question2 =
    {
        question : "JavaScript and Java are the same thing. True or False?",
        correctAnsw: "False",
        answerArray : ["False", "True"]
    },
    question3 =
    {
        question : "Variables in JavaScript can be defined using either?",
        correctAnsw: "All of thee above",
        answerArray : ["Var", "Let", "Const", "All of thee above"]
    },
    question4 =
    {
        question : "What is the tag used to link a JavaScript page in HTML?",
        correctAnsw: "<Script scr>",
        answerArray : ["<link rel>", "<meta name>", "<script scr>", "<script type>"]
    },
    question5 =
    {
        question : "The _____ is a function in JavaScript which is used to print any message that needs to be displayed to the user?",
        correctAnsw: "console.log",
        answerArray : ["console.asst", "console.log", "console.collapsed", "console.logged"]
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

