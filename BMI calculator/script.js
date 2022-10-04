/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                     IMC                                    */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function calculerIMC() {
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    let imc = poids / (taille * taille);
    imc = imc.toPrecision(3);
    document.getElementById("imc").innerHTML = imc;
}