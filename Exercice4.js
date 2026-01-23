/// Créer une fonction qui prend un array quelconque et qui retourne l’inverse de l’array (1er devient dernier, 2e devien avant dernier etc.)

const mots = ['Keven', 'Roger', 'Sylvain', 'Jérome', 'Anticonstitutionnellement'];

function ReversedArray(mot) {
    const reversed = [];
    for (let i = mot.length -1; i >= 0; i--) {
        reversed[reversed.length] = mot[i];
    }
    return reversed;
}

console.log(ReversedArray(mots));
