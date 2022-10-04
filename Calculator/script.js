/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                Calculatrice                                */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
let chaine = "";
let nombre1 = 0;
let nombre2 = 0;
let resultat = 0;
let op = false;

function number(number) {
    chaine += number;
    if(op == false) {
        nombre1 = parseFloat(chaine);
    }
    else {
        nombre2 = parseFloat(chaine);
        switch(oper) {
            case "+":
                resultat = nombre1 + nombre2;
                nombre1 = resultat;
                break;
            case "-":
                resultat = nombre1 - nombre2;
                nombre1 = resultat;
                break;
            case "*":
                resultat = nombre1 * nombre2;
                nombre1 = resultat;
                break;
            case "/":
                resultat = nombre1 / nombre2;
                nombre1 = resultat;
                break;
        }
    }
    document.getElementById("resultat").innerHTML = chaine;
    console.log(nombre1);   // Affiche le nombre dans la console
    console.log(nombre2);   // Affiche le nombre dans la console
}

function operateur(operateur) {
    op = true;
    chaine = "";
    oper = operateur;
    if(operateur == "=") {
        document.getElementById("resultat").innerHTML = resultat;
    }
}

function remiseAZero() {
    op = false;
    chaine = "";
    nombre1 = 0;
    nombre2 = 0;
    resultat = 0;
    document.getElementById("resultat").innerHTML = "0";
}