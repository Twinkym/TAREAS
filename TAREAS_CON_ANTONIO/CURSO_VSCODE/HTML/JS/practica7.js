const provi = ['Barcelona', 'Lléida', 'Girona', 'Tarragona'];
const tgn = ['Reus', 'Tarragona', 'Salou'];
const bcn = ['Hostpitalet', 'Barcelona', 'Gavá'];
const gi = ['Girona', 'Begú', 'Tosa de Mar'];
const Llei = ['Lleida', 'Les Borges Blangues', 'Balaguer'];


var sel1 = document.getElementById('sel1');
var sel2 = document.getElementById('sel2');
var res = document.getElementById('res');
sel1.innerHTML = "<OPTION></OPTION>";


for (i = 0; i < provi.length; i++) {

    sel1.innerHTML += '<option value="' + i + '">' + provi[i] + '</option>';

}

sel1.addEventListener('change', function () {
    switch (sel1.value) {
        case '0':
            sel2.innerHTML = "<OPTION></OPTION>";
            let f = 0;
            for (pobla of bcn) {
                sel2.innerHTML += '<option value="' + f + '">' + pobla + '</option>';
                f++;
            }
            break;
        case '1':
            let k = 0;
            sel2.innerHTML = "<option></option>";
            for (pobla of gi) {
                sel2.innerHTML += '<option value="' + k + '" >' + pobla + '</option>';
            }
            break;
        case '2':
            let l = 0;
            sel2.innerHTML = '<option></option>';
            for (pobla of llei) {
                sel2.innerHTML += '<option value="' + l + '">' + pobla + '</option>';
            }
            break;
        case '3':
            let j = 0;
            sel2.innerHTML = "<OPTION></OPTION>";
            for (pobla of tgn) {
                sel2.innerHTML += '<option value="' + j + '">' + pobla + '</option>';
                j++;
            }
            break;
        default:
            res.innerHTML = '<div class="alert alert-danger">Falta elegir la província</div>';
            break;
    }
});



 