/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                  Chifoumi                                  */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function chifoumi(signe) {
    let monSigne = "";
    let Vous = "";
    var Machine;
    var Gagné;
    switch(signe) {
        case 'f':
            monSigne = "You : Paper 📝";
            Vous = "Paper 📝";
            break;
        case 'p':
            monSigne = "You : Rock &#129704;";
            Vous = "Rock &#129704;";
            break;
        case 'c':
            monSigne =  "You : Scissors ✂️";
            Vous = "Scissors ✂️";
            break;
    }
    document.getElementById("signe1").innerHTML = monSigne;
    Machine = genererSigne();
    document.getElementById("signe2").innerHTML = "Computer : " + Machine;
    if(Vous == "Paper 📝") {
        if(Machine == "Rock &#129704;") {
            Gagné = true;
        }
        else {
            Gagné = false;
        }
    }
    else if(Vous =="Rock &#129704;") {
        if(Machine == "Scissors ✂️") {
            Gagné = true;
        }
        else {
            Gagné = false;
        }
    }
    else {
        if(Machine == "Paper 📝") {
            Gagné = true;
        }
        else {
            Gagné = false;
        }
    }
    if(Machine == Vous) {
        document.getElementById("message").innerHTML = "Tie 🥸";
    }
    else if (Gagné == true) {
        document.getElementById("message").innerHTML = "Win 😁";
    }
    else {
        document.getElementById("message").innerHTML = "Lose 😭";
    }
}

function genererSigne() {
    let nombre = randomInteger(1,3);
    let signe = "";
    switch(nombre) {
        case 1:
            signe = "Paper 📝";
            break;
        case 2:
            signe = "Rock &#129704;";
            break;
        case 3:
            signe = "Scissors ✂️";
            break;
    }
    return signe;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}