const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" }
];

let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 10;
let selectedOption = null; // To track the selected answer

const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("option");
const timerDiv = document.getElementById("timer");
const submitBtn = document.getElementById("submit-btn");

function startQuiz() {
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionDiv.textContent = currentQuestion.question;
    optionsDiv.innerHTML = "";
    submitBtn.style.display = "none"; // Hide submit button initially
    selectedOption = null; // Reset selected option

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-btn";
        button.onclick = () => handleSelection(button, option);
        optionsDiv.appendChild(button);
    });
}

function handleSelection(button, option) {
    // Mark the selected button
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => (btn.classList.remove("selected"))); // Reset other buttons
    button.classList.add("selected"); // Highlight selected button

    selectedOption = option; // Store selected option
    submitBtn.style.display = "block"; // Show the Submit button
}

function startTimer() {
    timeLeft = 10;
    timerDiv.textContent = timeLeft;
    timerDiv.style.color = "green";
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = timeLeft;

        if (timeLeft <= 3) timerDiv.style.color = "red"; // Change color to red for last 3 seconds

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            moveToNextQuestion();
        }
    }, 1000);
}

function handleSubmit() {
    clearInterval(timerInterval); // Stop the timer

    if (selectedOption === questions[currentQuestionIndex].answer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    moveToNextQuestion();
}

function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        startTimer();
    } else {
        alert("Quiz completed!");
        submitBtn.style.display = "none"; // Hide submit button after the quiz
    }
}

submitBtn.addEventListener("click", handleSubmit);

startQuiz();
