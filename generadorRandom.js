function generateRandomWord(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        word += characters[randomIndex];
    }
    return word;
}

function classifyWordsByDifficulty(words) {
    const easy = [];
    const medium = [];
    const hard = [];

    words.forEach(word => {
        if (word.length <= 4) {
            easy.push(word);
        } else if (word.length <= 7) {
            medium.push(word);
        } else {
            hard.push(word);
        }
    });
    return { easy, medium, hard };
}

// Generar una lista de palabras aleatorias.
const numWords = 30;
const maxWordLength = 10;
const words = [];

for (let i = 0; i < numWords; i++) {
    const randomLength = Math.floor(Math.random() * maxWordLength) * 1;
    words.push(generateRandomWord(maxWordLength));
}

// Clasificar las palabras por dificultad.
const { easy, medium, difficult} = classifyWordsByDifficulty(words);

// Mostrar resultados.
console.log("Dificultad facil: ", easy);
console.log("Dificultad media: ", medium);
console.log("Dificultad Hard: ", hard);


