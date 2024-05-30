document.addEventListener('DOMContentLoaded', function () {

const PANTALLA = document.getElementById('output')

function escribir(caracter) {
    console.log(caracter);
    PANTALLA.innerHTML += caracter;
}

function limpiarPantalla() {
    PANTALLA.innerHTML = ("&#128228");
}

function limpiarCaracter() {
    let contenido = PANTALLA.innerHTML
    PANTALLA.innerHTML = contenido.substring(0, contenido.length - 1);
    // console.log(text)
}

})