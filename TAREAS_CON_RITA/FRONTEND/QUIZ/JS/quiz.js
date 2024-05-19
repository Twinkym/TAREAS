class Quiz {
    constructor() {
        if (Quiz.instance) {
            return Quiz.instance;
        }

        this.questions = [{
                question: "¿Cuál es el propósito de la etiqueta <canvas> en HTML5?",
                options: [
                    "A. Crear tablas.",
                    "B. Dibujar gráficos.",
                    "C. Crear formularios.",
                    "D. Mostrar videos."
                ],
                answer: 1
            },
            {
                question: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
                options: [
                    "A. push()",
                    "B. pop()",
                    "C. shift()",
                    "D. unshift()"
                ],
                answer: 0
            },
            {
                question: "¿Cuál es el significado de 'HTML'?",
                options: [
                    "A. HyperText Markup Language",
                    "B. HomeTool Markup Language",
                    "C. Hyperlinks and Text Markup Language",
                    "D. None of the above"
                ],
                answer: 0
            }
        ];

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        Quiz.instance = this;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer) {
        const currentQuestion = this.getCurrentQuestion();
        if (currentQuestion.answer === answer) {
            this.score++;
            return true;
        } else {
            return false;
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
    }

    hasMoreQuestions() {
        return this.currentQuestionIndex < this.questions.length;
    }

    saveScore() {
        this.highScores.push(this.score);
        this.highScores.sort((a, b) => b - a);
        this.highScores = this.highScores.slice(0, 10);
        localStorage.setItem('highScores', JSON.stringify(this.highScores));
    }
}

export default Quiz;
