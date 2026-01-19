document.addEventListener("DOMContentLoaded", function () {
    let quizData = {
        "sections": [
            {
                "sectionTitle": "General Knowledge",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "What is the tallest mountain in the world?",
                        "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
                        "answer": "Mount Everest"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the capital of Italy?",
                        "answer": "Rome"
                    },
                    {
                        "questionType": "number",
                        "question": "How many continents are there?",
                        "answer": 7
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which ocean is the largest?",
                        "options": ["Atlantic", "Indian", "Pacific", "Arctic"],
                        "answer": "Pacific"
                    },
                    {
                        "questionType": "text",
                        "question": "Who wrote 'Romeo and Juliet'?",
                        "answer": "William Shakespeare"
                    },
                    {
                        "questionType": "number",
                        "question": "In what year did the Titanic sink?",
                        "answer": 1912
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is the smallest country in the world?",
                        "options": ["Monaco", "Nauru", "Vatican City", "San Marino"],
                        "answer": "Vatican City"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the longest river in the world?",
                        "answer": "Nile"
                    },
                    {
                        "questionType": "number",
                        "question": "How many planets are in the Solar System?",
                        "answer": 8
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which country is known as the Land of the Rising Sun?",
                        "options": ["China", "Japan", "South Korea", "Thailand"],
                        "answer": "Japan"
                    }
                ]
            },
            {
                "sectionTitle": "Science",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "What is the chemical symbol for water?",
                        "options": ["H2O", "CO2", "O2", "NaCl"],
                        "answer": "H2O"
                    },
                    {
                        "questionType": "text",
                        "question": "What force keeps us on the ground?",
                        "answer": "Gravity"
                    },
                    {
                        "questionType": "number",
                        "question": "At what temperature (Celsius) does water boil?",
                        "answer": 100
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is the hardest natural substance on Earth?",
                        "options": ["Iron", "Diamond", "Quartz", "Granite"],
                        "answer": "Diamond"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the largest planet in our Solar System?",
                        "answer": "Jupiter"
                    },
                    {
                        "questionType": "number",
                        "question": "How many elements are in the periodic table?",
                        "answer": 118
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is the human body's largest organ?",
                        "options": ["Heart", "Skin", "Liver", "Brain"],
                        "answer": "Skin"
                    },
                    {
                        "questionType": "text",
                        "question": "What gas do plants absorb during photosynthesis?",
                        "answer": "Carbon Dioxide"
                    },
                    {
                        "questionType": "number",
                        "question": "How long does Earth take to orbit the Sun (in days)?",
                        "answer": 365
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which vitamin is produced when the skin is exposed to sunlight?",
                        "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                        "answer": "Vitamin D"
                    }
                ]
            },
            {
                "sectionTitle": "Mathematics",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "What is the value of Pi (approximate)?",
                        "options": ["2.14", "3.14", "4.14", "5.14"],
                        "answer": "3.14"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the term for a shape with three sides?",
                        "answer": "Triangle"
                    },
                    {
                        "questionType": "number",
                        "question": "What is the square root of 64?",
                        "answer": 8
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is 50% of 200?",
                        "options": ["100", "150", "200", "250"],
                        "answer": "100"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the next prime number after 7?",
                        "answer": "11"
                    },
                    {
                        "questionType": "number",
                        "question": "How many degrees are in a right angle?",
                        "answer": 90
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is the sum of angles in a triangle?",
                        "options": ["180", "360", "270", "90"],
                        "answer": "180"
                    },
                    {
                        "questionType": "text",
                        "question": "What is the term for a 10-sided polygon?",
                        "answer": "Decagon"
                    },
                    {
                        "questionType": "number",
                        "question": "If a rectangle has a width of 4cm and a length of 10cm, what is its area (in cm\u00b2)?",
                        "answer": 40
                    },
                    {
                        "questionType": "mcq",
                        "question": "What is the value of 'x' in the equation 2x + 6 = 14?",
                        "options": ["2", "3", "4", "5"],
                        "answer": "4"
                    }
                ]
            },
            {
                "sectionTitle": "Indian History",
                "questions": [
                    {
                        "questionType": "mcq",
                        "question": "Who was the first Emperor of the Maurya Dynasty?",
                        "options": ["Ashoka", "Chandragupta Maurya", "Harsha", "Bindusara"],
                        "answer": "Chandragupta Maurya"
                    },
                    {
                        "questionType": "text",
                        "question": "What was the capital of the Mughal Empire?",
                        "answer": "Agra"
                    },
                    {
                        "questionType": "number",
                        "question": "In what year did India gain independence?",
                        "answer": 1947
                    },
                    {
                        "questionType": "mcq",
                        "question": "Who was the founder of the Gupta Empire?",
                        "options": [
                            "Samudragupta",
                            "Chandragupta I",
                            "Chandragupta II",
                            "Kumaragupta"
                        ],
                        "answer": "Chandragupta I"
                    },
                    {
                        "questionType": "text",
                        "question": "Which city was the capital of the Maratha Empire?",
                        "answer": "Pune"
                    },
                    {
                        "questionType": "number",
                        "question": "In what century did the Battle of Plassey take place?",
                        "answer": 18
                    },
                    {
                        "questionType": "mcq",
                        "question": "Who was the first female ruler of Delhi Sultanate?",
                        "options": [
                            "Razia Sultana",
                            "Mumtaz Mahal",
                            "Noor Jahan",
                            "Jodha Bai"
                        ],
                        "answer": "Razia Sultana"
                    },
                    {
                        "questionType": "text",
                        "question": "What was the main language of administration under the Mughal Empire?",
                        "answer": "Persian"
                    },
                    {
                        "questionType": "number",
                        "question": "How many years did the British Raj last in India?",
                        "answer": 90
                    },
                    {
                        "questionType": "mcq",
                        "question": "Which year marked the start of the British East India Company's rule in India?",
                        "options": ["1600", "1757", "1858", "1947"],
                        "answer": "1757"
                    }
                ]
            }
        ]
    };


    function initSections() {
        let sections = document.querySelectorAll(".section");

        sections.forEach(section => {
            section.addEventListener("click", () => {
                let sectionNumber = parseInt(section.dataset.section);
                startQuiz(sectionNumber);
            });
        });
    }
    initSections();



    function startQuiz(index) {
        let questionBank = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;
        let answerSelected = false;
        //here we make scren empty to start new screen
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";

        // Define helper functions inside startQuiz to access shared variables
        function checkAnswer(userAnswer, correctAnswer) {
            if (String(userAnswer).trim() === String(correctAnswer)) {
                score++;
                updateScore();
                // Show feedback for correct answer
                showFeedback("Correct!", "correct");
            } else {
                // Show feedback for incorrect answer with correct answer
                showFeedback(`Incorrect. The correct answer is: ${correctAnswer}`, "incorrect");
            }
        }

        /* ------------------ FEEDBACK ------------------ */
        function showFeedback(message, type) {
            // Create or update feedback element
            let feedbackElement = document.getElementById("feedback");
            if (!feedbackElement) {
                feedbackElement = document.createElement("div");
                feedbackElement.id = "feedback";
                document.getElementById("options").appendChild(feedbackElement);
            }

            feedbackElement.textContent = message;
            feedbackElement.className = `feedback ${type}`;

            // Clear feedback after a delay to avoid cluttering the interface
            setTimeout(() => {
                if (feedbackElement && feedbackElement.parentNode) {
                    feedbackElement.parentNode.removeChild(feedbackElement);
                }
            }, 2000); // Remove feedback after 2 seconds
        }

        /* ------------------ HIGHLIGHT ------------------ */
        function highlightSelectedOption(selected) {
            document.querySelectorAll(".option").forEach(opt => {
                opt.classList.remove("selected");
            });
            selected.classList.add("selected");
        }

        /* ------------------ SCORE ------------------ */
        function updateScore() {
            document.getElementById("score").textContent = `Score: ${score}`;
        }

        /* ------------------ RESULT ------------------ */
        function showResult() {
            document.getElementById("question-container").classList.add("hidden");
            document.getElementById("result-container").classList.remove("hidden");
            document.getElementById("final-score").innerHTML = `<h2>Well Done!</h2><p>Your Score: ${score} out of ${questionBank.length}</p>`;
        }

        function showQuestion() {
            const question = questionBank[currentQuestionIndex];
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");

            // Reset answer selection for new question
            answerSelected = false;
            // Enable the next button by default (will be disabled for text inputs if needed)
            document.getElementById("next-button").disabled = false;

            questionElement.textContent = question.question;
            optionsElement.innerHTML = "";
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

                            // Enable the next button after answering
                            document.getElementById("next-button").disabled = false;
                        }
                    });

                    optionsElement.appendChild(optionElement);
                });

            } else {
                const input = document.createElement("input");
                input.type = question.questionType === "number" ? "number" : "text";

                const submitBtn = document.createElement("button");
                submitBtn.textContent = "Submit Answer";

                // Initially disable the next button for text/number inputs
                document.getElementById("next-button").disabled = true;

                submitBtn.onclick = () => {
                    if (!answerSelected) {
                        answerSelected = true;
                        checkAnswer(input.value, question.answer);

                        // Enable the next button after answering
                        document.getElementById("next-button").disabled = false;
                    }
                };

                optionsElement.appendChild(input);
                optionsElement.appendChild(submitBtn);
            }

        }

        document.getElementById("next-button").addEventListener("click", () => {
            if (currentQuestionIndex < questionBank.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                showResult();
            }
        });
    }

})

