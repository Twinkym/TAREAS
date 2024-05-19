import Quiz from './Quiz.js';
import AnimationManager from './animationManager.js';

class quizUI {
    constructor() {
        this.quiz = new Quiz();
        this.questionContainer = document.getElementById('question-container');
        this.questionElement = document.getElementById('question');
        this.optionsContainer = document.getElementById('options');
        this.nextButton = document.getElementById('next-btn');
        this.scoreContainer = document.getElementById('score-container');
        this.scoreElement = document.getElementById('score');
        this.highscoresElement = document.getElementById('highscores');
        this.animationManager = new AnimationManager();

        this.nextButton.addEventListener('click', () => this.handleNextButton());
        this.loadQuestion();
    }

    loadQuestion() {
        const currentQuestion = this.quiz.getCurrentQuestion();
        this.questionElement.textContent = currentQuestion.question;
        this.optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = index;
            label.appendChild(input);
            label.append(option);
            this.optionsContainer.appendChild(label);
        });
        this.nextButton.classList.add('hidden'); // Para ocultar
    }

   handleNextButton() {
       const selectedOption = document.querySelector('input[name="option"]:checked');
       if (selectedOption) {
           const answer = parseInt(selectedOption.value, 10);
           const correct = this.quiz.checkAnswer(answer);
           this.animationManager.showAnimation(correct);

           if (this.quiz.hasMoreQuestions()) {
               this.quiz.nextQuestion();
               this.loadQuestion();
           } else {
               this.quiz.saveScore();
               this.questionContainer.classList.add('hidden');
               this.scoreContainer.classList.remove('hidden');
               this.updateScore();
               this.showHighScores();
           }
           // Asegurar que el botón "Siguiente" solo se muestra si hay más preguntas
           this.nextButton.classList.remove('hidden'); // Usar función remove() para eliminar la clase

       } else {
           alert('Por favor, selecciona una opción');
       }
   }



    updateScore() {
        this.scoreElement.textContent = `Puntuación: ${this.quiz.score}`;
    }

    showHighScores() {
        this.highscoresElement.innerHTML = '';
        this.quiz.highScores.forEach(score => {
            const li = document.createElement('li');
            li.textContent = score;
            this.highscoresElement.appendChild(li);
        });
    }
}

export default quizUI;
