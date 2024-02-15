const quizQuestions = [
    {
        question: 'Commonly used data types DOES NOT include:',
        options: [ 'strings', 'booleans', 'alerts', 'numbers'],
        answers: 'alerts'
    },
    {
        question: 'The condition in an if / else statement is enclosed within _______:',
        options: [ 'quotes', 'curly btackets', 'parenthese', 'square brackets'],
        answers: 'alerts'
    },
    {
        question: 'Arrays in JavaScript can be used to store _______:',
        options: [ 'numbers and strings', 'booleans', 'other arrays', 'all of the above'],
        answers: 'alerts'
    },
    {
        question: 'String values must be enclosed with _____ when being assigned to variables:',
        options: [ 'commas', 'curly brackets', 'quotes', 'parentheses'],
        answers: 'alerts'
    },
    {
        question: 'Commonly used data types DOES NOT include:',
        options: [ 'strings', 'booleans', 'alerts', 'numbers'],
        answers: 'alerts'
    },     
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const playAgainButton = document.getElementById('playAgain');
const showAnswerButton = document.getElementById('showAnswer');

var currentQuestion = 0;
var score = 0;
var incorrectAnswers = 0;


var startQuizEl = document.getElementById("startQuiz")

var welcomeEl = document.getElementById("welcome")
var quizEl = document.getElementById("quiz")
var resultEl = document.getElementById("result")
var optionsEl = document.getElementById("options")
var messageEl = document.getElementById("message")
var timerEl = document.getElementById("timer")
var summaryEl = document.getElementById("summary")

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;

var countdownTimer;
function stopGame() {

    clearInterval(countdownTimer);

    timerEl.textContent = ""

    quizEl.style.display = 'none';
    resultEl.style.display = 'flex'

    summaryEl.textContent = "Your Score is: " + score;

}

function onSelectAnswer(e) {

    var correctAnswer = questions[currentQuestion].answer;

    var userAnswer = e.target.textContent;

    if (correctAnswer === userAnswer) {
        score++;
        dispalyMessage('correct answer!')
    }
    else {
        dispalyMessage('wrong answer!')
        secondsLeft -= 10;
    }
}

function dispalyMessage (msg) {
    messageEl.textContent = msg;

}

function displayQuestion () {

    currentQuestion++;

    console.log('current question is '+ currentQuestion);

    if (currentQuestion >=questions.length) {
        stopGame();
        return;
    }

    var question = questions[currentQuestion];
}

function onStartGame()
{

    secondsLeft = 75;

    score= 0;

    countdownTimer = setInterval(function ()) {
        if (secondsLeft > 0) {
            timerEl.textContent = secondsLeft;
        } else {

            stopGame();
        }
    }
}

startQuiz.addEventListener("click", onStartGame);