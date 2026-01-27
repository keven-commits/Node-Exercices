/// Créer une Fonction comme l'Exercice4 (en string seulement) et qui reverse aussi la donnée en string (allo = olla)

const mots = ['Keven', 'Roger', 'Sylvain', 'Jérome', 'Anticonstitutionnellement'];

function ReversedArray(mot) {
    const reversed = [];
    for (let i = mot.length - 1; i >= 0; i--) {
        let motInverse = [];

        for (let j = mot[i].length - 1; j >= 0; j--) {
            motInverse += mot[i][j];
        }
        reversed[reversed.length] = motInverse
    }
    return reversed;
}

console.log(ReversedArray(mots));
