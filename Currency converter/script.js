/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                Convertisseur                               */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function convert() {
    let dev = document.getElementById("devise-select").value;
    let dev2 = document.getElementById("devise-select2").value;
    if(dev == "" || dev2 == "") {
        alert("Veuillez choisir une devise pour convertir");
    }
    else {
        let montant = document.getElementById("montant").value;
        switch(dev) {
            case "eur":
                switch(dev2) {
                    case "eur":
                        montant = montant;
                        break;
                    case "usd":
                        montant = montant * 1.05;
                        break;
                    case "gbp":
                        montant = montant * 0.86;
                        break;
                    case "cad":
                        montant = montant * 1.36;
                        break;
                }
                break;
            case "usd":
                switch(dev2) {
                    case "eur":
                        montant = montant * 0.94;
                        break;
                    case "usd":
                        montant = montant;
                        break;
                    case "gbp":
                        montant = montant * 0.81;
                        break;
                    case "cad":
                        montant = montant * 1.29;
                        break;
                }
                break;
            case "gbp":
                switch(dev2) {
                    case "eur":
                        montant = montant * 1.16;
                        break;
                    case "usd":
                        montant = montant * 1.22;
                        break;
                    case "gbp":
                        montant = montant;
                        break;
                    case "cad":
                        montant = montant * 1.59;
                        break;
                }
                break;
            case "cad":
                switch(dev2) {
                    case "eur":
                        montant = montant * 0.73;
                        break;
                    case "usd":
                        montant = montant * 0.77;
                        break;
                    case "gbp":
                        montant = montant *0.63;
                        break;
                    case "cad":
                        montant = montant;
                        break;
                }
                break;
        }
        montant = montant.toString();
        switch(dev2) {
            case "eur":
                montant = montant.concat("€");
                break;
            case "usd":
                montant = montant.concat("$");
                break;
            case "gbp":
                montant = montant.concat("£");
                break;
            case "cad":
                montant = montant.concat("$");
                break;
        }
        document.getElementById("resultatConvert").innerHTML = montant;
    }
}