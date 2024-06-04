import { startGame, cancelGame, resetGame } from "./controller/wordController";

document.getElementById("btnJugar").onclick = () => {
    const difficulty = parseInt(document.getElementById('edad').value);
    startGame(difficulty);
}

document.getElementById("btnCancelar").onclick = cancelGame;
document.getElementById("btnReset").onclick = resetGame;
document.getElementById()

window.updateAge = (value) => {
    document.getElementById('edad').value = value;
}