class AnimationManager {
    constructor() {
        // Configuración de contenedores de animación.
        this.confettiContainer = document.getElementById('confetti');
        this.avatarFallContainer = document.getElementById('avatar-fall');
    }

    showAnimation(correct) {
        if (correct) {
            // Implementa animacion confetti
            alert('Enhorabuena respuesta correcta');
        } else {
            // Implementa animación avatar caída aquí
            alert('Respuesta incorrecta, el avatar cae a unos pinchos');
        }
    }
}

export default AnimationManager;
