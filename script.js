const questions = [
    {
        question: "What is the acronym for the system of linked documents and resources that can be accessed via the internet?",
        answers: [
            {text: "The World wild web", correct: false},
            {text: "The World web", correct: false},
            {text: "The World wide web", correct: true},
            {text: "The Web web Web", correct: false},

        ]
    },
    {
        question: "What does the acronym HTTP stand for?",
        answers: [
            {text: "Hypertext Transfer Protocol", correct: true},
            {text: "Hypertext Transmission Protocol", correct: false},
            {text: "Hypertext Transport Protocol", correct: false},
            {text: "Hypertext Protocol", correct: false},

        ]
    },
    {
        question: "What is the name of the popular web browser developed by Google?",
        answers: [
            {text: "Mozilla Firefox", correct: false},
            {text: "Internet Explorer", correct: false},
            {text: "Chrome", correct: true},
            {text: "Opera", correct: false},

        ]
    },
    {
        question: "What does the acronym VPN stand for?",
        answers: [
            {text: "Virtual Network", correct: false},
            {text: "Variable Pin Network", correct: false},
            {text: "Virtually Prepared Network", correct: false},
            {text: "Virtual Private Network", correct: true},

        ]
    }, {
        question: "What is biggest search engine used world wide?",
        answers: [
            {text: "YouTube", correct: false},
            {text: "Google", correct: true},
            {text: "Yahoo", correct: false},
            {text: "Bing", correct: false},

        ]
    },
     {
        question: "What is the name of the program used for browsing the World Wide Web?",
        answers: [
            {text: "The World wild web", correct: false},
            {text: "Internet", correct: false},
            {text: "Page", correct: false},
            {text: "Web Browser", correct: true},

        ]
    },
    {
        question: "What is the name of the online video sharing platform owned by Google?",
        answers: [
            {text: "TikTok", correct: false},
            {text: "Instagram", correct: false},
            {text: "Vine", correct: false},
            {text: "YouTube", correct: true},

        ]
    },
    {
        question: "What does the acronym HTML stand for?",
        answers: [
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hypotext Markup Language", correct: false},
            {text: "Hypertext Markup Languages", correct: false},
            {text: "Hyphen text Markup Language", correct: false},

        ]
    },
    {
        question: "What is the term used for software that is designed to harm computer systems?",
        answers: [
            {text: "Hack", correct: false},
            {text: "Scam", correct: false},
            {text: "Malware", correct: true},
            {text: "Corruption", correct: false},

        ]
    },
    {
        question: "What is the name of the social networking site that was launched in 2004 and has over 2 billion active users?",
        answers: [
            {text: "Instagram", correct: false},
            {text: "MySpace", correct: false},
            {text: "Facebook", correct: true},
            {text: "Discord", correct: false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Well done! You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();