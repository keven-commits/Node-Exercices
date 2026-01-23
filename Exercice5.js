/// Créer une fonction qui s’appele « remove duplicate » qui prend une array de nombre et qui remove les duplicate et qui retourne l’array avec les nombre restant

const nombres = [10, 5, 10, 20, 51, 5];

function removeDuplicate(nombre) {
    const nombreRestant = [];
    for (let i = 0; i < nombre.length; i++) {
        ajouterSiAbsent(nombre[i], nombreRestant)
    }
    return nombreRestant;
}

function ajouterSiAbsent(valeur, tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === valeur) {
            return; 
        }
    }
    tableau[tableau.length] = valeur;
}
console.log(removeDuplicate(nombres));
