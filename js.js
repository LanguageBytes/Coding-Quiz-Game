//COUNTDOWN START!
document.getElementById("start").addEventListener("click", function(){
    var timeleft = 60;
    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft;
    timeleft -= 1;
    console.log ("game has started")


//Questions appear
    var showgame = document.querySelectorAll("#game")
    for (var i = 0; i < showgame.length; i++) {
        showgame[i].setAttribute("style", "display:block");
    }

//Begin Game is hidden
    let hidebutton = document.getElementById("start").setAttribute("style", "display:none")
    if (showgame) {
    hidebutton} ;
  
//COUNTDOWN END!
 if(timeleft <= 0){
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "Time's up!"
  //stop test and ask them restart or see results. if restart, display first page, if not show results page.)
    }}, 1000);
console.log(countdown);



});
// Questions, options, and answers
var Questions = [
    {
    qnumber: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Making Language",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Layouts",
    ]
  },
    {
    qnumber: 2,
    question: "What is CSS mainly used for?",
    answer: "Style",
    options: [
      "",
      "",
      "Animation",
    ]
  },

  {
    qnumber: 3,
    question: "What is Java",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  

//Radio buttons to be created.
// 
  
];


//Questions

