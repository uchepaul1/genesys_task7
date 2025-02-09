const questions = [
    {
        question: "According to John 3:16, what must one do to have eternal life?",
        choices: ["Obey the Ten Commandments", "Believe in Jesus", "Do good works", "Attend church regularly"],
        correct: "Believe in Jesus"
    },
    {
        question: "Who is the only way to God, according to John 14:6?",
        choices: ["Moses", "Paul", "Jesus", "Peter"],
        correct: "Jesus"
    },
    {
        question: "What did Jesus say on the cross before He died that signified the completion of salvation?",
        choices: ["I am finished", "It is finished", "Father, forgive them", "Into Your hands I commit My spirit"],
        correct: "It is finished"
    },
    {
        question: "According to Romans 6:23, what is the wages of sin?",
        choices: ["Death", "Suffering", "Poverty", "Sickness"],
        correct: "Death"
    },
    {
        question: "In Ephesians 2:8-9, salvation is described as what?",
        choices: ["A reward for good works", "A free gift from God", "Something we must earn", "A mystery only for the chosen"],
        correct: "A free gift from God"
    },
    {
        question: "What must one do to be saved, according to Acts 16:31?",
        choices: ["Confess all sins to a priest", "Believe in the Lord Jesus Christ", "Follow the Law of Moses", "Be baptized"],
        correct: "Believe in the Lord Jesus Christ"
    },
    {
        question: "Who was the first person to see the resurrected Jesus?",
        choices: ["Peter", "John", "Mary Magdalene", "Paul"],
        correct: "Mary Magdalene"
    },
    {
        question: "In 2 Corinthians 5:17, what happens to a person who is in Christ?",
        choices: ["They become a new creation", "They become sinless", "They receive immediate wealth", "They no longer need faith"],
        correct: "They become a new creation"
    },
    {
        question: "According to Titus 3:5, what saves us?",
        choices: ["Righteous deeds", "God's mercy", "Our faithfulness", "Observing the Sabbath"],
        correct: "God's mercy"
    },
    {
        question: "What did Jesus tell Nicodemus in John 3:3 about entering the Kingdom of God?",
        choices: ["You must obey the Law", "You must be born again", "You must pray daily", "You must fast regularly"],
        correct: "You must be born again"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress"); 
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("option");
        button.onclick = () => selectAnswer(button, choice);
        optionsEl.appendChild(button);
    });

    nextBtn.disabled = true;
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function selectAnswer(button, choice) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (choice === correctAnswer) {
        score++;
    }

    document.querySelectorAll(".option").forEach(btn => {
        btn.style.backgroundColor = (btn.textContent === correctAnswer) ? "lightgreen" : "lightcoral";
        btn.style.pointerEvents = "none";
    });

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionEl.textContent = `Quiz Completed! 🎉`;
    optionsEl.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
    nextBtn.style.display = "none";
    progressEl.style.display = "none";
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "block";
    progressEl.style.display = "block";
    restartBtn.style.display = "none";
    loadQuestion();
});

loadQuestion();
