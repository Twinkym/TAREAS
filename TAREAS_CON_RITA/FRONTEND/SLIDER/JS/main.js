import ImageItem from "../../../../TAREAS_CON_RITA/FRONTEND/SLIDER/JS/imageItem.js";
// Crear instancias de la clase.
const imagenes = [
    new ImageItem('../IMG/code-1.png', 'code-1', 'Meta Datos HTML'),
    new ImageItem('../IMG/code-2.png', 'code-2', 'Meta Datos HTML'),
    new ImageItem('../IMG/Elementos Web.jpg', 'Elementos Web', 'Elementos de una Web')
]

// Uso el método foreach para recorrer la matriz y registrar los detalles de cada imagen
imagenes.forEach((imageItem, index) => {
    console.log(`Imagen ${index + 1}`);
    console.log(`Ruta: ${imageItem.ruta}`);
    console.log(`Nombre: ${imageItem.nombre}`);
    console.log(`Descripción: ${imageItem.descripcion}`);
})

// Muestra el array completo de objetos.
console.log(imagenes);
