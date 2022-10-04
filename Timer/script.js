/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                    Timer                                   */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let temps = 0;
let minutes = 0;
let secondes = 0;

function start() {
    temps = setInterval(function() {
        secondes++;
        if(secondes == 60) {
            minutes++;
            secondes = 0;
        }
        secondes = secondes < 10 ? "0" + secondes : secondes;
        document.getElementById("timer").innerHTML = minutes + ":" + secondes;
    }, 1000);
    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }
    document.getElementById("timer").style.color = "#4CAF50";
}

function stop() {
    clearInterval(temps);
    document.getElementById("timer").style.color = "#d71a1a";
}

function reset() {
    clearInterval(temps);
    minutes = 0;
    secondes = 0;
    document.getElementById("timer").innerHTML = "0:00";
    document.getElementById("timer").style.color = "black";
}