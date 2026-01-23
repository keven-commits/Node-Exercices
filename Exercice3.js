/// Créer une fonction qui prend des mots et qui retourne le mot le plus long

const mots = ['Keven', 'Roger', 'Sylvain', 'Jérome', 'Anticonstitutionnellement'];

function motLePlusLong(Mot) {
    let MotLePlusLong = "";
    for (let i = 0; i < Mot.length; i++) {
        if (MotLePlusLong.length < Mot[i].length) {
            MotLePlusLong = Mot[i];
        }
    }
    return MotLePlusLong
}
console.log(motLePlusLong(mots));