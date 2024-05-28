// Define variables.
const provincia = ['Barcelona', 'Lléida', 'Girona', 'Tarragona'];
const poblaciones = ['Reus', 'Tarragona', 'Salou'];
const capitales = ['Tarragona', 'Barcelona', 'Lléida', 'Girona'];

 let sec1 = document.getElementById('seccion1');
 let imp1 = document.getElementById('inp-1');
 
 imp1.onchange = function () {
    let dato = sel1.provi;
    alert(dato)
 }

 sec1.style.backgroundColor = "pink";
 sec1.innerHTML = "<h2>hola</h2>";
 sec1.innerHTML += "<p>oofjefuofnfjneojeoneoneo</p>";

 function Pintar(campana, num) {
     alert(campana);
 }

// Create a functions
// function showVill() {
//     let provincia;
//     // Obtenemos el valor de la provincia seleccionada.
//     provincia = document.formularioDinamico.provincia[document.formularioDinamico.provincia.selectIndex].value;

//     // Check if provincia is defined.
//     if (provincia!=0) {
        
//     }
// }

let sel1 = document.getElementById('sel1');
let sel2 = document.getElementById('sel2');
sel1.innerHTML = "<option></option>";
sel2.innerHTML = "<option></option>";

for (i = 0; i < provi.length; i++) {
    sel1.innerHTML += '<option value="'+i+'">'+provi[i]+'</option>';
    console.log(provi[i]);
    alert(provi[i]);
}

