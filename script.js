const questions = [{
        question: "Qual é o nome do protagonista de Andria?",
        image: "https://i.pinimg.com/736x/68/88/05/688805d8c1a04016787fe9f51d37e459.jpg",
        answers: [
            { text: "Rafael.", correct: false },
            { text: "Jorge.", correct: true },
            { text: "Amanda.", correct: false },
            { text: "Carlos.", correct: false }
        ]
    },

    {
        question: "Em uma das cenas da peça, uma marca de vitaminas é mencionada. Qual era o nome dessa marca?",
        image: "https://i.pinimg.com/736x/1a/a1/41/1aa141f3b5483ccc5ec22a3fd609c1ad.jpg",
        answers: [
            { text: "NósRosa.", correct: true },
            { text: "WePink.", correct: false },
            { text: "Vitaminados.", correct: false },
            { text: "MariaMaria.", correct: false }
        ]
    },

    {
        question: "Qual o nome do personagem cujo o qual Amanda, namorada de Jorge, conversava e, consequentemente, chegou a se apaixonar?",
        image: "https://i.pinimg.com/736x/00/a2/17/00a217771049d897c7ebc9565b3dc7c1.jpg",
        answers: [
            { text: "Goku.", correct: false },
            { text: "Naruto.", correct: false },
            { text: "Mickey Mouse.", correct: false },
            { text: "Satoru Gojo.", correct: true }
        ]
    },

    {
        question: "Entre as opções abaixo, escolha a que contém a mensagem que a Mãe Natureza transmite ao fim da peça:",
        image: "https://i.pinimg.com/736x/46/20/21/4620218eca6e90cffa2150e98d26b217.jpg",
        answers: [
            { text: "Os humanos devem destruir o mundo.", correct: false },
            { text: "Devemos cuidar e respeitar o Meio Ambiente, para preservar a vida no planeta.", correct: true },
            { text: "A importancia de comprar as vitaminas NósRosa para o bem estar.", correct: false },
            { text: "A Mãe Natureza não transmite nenhuma mensagem.", correct: false }
        ]
    },

    {
        question: "Em que posição na classificação geral das peças Andria ficou?",
        image: "https://i.pinimg.com/1200x/67/8d/9e/678d9e51f2acdea3a1334bd3afd64710.jpg",
        answers: [
            { text: "9° Lugar.", correct: false },
            { text: "Em último lugar.", correct: false },
            { text: "8° Lugar.", correct: true },
            { text: "3° Lugar.", correct: false }
        ]
    },

    {
        question: "Quem era Andria?",
        image: "https://i.pinimg.com/736x/09/a0/43/09a043eaf89dd267ed7949a283de762a.jpg",
        answers: [
            { text: "A Leticia.", correct: false },
            { text: "Uma inteligência artificial.", correct: true },
            { text: "Uma menina do campo.", correct: false },
            { text: "Figurante.", correct: false }
        ]
    },

    {
        question: "Qual foi o motivo da revolta de Jorge contra o Pintor?",
        image: "https://i.pinimg.com/1200x/dd/b9/a1/ddb9a1828d4ee0b96d7e18f35b60509f.jpg",
        answers: [
            { text: "Ele apenas quis.", correct: false },
            { text: "Ele tentou roubar sua namorada.", correct: false },
            { text: "Não havia motivo.", correct: false },
            { text: "Devido ao pintor não ter feito de fato sua pintura, mas sim ter pedido que a IA fizesse.", correct: true }
        ]
    },

    {
        question: "Quem é esse personagem?",
        image: "https://lh3.googleusercontent.com/pw/AP1GczM6A4MDhJ8AAcNNIKDkeCEac_lxvZvWioQQK0j0yxeI9B_DWonHNDjBm-DpC6Z1xtAccKlMg0WhWCb36iYUoSKRQVajZ_UN5sm5d84a-xL1l1tbfo5TXPw_YiM-R_QunVgP5EOcrw33h9-H9C1vJy2NKQ=w1418-h945-s-no-gm",
        answers: [
            { text: "Amanda.", correct: false },
            { text: "Andria.", correct: true },
            { text: "Rafael.", correct: false },
            { text: "Pintor.", correct: false }
        ]
    },
    {
        question: "O que Andria bebe durante a peça?",
        image: "https://i.pinimg.com/1200x/1d/95/b2/1d95b255283a57f63173069678f296d4.jpg",
        answers: [
            { text: "Energetico.", correct: false },
            { text: "Suco.", correct: false },
            { text: "Água.", correct: true },
            { text: "Cerveja.", correct: false }
        ]
    },
    {
        question: "Por que Rafael, amigo de Jorge, surta?",
        image: "https://i.pinimg.com/1200x/98/05/ce/9805ce254aa9f42d9ba04a870d9034ae.jpg",
        answers: [
            { text: "Porque tomaram seu celular.", correct: true },
            { text: "Porque ele está com fome.", correct: false },
            { text: "Porque ele está bêbado.", correct: false },
            { text: "Porque atrapalharam seu sono.", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const counterElement = document.getElementById("question-counter");
const imageElement = document.getElementById("question-image");
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


    counterElement.innerText =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    questionElement.innerText =
        current.question;

    imageElement.src = current.image;

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
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const points = (score / questions.length) * 100;

    scoreElement.innerHTML =
        `Você acertou ${score} de ${questions.length} perguntas!<br><br>
         Pontuação: ${points}/100`;

    let message = "";

    if (points === 100) {
        message = "🏆 Parabéns! Você é um grande fã de Andria.";
    } else if (points >= 80) {
        message = "👏 Excelente resultado!";
    } else if (points >= 60) {
        message = "👍 Bom trabalho!";
    } else if (points >= 50) {
        message = "😐 Ah... Talvez você deva assistir mais a peça.";
    } else if (points === 0) {
        message = "😡 Grr... Você DEFINITIVAMENTE não assistiu Andria!";
    } else {
        message = "📚 Que pena... Tente novamente!";
    }

    messageElement.innerText = message;
}

function restartQuiz() {

    resultContainer.classList.add("hidden");
    startScreen.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;
}
