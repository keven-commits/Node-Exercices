/// Créer une fonction qui prend une liste de nombre et qui retourne la somme

const nombres = [18, 25, 72, 105];

function somme(Nombre) {
    let Somme = 0;
    for (let i = 0; i < Nombre.length; i++) {
        Somme += Nombre[i]
    }
    return Somme
}
console.log(somme(nombres));