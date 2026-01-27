/// Créer une Fonction qui s’appele « dessin diamant » qui fait en mode dinamique avec des boucles for

const largeur = 5;

function dessinDiamant(largeur) {
    let finale = "";
    for (let i = 0; i < largeur; i++) {
        for (let j = 0; j < largeur - i - 1; j++) {
            finale += " ";
        }
        finale += "*";

        if (i > 0) {
            for (let j = 0; j < 2 * i - 1; j++) {
                finale += " ";
            }
            finale += "*";
        }
        finale += "\n";
    }
    for (let i = largeur - 2; i >= 0; i--) {
        for (let j = 0; j < largeur - i - 1; j++) {
            finale += " ";
        }
        finale += "*";

        if (i > 0) {
            for (let j = 0; j < 2 * i - 1; j++) {
                finale += " ";
            }
            finale += "*";
        }

        finale += "\n";
    }
    return finale;
}



console.log(dessinDiamant(largeur));