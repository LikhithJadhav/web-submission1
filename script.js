
// script.js

const quizData = [
    {
        question: "What year was Honkai Star Rail released?",
        answers: {
            a: "2020",
            b: "2021",
            c: "2022",
            d: "2023"
        },
        correctAnswer: "d"
    },
    {
        question: "How many types of paths currently are there in Honkai Star Rail?",
        answers: {
            a: "7",
            b: "8",
            c: "10",
            d: "11"
        },
        correctAnswer: "a"
    },
    {
        question: "Which one below is not a member of high-cloud quintet?",
        answers: {
            a: "Imbibitor Lunae(Dan Feng)",
            b: "Jing Yuan",
            c: "Bailu",
            d: "Jingliu"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the punishment that Topaz receives in the story line?",
        answers: {
            a: "Demoted from P45 to P44",
            b: "Demoted from P46 to P45",
            c: "Demoted from P47 to P46",
            d: "Demoted from P46 to P47"
        },
        correctAnswer: "a"
    },
];

function displayQuiz() {
    const quizContainer = document.getElementById('interactive-element');
    let quizHTML = '<h2>Quiz: Test Your Honkai Star Rail Knowledge</h2>';

    quizData.forEach((questionData, index) => {
        quizHTML += `
            <div class="question">
                <p>${index + 1}. ${questionData.question}</p>
                <ul class="answers">
                    <li><input type="radio" name="question${index}" value="a" onclick="checkAnswer(${index}, 'a')">${questionData.answers.a}</li>
                    <li><input type="radio" name="question${index}" value="b" onclick="checkAnswer(${index}, 'b')">${questionData.answers.b}</li>
                    <li><input type="radio" name="question${index}" value="c" onclick="checkAnswer(${index}, 'c')">${questionData.answers.c}</li>
                    <li><input type="radio" name="question${index}" value="c" onclick="checkAnswer(${index}, 'd')">${questionData.answers.d}</li>
                </ul>
                <div id="feedback${index}" class="feedback"></div>
            </div>
        `;
    });

    
    quizContainer.innerHTML = quizHTML;
}

function checkAnswer(questionIndex, selectedOption) {
    const questionData = quizData[questionIndex];
    const correctAnswer = questionData.correctAnswer;
    const feedbackElement = document.getElementById(`feedback${questionIndex}`);

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Nice!Correct!";
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        feedbackElement.textContent = "No...Incorrect.Try again :)";
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }
}

function submitQuiz() {
    let score = 0;
    quizData.forEach((questionData, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === questionData.correctAnswer) {
            score++;
        }
    });

    const quizScoreElement = document.getElementById('quiz-score');
    quizScoreElement.innerHTML = `<h3>Your Quiz Score: ${score} out of ${quizData.length}</h3>`;
}

document.addEventListener('DOMContentLoaded', displayQuiz);

// Slideshow functionality
let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Initialize slideshow
showSlides(slideIndex);
