const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const facil = ['casa', 'perro', 'mono'];
const medio = ['gato', 'raton', 'pato'];
const dificil = ['elefante', 'hipopotamo', 'ornitorrinco'];

function getRandomWord(difficulty){
    let wordList;
    let dif = edad.value;
    if (dif >= 3 && dif <= 14) {
        wordList = facil;
    } else if (dif >= 15 && dif <= 18) {
        wordList = medio;
    } else {
        wordList = dificil;
    }
    return wordList[Math.floor(Math.random() * wordList.length)];
}

export { alfabeto, getRandomWord};