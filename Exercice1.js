/// Créer une fonction qui prend une liste de nombre, dans ce cas-ci l'âge d'une personne et qui retourne un array de ceux qui sont adulte

const personnes = [{ nom: 'Keven', age: 19 },{ nom: 'Roger', age: 21 },{ nom: 'Sylvain', age: 16 },{ nom: 'Jérome', age: 24 }];

function personnesAdultes(Personne) {
    const Adultes = [];
    for (let i = 0; i < Personne.length; i++) {
        if (Personne[i].age >= 18) {
            Adultes[Adultes.length] = Personne[i];
        }
    }
    return Adultes
}
console.log(personnesAdultes(personnes));