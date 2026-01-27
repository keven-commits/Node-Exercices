/// Créer une fonction qui prend une liste de nombre, dans ce cas-ci l'âge d'une personne et qui retourne un array de ceux qui sont adulte

//https://www.w3schools.com/js/js_array_methods.asp
const ages = [19, 21, 16, 24, 15, 18, 17, 30];

function personnesAdultes(ages) {
    const major = []
    ages.forEach(age => {
        if (age >= 18) {
            major.push(age)
        }
    })

    return major
}
console.log(personnesAdultes(ages));