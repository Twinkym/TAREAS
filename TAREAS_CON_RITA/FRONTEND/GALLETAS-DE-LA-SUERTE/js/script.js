function mostrarMensaje() {
    const mensajes = [
        "Si tú sabes lo que vales, ve y consigue lo que mereces.<br><em>Rocky Balboa</em>.", //0
        "Por muy alta que sea una montaña, siempre hay un camino hacia la cima.<br><em>Anónimo</em>.", //1
        "El triunfo verdadero del hombre surge de las cenizas del error.<br><em>Pablo Neruda</em>.", //2
        "Lo único imposible es aquello que no intentas.<br><em>Anónimo</em>.", //3
        "El 80% del éxito se basa simplemente en insistir.<br><em>Woody Allen</em>.", //4
        "Nunca pares, nunca te conformes, hasta que lo bueno sea mejor y lo mejor excelente.<br><em>Anónimo</em>.", //5
        "Cuanto más hacemos, más podemos hacer.<br><em>William Hazlitt</em>.", //6
        "Da siempre lo mejor que tienes. Lo que plantes ahora, lo cosecharás más tarde.<br><em>Og Mandino</em>.", //7
        "La tragedia no es no alcanzar tus objetivos, la tragedia es no tener objetivos que alcanzar.<br><em>Benjamin Mays</em>.", //8
    ]
    console.log("Número de mensajes", mensajes.length);

    //lenght devuelve el largo del array
    // El último mensaje lo agregaremos con el método push
    mensajes.push("El éxito no está en vencer siempre sino en no desanimarse nunca.<br><em>Napoleón Bonaparte</em>.") //9

    console.log("Número de mensajes después de push", mensajes.length);
    console.table(mensajes);

    const NUM_MENSAJES = mensajes.length;

    let numRandom = Math.floor(Math.random() * NUM_MENSAJES);
    // Devuelve un número entre 0 y 9 

    console.log("numRandom", numRandom);
    document.getElementById("mensaje").innerHTML = mensajes[numRandom];
    document.getElementById("galleta").src = "/img/galletas2.png";
    document.getElementById("msj").disabled = true;

}

function recargar() {
    location.reload();
}