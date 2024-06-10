// Función para alternar la visibilidad del menú
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Función para mostrar las estadísticas del jugador
function showStats() {
    alert("Estadísticas del jugador");
}

// Función para generar la barra de navegación
function generateNavbar() {
    const navbar = document.getElementById('navbar');

    const navLeft = document.createElement('div');
    navLeft.className = 'nav-left';
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerText = '☰';
    menuBtn.onclick = toggleMenu;
    navLeft.appendChild(menuBtn);

    const menu = document.createElement('div');
    menu.className = 'menu';
    menu.id = 'menu';
    const nivel = document.createElement('a');
    nivel.href = '#';
    nivel.innerText = 'Nivel';
    const tema = document.createElement('a');
    tema.href = '#';
    tema.innerText = 'Tema';
    menu.appendChild(nivel);
    menu.appendChild(tema);

    const navCenter = document.createElement('div');
    navCenter.className = 'nav-center';
    const title = document.createElement('h1');
    title.innerText = 'Wordle';
    navCenter.appendChild(title);

    const navRight = document.createElement('div');
    navRight.className = 'nav-right';
    const statsBtn = document.createElement('button');
    statsBtn.className = 'stats-btn';
    statsBtn.innerText = 'Estadísticas';
    statsBtn.onclick = showStats;
    navRight.appendChild(statsBtn);

    navbar.appendChild(navLeft);
    navbar.appendChild(menu);
    navbar.appendChild(navCenter);
    navbar.appendChild(navRight);
}

// Función para generar los campos de entrada de letras
function generateInputs() {
    const gameContainer = document.getElementById('game-container');
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${i}`;
        row.style.display = i === 0 ? 'flex' : 'none';
        for (let j = 0; j < 5; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = '1';
            input.className = 'letter-input';
            row.appendChild(input);
        }
        gameContainer.appendChild(row);
    }
    const checkButton = document.createElement('button');
    checkButton.innerText = 'Comprobar';
    checkButton.onclick = checkGuess;
    gameContainer.appendChild(checkButton);
}

// Función para comprobar la palabra ingresada por el jugador
function checkGuess() {
    // Implementa la lógica para comprobar la palabra ingresada
    // Por ahora, solo muestra la siguiente fila de entrada
    const rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].style.display === 'flex' && i < rows.length - 1) {
            rows[i + 1].style.display = 'flex';
            break;
        }
    }
}

// Inicialización del juego al cargar la página
window.onload = function() {
    generateNavbar();
    generateInputs();
};
