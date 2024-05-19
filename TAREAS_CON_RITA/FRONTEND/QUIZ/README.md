# Quiz de FrontEnd

Este proyecto es un quiz de FrontEnd implementado con HTML, CSS, JavaScript, siguiendo el principio de responsabilidad única y el patron singleton.

## Estructura de Archivos

quiz-app/
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── main.js
│ ├── Quiz.js
│ ├── QuizUI.js
│ └── AnimationManager.js
└── README.md

## Descripción de Archivos

 -`ìndex.html`: El archivo HTML principal que contiene la estructura del quiz.
 -`css/styles.css`: El archivo CSS que contiene las reglas de estilo para el sitio web.
 -`JS/main.js`: Punto de entrada de JavaScript que inicializa la UI del quiz.
 -`JS/quiz.js`: Clase `quiz` que maneja la lógica del quiz.
 -`JS/quizUI.js`: Clase `quizUI` que maneja la interfaz de usuario del quiz.
 -`JS/animationManager.js`: Clase animationManager que maneja las animaciones segun respuesta.

## Instalación

 1. Clona este repositorio en tu maquina local.
 2. Abra el archivo `index.html` en su navegador web preferido.

## Uso

 1. Selecciona una opción para cada pregunta.
 2. Haz click en el boton "Siguiente" para validar tu respuesta y pasar a la siguiente pregunta
 3. Al final del quiz, se mostrará tu puntuación y las diez mejores puntuaciones almacenadas localmente

## Principio de Responsabilidad Única

 Cada clase en el proyecto tiene una única responsabilidad:

- `quiz`: Maneja la logica del quiz (preguntas, respuestas, punutuación).
- `quizUI`: Maneja la interfaz de usuario del quiz.
- `animationManager`: Maneja las animaciones segun respuesta correcta e incorrecta.

## Patron Singleton

- La clase `quiz` sigue el patròn Singleton para asegurarse que solo exista una instancia de la clase
    a lo largo de la aplicación.

## Contribuciones

- Las contribuciones son bienvenidas. Sientete libre de abrir issues y pull requests.

## Licencia

- Este proyecto está bajo licencia MIT.
