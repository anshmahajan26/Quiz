document.addEventListener("DOMContentLoaded", function () {
    let quizData = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let questionBank = [];
    let answerSelected = false;

    // Fetch quiz data from the JSON file
    fetch('quiz-data.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            initSections();
        })
        .catch(error => console.error('Error fetching quiz data:', error));

    function initSections() {
        let sections = document.querySelectorAll(".section");

        sections.forEach(section => {
            section.addEventListener("click", () => {
                let sectionNumber = parseInt(section.dataset.section);
                startQuiz(sectionNumber);
            });
        });

        document.getElementById("next-button").addEventListener("click", () => {
            // For text/number questions, check answer before moving to next
            const question = questionBank[currentQuestionIndex];
            if (question.questionType !== 'mcq' && !answerSelected) {
                const input = options.querySelector('input');
                if (input && input.value.trim() !== '') {
                    answerSelected = true;
                    checkAnswer(input.value, question.answer);
                }
            }

            if (currentQuestionIndex < questionBank.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResult();
            }
        });

        document.getElementById("prev-button").addEventListener("click", () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                // When going back, we don't re-evaluate the score.
                // We just show the previous question.
                showQuestion(true); // Pass a flag to indicate we are navigating back
            }
        });

        document.getElementById("home-button").addEventListener("click", () => {
            document.getElementById("result-container").style.display = "none";
            document.getElementById("quiz-container").style.display = "block";
        });
    }

    function startQuiz(index) {
        questionBank = quizData.sections[index].questions;
        currentQuestionIndex = 0;
        score = 0;
        
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";
        
        updateScore();
        showQuestion();
    }

    function checkAnswer(userAnswer, correctAnswer) {
        if (String(userAnswer).trim().toLowerCase() === String(correctAnswer).toLowerCase()) {
            score++;
            updateScore();
            showFeedback("Correct!", "correct");
        } else {
            showFeedback(`Incorrect. The correct answer is: ${correctAnswer}`, "incorrect");
        }
    }

    function showFeedback(message, type) {
        let feedbackElement = document.getElementById("feedback");
        if (!feedbackElement) {
            feedbackElement = document.createElement("div");
            feedbackElement.id = "feedback";
            // Prepend feedback to keep it separate from options
            document.getElementById("options").prepend(feedbackElement);
        }

        feedbackElement.textContent = message;
        feedbackElement.className = `feedback ${type}`;

        setTimeout(() => {
            if (feedbackElement && feedbackElement.parentNode) {
                feedbackElement.parentNode.removeChild(feedbackElement);
            }
        }, 2000);
    }

    function highlightSelectedOption(selected) {
        document.querySelectorAll(".option").forEach(opt => {
            opt.classList.remove("selected");
        });
        selected.classList.add("selected");
    }

    function updateScore() {
        document.getElementById("score").textContent = `Score: ${score}`;
    }

    function showResult() {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("result-container").style.display = "block";
        document.getElementById("final-score").innerHTML = `<h2>Well Done!</h2><p>Your Score: ${score} out of ${questionBank.length}</p>`;
    }

    function showQuestion(isNavigatingBack = false) {
        const question = questionBank[currentQuestionIndex];
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");

        if (!isNavigatingBack) {
            answerSelected = false;
        }
        
        questionElement.textContent = question.question;
        optionsElement.innerHTML = "";

        const nextButton = document.getElementById("next-button");
        const prevButton = document.getElementById("prev-button");
        
        nextButton.disabled = true; 
        prevButton.disabled = currentQuestionIndex === 0;

        if (question.questionType === "mcq") {
            question.options.forEach(option => {
                const optionElement = document.createElement("div");
                optionElement.textContent = option;
                optionElement.className = "option";

                optionElement.addEventListener("click", function () {
                    if (!answerSelected) {
                        answerSelected = true;
                        highlightSelectedOption(optionElement);
                        checkAnswer(option, question.answer);
                        nextButton.disabled = false; // Enable after selection
                    }
                });

                optionsElement.appendChild(optionElement);
            });

        } else {
            const input = document.createElement("input");
            input.type = question.questionType === "number" ? "number" : "text";
            input.placeholder = "Type your answer here";

            // Enable next button on input
            input.addEventListener('input', () => {
                if(input.value.trim() !== '') {
                    nextButton.disabled = false;
                } else {
                    nextButton.disabled = true;
                }
            });

            optionsElement.appendChild(input);
        }
    }
});

