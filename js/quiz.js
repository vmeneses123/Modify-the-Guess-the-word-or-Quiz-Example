"use strict";


const qa = [
  { question: "What planet is known as the Red Planet?", answer: "Mars" },
  { question: "Which planet has the most moons?", answer: "Saturn" },
  { question: "What is the hottest planet in our solar system?", answer: "Venus" },
  { question: "What do we call a star that suddenly explodes?", answer: "Supernova" },
  { question: "What galaxy is Earth located in?", answer: "Milky Way" }
];

let currentQuestion = 0;

document.getElementById("question").innerHTML = qa[currentQuestion].question;

function updateProgress() {
    const progress = document.getElementById("quiz-progress");
    progress.max = qa.length;       
    progress.value = currentQuestion; 
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < qa.length) {
        document.getElementById("question").innerHTML = qa[currentQuestion].question;
        document.getElementById("optionsForm").reset(); 
        updateProgress(); 
    } else {
       
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("optionsForm").style.display = "none";
        document.getElementById("result").innerHTML = "🎉 You have completed the quiz!";
        
        const progress = document.getElementById("quiz-progress");
        progress.value = qa.length; 
    }
}

document.getElementById("submit").addEventListener("click", function() {
    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === qa[currentQuestion].answer) {
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = " Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
    }

    
    setTimeout(() => {
        document.getElementById("result").innerHTML = ""; 
        nextQuestion();
    }, 1500);
});
