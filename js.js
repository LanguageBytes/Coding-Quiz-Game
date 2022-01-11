//COUNTDOWN START
document.getElementById("start").addEventListener("click", function(){
    var timeleft = 60;
    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft;
    timeleft -= 1;

//Questions appear
    var siteTitles = document.querySelectorAll("#Questions")
    for (var i = 0; i < siteTitles.length; i++) {
        siteTitles[i].setAttribute("style", "display:block");
      }

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
  
];


//Radio buttons to be created.
// 

//COUNTDOWN END
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time's up!"
        //stop test and ask them restart or see results. if restart, display first page, if not show results page.
    }
    }, 1000);
    console.log(countdown);



});



//Questions

