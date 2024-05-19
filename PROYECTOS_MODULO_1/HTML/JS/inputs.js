 function mostrar() {
     //Etiquetas a las cuales se les lee el valor
     //  Etiquetas para Texto
     document.getElementById("sTexto").innerHTML = document.getElementById("texto").value;

     document.getElementById("sNumero").innerHTML = document.getElementById("number").value;
     document.getElementById("sPassword").innerHTML = document.getElementById("password").value;
     document.getElementById("sMail").innerHTML = document.getElementById("email").value;
     document.getElementById("sRange").innerHTML = document.getElementById("range").value;
     document.getElementById("stel").innerHTML = document.getElementById("telefono").value;
     document.getElementById("sEnlace").innerHTML = document.getElementById("enlace").value;
     document.getElementById("sBuscar").innerHTML = document.getElementById("buscar").value;
     document.getElementById("sArchivo").innerHTML = document.getElementById("archivo").value;
     document.getElementById("sColor").innerHTML = document.getElementById("color").value;
     document.getElementById("sOculto").innerHTML = document.getElementById("Oculto").value;


     document.getElementById("sFecha").innerHTML = document.getElementById("fecha").value;
     document.getElementById("sFechaLocal").innerHTML = document.getElementById("fechaLocal").value;
     document.getElementById("sHora").innerHTML = document.getElementById("hora").value;
     document.getElementById("sMes").innerHTML = document.getElementById("mes").value;
     document.getElementById("sSemana").innerHTML = document.getElementById("semana").value;
     document.getElementById("sTextArea").innerHTML = document.getElementById("textArea").value;

     document.getElementById("sSeleccion").innerHTML = document.getElementById("seleccion").value;
     document.getElementById("sDataList").innerHTML = document.getElementById("DataList").value;

     //Checkbox. Si está checada devuelve true, si no, devuelve false 
     document.getElementById("sCheca").innerHTML = document.getElementById("checa").checked;

     //En el caso de las opciones hay que leer el pseudo elemento checked de entre todas
     document.getElementById("sOpciones").innerHTML = document.querySelector("input[name='opciones']:checked").value;
 }