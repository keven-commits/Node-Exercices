/// Créer une fonction qui va s’appele « Stats » qui prend une liste de nombre et qui retourne un objet qui retourne la moyenne, le plus haut, le plus bas et le nombre de résultat supérieur à 70%

const notes = [69, 78, 99, 91, 82, 75, 88, 87, 86, 40];

function stats(note) {
    const notePassante = [];
    let total = 0;
    let noteLaPlusHaute = 0;
    let noteLaPlusBasse = 100;
    for (let i = 0; i < note.length; i++) {
        total += note[i];
        if (noteLaPlusBasse >= note[i]) {
            noteLaPlusBasse = note[i];
        }
        if (noteLaPlusHaute <= note[i]) {
            noteLaPlusHaute = note[i];
        }
        if (note[i] >= 70) {
            notePassante[notePassante.length] = note[i];
        }
    }
    const moyenne = total / note.length;
    return {notePassante, noteLaPlusBasse, noteLaPlusHaute, moyenne};
}

const resultats = stats(notes);

console.log("La moyenne est de : ", resultats.moyenne)
console.log("La note la plus haute est de : ", resultats.noteLaPlusHaute)
console.log("La note la plus basse est de : ", resultats.noteLaPlusBasse)
console.log("Les notes suppérieures à 70% sont de : ", resultats.notePassante)
console.log("Hello World")
