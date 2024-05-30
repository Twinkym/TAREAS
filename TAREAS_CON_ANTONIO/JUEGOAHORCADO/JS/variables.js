
let palabra = document.getElementById('palabra');
let errores = document.getElementById('errores');
let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"


const facil = ['casa', 'perro', ];
const medio = ['casa', 'perro', 'gato', 'pato'];
const dificil = ['casa', 'perro', 'gato', 'pato',];

function PintarBtn() {
    for(letra of alfabeto){
        let letras = document.getElementById('letras');
        letras.innerHTML += '<button class="myletra" onclick="Pulsar(\''+letra+'\')">'+letra+'</button>';
        console.log(letra);
    }
}

function Pulsar(valor) {
    alert(valor);
}

PintarBtn();