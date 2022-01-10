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

//COUNTDOWN END
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time's up!"
    }
    }, 1000);
    console.log(countdown);



});



//Questions

