import  ImageItem  from "./imageItem";

// Crear instancias de la clase.
const image1 = new ImageItem ('../IMG/code-1.png', 'code-1', 'Meta Datos HTML');
const image2 = new ImageItem ('../IMG/code-2.png', 'code-2', 'Meta Datos HTML');
const image3 = new ImageItem ('../IMG/Elementos Web.jpg', 'Elementos Web', 'Elementos de una Web');

// Crear un array de objetos
const images = [image1, image2, image3];


// Uso el método foreach para recorrer la matriz y registrar los detalles de cada imagen
images.foreach((imageItem, index) => {
    console.log(`Imagen ${index + 1}`);
    console.log(`Ruta: ${imageItem.ruta}`);
    console.log(`Nombre: ${imageItem.nombre}`);
    console.log(`Descripción: ${imageItem.descripcion}`);
})

// const image = new ImageItem('../IMG/code-2.png', 'code-2', 'En este codigo hay un pequeño error');
// const image3 = new ImageItem('../IMG/Elementos Web.jpg', 'Elementos Web', 'Elementos Web');
