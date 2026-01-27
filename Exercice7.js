/// Créer une fonction qui s’appele « FindClosest » qui prend 2 parametre, 1 : une liste de nombre 2 : une cible, la fonction va retourner les 2 chiffres les plus proche de la cible

const nombres = [100, 12, 171, 54, 57, 690, 117];
const cible = 16;

function findClosest(nombre, cible) {
    let closest1 = 100000;
    let closest2 = 100000;
    let difference = [];
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] - cible <= 0) {
            difference[difference.length] = cible - nombre[i];
        } else {
            difference[difference.length] = nombre[i] - cible;
        }
    }
    for (let i = 0; i < difference.length; i++) {
        if (closest1 >= difference[i]) {
            closest1 = nombre[i];
        }
/// bug ici
        if (closest2 >= difference[i] && closest2 !== closest1) {
            closest2 = nombre[i];
        } 
    }
    return [closest1, closest2]
}
console.log(findClosest(nombres, cible))