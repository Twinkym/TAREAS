let palabra = document.getElementById('palabra');
let errores = document.getElementById('errores');
let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"


const facil = ['casa', 'perro', 'mono', ];
const medio = ['casa', 'perro', 'gato', 'pato'];
const dificil = ['casa', 'perro', 'gato', 'pato', ];

function Comenzar() {
    let categoria = document.getElementById('categoria').value;
    let array = eval(categoria.split('  '));
    secreta = array[Math.floor(Math.random()) * array.length].toUpperCase() + array.slice;

    if (edad.value != 0) {
        PintarBtn();
        document.getElementById("btnJugar").setAttribute('disabled', 'disabled');
        let dif = edad.value;
        if (dif >= 3 && dif <= 14) {
            palabra.innerHTML = facil[Math.floor(Math.random() * facil.length)];
            errores.innerHTML = "Número de errores: " + 0;
        } else if (dif >= 15 && dif <= 18) {
            palabra.innerHTML = medio[Math.floor(Math.random() * medio.length)];
            errores.innerHTML = "Número de errores: " + 0;
        } else if (dif >= 19) {
            palabra.innerHTML = dificil[Math.floor(Math.random() * dificil.length)];
            errores.innerHTML = "Número de errores:" + 0;
        }
        txt.innerHTML = "Eres un abejorro!!";
    } else {
        txt.innerHTML = "OH! no!, cancelaste!!!";
    }
    document.getElementById("texto").innerHTML = txt;
}

function Cancelar() {
    txt.innerHTML = "OH! no!, cancelaste!!!";
}

function PintarBtn() {
    for (letra of alfabeto) {
        let letras = document.getElementById('letras');
        letras.innerHTML += '<button class="myletra" onclick="Pulsar(\'' + letra + '\')">' + letra + '</button>';

        console.log(letra);
    }
}

function Pulsar(valor) {
    alert(valor);
}

function Reset() {
    location.reload();
}