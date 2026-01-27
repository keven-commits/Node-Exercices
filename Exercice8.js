/// Créer une Fonction qui prend une liste de mots et qui retourne une liste de liste groupée par la longueur des mots (8 lettres ensemble dans une liste, 7 ensemble etc.)

const mots = ['Keven', 'Roger', 'Sylvain', 'Jérome', 'Anticonstitutionnellement'];

function classerMots(Mot) {
    const resultat = {};
    for (let i = 0; i < Mot.length; i++) {
        const longueur = Mot[i].length;
        if (!resultat[longueur]) {
            resultat[longueur] = [];
        }
        resultat[longueur][resultat[longueur].length] = Mot[i];
    }
    return resultat;
}

console.log(classerMots(mots));
