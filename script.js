const questions = [
    {
        question: "Qual é o nome do protagonista de Andria?",
        answers: [
            { text: "Rafael", correct: false },
            { text: "Jorge", correct: true },
            { text: "Amanda", correct: false },
            { text: "Carlos", correct: false }
        ]
    },

    {
        question: "Em uma das cenas da peça, uma marca de vitaminas é mencionada. Qual era o nome dessa marca?",
        answers: [
            { text: "NósRosa", correct: true },
            { text: "WePink", correct: false },
            { text: "Vitaminados", correct: false },
            { text: "MariaMaria", correct: false }
        ]
    },

    {
        question: "Qual o nome do personagem cujo o qual Amanda, namorada de Jorge, conversava e, consequentemente, chegou a se apaixonar?",
        answers: [
            { text: "Goku", correct: false },
            { text: "Naruto", correct: false },
            { text: "Mickey Mouse", correct: false },
            { text: "Satoru Gojo", correct: true }
        ]
    },

    {
        question: "Entre as opções abaixo, escolha a que contérm a mensagem que a Mãe Natureza transmite ao fim da peça:",
        answers: [
            { text: "Os humanos devem destruir o mundo.", correct: false },
            { text: "Devemos cuidar e respeitar o Meio Ambiente, para preservar a vida no planeta.", correct: true },
            { text: "A importancia de comprar as vitaminas NósRosa para o bem estar.", correct: false },
            { text: "A Mãe Natureza não transmite nenhuma mensagem.", correct: false }
        ]
    },

    {
        question: "Em que posição na classificação geral das peças Andria ficou?",
        answers: [
            { text: "9° Lugar", correct: false },
            { text: "Em último lugar", correct: false },
            { text: "8° Lugar", correct: true },
            { text: "3° Lugar", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    startQuiz();
});

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    resetState();

    let current = questions[currentQuestion];
    questionElement.innerText =
        `${currentQuestion + 1}. ${current.question}`;

    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", selectAnswer);

        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";

    if (correct) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answersElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("score").innerText =
        `Você acertou ${score} de ${questions.length} perguntas!`;

    let message = "";

    if (score === questions.length) {
        message = "Excelente!";
    } else if (score >= 3) {
        message = "Bom trabalho!";
    } else {
        message = "Tente novamente!";
    }

    document.getElementById("message").innerText = message;
}

function restartQuiz() {

    resultContainer.classList.add("hidden");
    startScreen.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;
}
