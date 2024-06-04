import { alfabeto, getRandomWord} from '../model/wordGenerator';
import { displayWord, displayErrors, displayMessage, renderButtons } from '../view/wordView';

let currentErrors = 0;

function startGame(difficulty) {
    if (difficulty !== 0) {
        renderButtons(alfabeto, handleLatterClick);
        document.getElementById("btnJugar").setAttribute('disabled', 'disabled');
        const word = getRandomWord(difficulty);
        displayWord(word);
        displayErrors(currentErrors);
        displayMessage("Eres un abejorro!!");
    } else {
        displayMessage("OH! no!, cancelaste!!!");
    }
}

function cancelGame() {
    displayMessage("OH! no!, cancelaste!!!");
}

function handleLetterClick(letter) {
    alert(letter);
}

function resetGame() {
    currentErrors = 0;
    location.reload();
}

export { startGame, cancelGame, handleLetterClick, resetGame};