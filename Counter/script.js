/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                  Compteur                                  */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function add() {
    let text = document.getElementById("text").innerHTML;
    text++;
    document.getElementById("text").innerHTML = text;
}

function remove() {
    let text = document.getElementById("text").innerHTML;
    if(text > 0) {
        text--;
        document.getElementById("text").innerHTML = text;
    }
}

function resetCounter() {
    document.getElementById("text").innerHTML = 0;
}