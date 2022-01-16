//Timer
var secondsLeft = 60;
var timerInterval;
function startTimer(){
timerInterval = setInterval(function() {
 secondsLeft --;
 timer.textContent =  "Your time: " + secondsLeft + " seconds";
        
    if (secondsLeft === 0) {
    clearInterval(timerInterval);
    quiz.style.display = "none";
    writeName.style.display = "inline";
            }
          }, 1000);
   return timerInterval;
    }   

//Questions
var question = document.querySelector(".question");
var q1 = "Where do you need to link stylesheets?"
var q2 = "What does HTML stand for?"
var q3 = "What does CSS stand for?"
var q4 = "Which of these is a string?"
var q5 = "What is CSS usually used for?"
var qs = [q1, q2, q3, q4, q5]


//Choices
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");


//Answers
var Answers1 = {
A: "<head>",
B: "<body>",
C: "<script>",
D: "<section>"
}

var Answers2 = {
A: "High Functioning Meta Language",
B: "Hyper Text Markup Language",
C: "Hyper Text Meta Language",
D: "Hyper Technical Markup Language"
}

var Answers3 = {
A: "Cascading Stylish Sealions",
B: "Cascading Super Sheets",
C: "Crazy Style Sheets",
D: "Cascading Style Sheets"
}

var Answers4 = {
A: "'number'",
B: "string",
C: "number",
D: "[string]"
}

var Answers5 = {
A: "Painting the html",
B: "Styling the html",
C: "Drawing the html",
D: "Sketching the html"
}

var answers = [Answers1, Answers2, Answers3, Answers4, Answers5]

//Correct Answers
var correct1 = Answers1.A;
var correct2 = Answers2.B;
var correct3 = Answers3.D;
var correct4 = Answers4.A;
var correct5 = Answers5.B;
var correctAnswersArray = [correct1, correct2, correct3, correct4, correct5]

//HTML elements that will be referenced
var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-quiz-btn");
var quiz = document.querySelector(".quiz");
var Result = document.querySelector("#correct-or-incorrect");
var writeName = document.querySelector(".writeName");
var saveButton = document.querySelector(".save-btn");
var highscoreSection = document.querySelector(".highscores-section");
var viewHighscores = document.querySelector("#scoreboard");

//Timer starts
startButton.addEventListener("click", startTimer)

//Show quiz questions with the choices
startButton.addEventListener("click", function(){
    document.querySelector(".main").style.display = "none";
    quiz.style.display = "block";
    })
startButton.addEventListener("click", goToNextQuestion)
var qaIndex = 0;  

//Go to next Question 
function goToNextQuestion(){

//If finished, the user will be able to save their details
if (qaIndex === qs.length - 1) {
    setTimeout(function(){quiz.style.display = "none";
    writeName.style.display = "inline";
}, 500);

//Time's up
    setTimeout(function(){clearInterval(timerInterval)}, 500);

//Go to next question
} else {
    question.textContent = qs[qaIndex];
    choice1.textContent = answers[qaIndex].A;
    choice2.textContent = answers[qaIndex].B;
    choice3.textContent = answers[qaIndex].C;
    choice4.textContent = answers[qaIndex].D;
}
}

//Was the question correct?
quiz.addEventListener("click", determineCorrectAnswer)

//Correct Answer
function determineCorrectAnswer(event){
if(event.target.matches(".btn-choice")){
    var chosenAnswer = event.target.textContent;
    Result.textContent = " ";
    Result.style.display = "block";
        if (chosenAnswer === correctAnswersArray[qaIndex]){
            Result.textContent = "Well done!";
            setTimeout(function(){ Result.style.display = "none"}, 500);
        } else {
            Result.textContent = "That's incorrect..."
            setTimeout(function(){ Result.style.display = "none"}, 500);
            secondsLeft -= 10;
            timer.textContent =  "Your time: " + secondsLeft + " seconds";
        }
        qaIndex++;
}
return secondsLeft;
};

//Go to next question
quiz.addEventListener("click", function(event){
if(event.target.matches(".btn-choice")){
    goToNextQuestion();
}})


//SCORES

//Save
saveButton.addEventListener("click", function(event){
event.preventDefault();
//Record
newUser();        
//Show scores
    writeName.style.display = "none";
    document.querySelector(".highscores-section").style.display = "block";
    document.querySelector(".user-scores").style.display = "block";
})


//Save Results
function newUser() {
var userName = document.querySelector("#name").value;
if (userName === "") {
userName = "";
} 
document.querySelector(".user-scores").textContent = " ";
var p = document.createElement("p");
p.textContent = userName + " : " + secondsLeft + " points";
document.querySelector(".user-scores").appendChild(p);    

}

//Clear highscore
document.querySelector(".refresh").addEventListener("click", function(){
localStorage.clear();
document.querySelector(".user-scores").textContent = " ";
document.querySelector(".user-scores").style.display = "none";
});


//View scoreboard
viewHighscores.addEventListener("click", function(){
clearInterval(timerInterval);
document.querySelector(".main").style.display = "none";
quiz.style.display = "none";
writeName.style.display = "none";
highscoreSection.style.display = "block";


//The stored scores
document.querySelector(".user-scores").textContent = " ";
for (let i = 0; i< localStorage.length; i++) {
    var p = document.createElement("p");
    var user = localStorage.key(i);
    var scores = localStorage.getItem(localStorage.key(i));
    p.textContent = user + ": " + scores;
    document.querySelector(".user-scores").appendChild(p);}
})


//Start the quiz again
document.querySelector(".try-again").addEventListener("click", function(){
correctIndex = 0;
secondsLeft = 60;
timer.textContent =  "Your time: 60";
document.querySelector(".main").style.display = "block";
highscoreSection.style.display = "none";
})
