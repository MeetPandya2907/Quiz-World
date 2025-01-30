// Define your question sets based on categories
const questions = {
    Science: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], answer: "H2O" },
        { question: "What planet is closest to the sun?", options: ["Earth", "Mercury", "Venus", "Mars"], answer: "Mercury" },
    ],
    History: [
        { question: "Who was the first president of the USA?", options: ["Lincoln", "Washington", "Jefferson", "Adams"], answer: "Washington" },
        { question: "When did World War II end?", options: ["1945", "1918", "1939", "1965"], answer: "1945" },
    ],
    // Add other categories like Sports, Technology, Movies, Music, etc.
};

let currentCategory = "Science"; // Default category (will change based on the page)
let usedQuestions = [];
let timerInterval;
let timeLeft = 30;
let selectedOption = null;

const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("option");
const timerDiv = document.getElementById("timer");
const submitBtn = document.getElementById("submit-btn");

function startQuiz() {
    loadRandomQuestion();
    startTimer();
}

function getRandomQuestion() {
    // Keep picking a random question until we find one that hasn't been used
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions[currentCategory].length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex); // Track used questions
    return questions[currentCategory][randomIndex];
}

function loadRandomQuestion() {
    if (usedQuestions.length === questions[currentCategory].length) {
        alert("Quiz completed!");
        submitBtn.style.display = "none"; // Hide submit button after the quiz
        return;
    }

    const currentQuestion = getRandomQuestion();
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
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedOption = option;
    submitBtn.style.display = "block";
}

function startTimer() {
    timeLeft = 30;
    timerDiv.textContent = timeLeft;
    timerDiv.style.color = "green";
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = timeLeft;

        if (timeLeft <= 3) timerDiv.style.color = "red";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            loadRandomQuestion();
        }
    }, 1000);
}

function handleSubmit() {
    clearInterval(timerInterval); // Stop the timer

    const currentQuestion = questions[currentCategory][usedQuestions[usedQuestions.length - 1]];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    loadRandomQuestion();
}

submitBtn.addEventListener("click", handleSubmit);

// Start the quiz for the specific category
startQuiz();
