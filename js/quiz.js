"use strict";
const qa = [
  {
    question: "What planet is known as the Red Planet?",
    answer: "Mars"
  },
  {
    question: "Which planet has the most moons?",
    answer: "Saturn"
  },
  {
    question: "What is the hottest planet in our solar system?",
    answer: "Venus"
  },
  {
    question: "What do we call a star that suddenly explodes?",
    answer: "Supernova"
  },
  {
    question: "What galaxy is Earth located in?",
    answer: "Milky Way"
  }
];


let currentQuestion = 0;
let selectedAnswer;


console.log(qa[0].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

document.getElementById("submit").addEventListener("click", function() {
     const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if(selected.value == qa[currentQuestion].answer){
        document.getElementById("result").innerHTML = "Correct!";
     } else {
        document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
     }
     nextQuestion();
     setTimeout(()=>{
         document.getElementById("result").innerHTML = "";
        }, 3000);

});



function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < qa.length) {
        document.getElementById("question").innerHTML = qa[currentQuestion].question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML = "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }

}
