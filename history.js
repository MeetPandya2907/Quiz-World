let currentCategory = '';
        let currentQuestion = 0;
        let timeLeft = 30;
        let timerId;
        let selectedOption = null;
        let questions = {};

        const categoryQuestions = {
            science: [
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Au", "Ag", "Fe", "Cu"],
                    answer: 0
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    answer: 1
                }
            ],
            history: [
                {
                    question: "In which year did World War II end?",
                    options: ["1943", "1945", "1950", "1939"],
                    answer: 1
                }
            ],
            technology: [
                {
                    question: "What does CPU stand for?",
                    options: ["Central Processing Unit", "Computer Personal Unit", 
                             "Central Process Unit", "Computer Processing Unit"],
                    answer: 0
                }
            ]
        };

        function startQuiz(category) {
            document.getElementById('categories').style.display = 'none';
            document.getElementById('quizPage').style.display = 'block';
            currentCategory = category;
            questions = shuffleArray([...categoryQuestions[category]]);
            currentQuestion = 0;
            timeLeft = 30;
            loadQuestion();
            startTimer();
        }

        function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        function loadQuestion() {
            const question = questions[currentQuestion];
            document.getElementById('question').textContent = question.question;
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;
                button.onclick = () => selectOption(index);
                optionsContainer.appendChild(button);
            });
        }

        function selectOption(index) {
            selectedOption = index;
            document.getElementById('submitBtn').disabled = false;
            document.querySelectorAll('.option-btn').forEach(btn => 
                btn.style.background = 'rgba(255, 255, 255, 0.05)');
            document.querySelectorAll('.option-btn')[index].style.background = 
                'rgba(243, 156, 18, 0.3)';
        }

        function startTimer() {
            timerId = setInterval(() => {
                timeLeft--;
                document.getElementById('timer').textContent = `${timeLeft}s`;
                if(timeLeft <= 0) {
                    checkAnswer(true);
                }
            }, 1000);
        }

        function checkAnswer(timeout = false) {
            clearInterval(timerId);
            const correctAnswer = questions[currentQuestion].answer;
            const dialogBox = document.getElementById('dialogBox');
            
            if(selectedOption === correctAnswer || timeout) {
                dialogBox.classList.add('dialog-correct');
                dialogBox.classList.remove('dialog-incorrect');
                document.getElementById('dialogTitle').textContent = 
                    timeout ? 'Time Up!' : 'Correct Answer!';
                document.getElementById('dialogMessage').textContent = 
                    timeout ? 'Time has run out!' : 'Well done!';
            } else {
                dialogBox.classList.add('dialog-incorrect');
                dialogBox.classList.remove('dialog-correct');
                document.getElementById('dialogTitle').textContent = 'Incorrect Answer!';
                document.getElementById('dialogMessage').textContent = 
                    `Correct answer: ${questions[currentQuestion].options[correctAnswer]}`;
            }

            document.getElementById('dialogOverlay').style.display = 'flex';
        }

        function nextQuestion() {
            closeDialog();
            currentQuestion++;
            if(currentQuestion < questions.length) {
                timeLeft = 30;
                selectedOption = null;
                document.getElementById('submitBtn').disabled = true;
                loadQuestion();
                startTimer();
            } else {
                endQuiz();
            }
        }

        function closeDialog() {
            document.getElementById('dialogOverlay').style.display = 'none';
            document.getElementById('dialogBox').className = 'dialog-box';
        }

        function endQuiz() {
            alert(`Quiz completed! You got ${currentQuestion} correct out of ${questions.length}`);
            document.getElementById('quizPage').style.display = 'none';
            document.getElementById('categories').style.display = 'block';
        }