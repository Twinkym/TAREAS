function displayWord(word) {
    document.getElementById('palabra').innerHTML = word;
}

function displayErrors(errors) {
    document.getElementById('errores').innerHTML = errors;
}

function displayMessage(message) {
    document.getElementById('texto').innerHTML = message;
}

function renderButtons(letters, callback) {
    const container = document.getElementById('letras');
    container.innerHTML = '';
    letters.split('').foreach(letter => {
        const button = document.createElement('button');
        button.className = 'myletra';
        button.onclick = () => callback(letter);
        container.appendChild(button);
    });
}

export { displayWord, displayErrors, displayMessage, renderButtons};