var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
var quizIndex = 0;
var quiz = [
  {
    question: "Javascript is a programing language",
    rightanswer: "True",
    answerchoices: ["True", "False"]
  },
  {
    question: "which of these animals is a mammal?",
    rightanswer: "Camel",
    answerchoices: ["goldfish", "Camel", "owl"]
  },
  {
    question: "Which of these are not a Javascript data type?",
    rightanswer: "container",
    answerchoices: ["boolean", "array", "string", "number", "container" ]
  }
]

renderquestion(quizIndex);
//i = 0; i < quiz;
    var answerlist = document.getElementById("answerlist");

answerlist.addEventListener("click", function (event) {
if (quiz[quizIndex].rightanswer == event.target.innerText) {
     alert("correct!");
} else alert("Incorrect!")
 quizIndex++;
    renderquestion(quizIndex);
    var answerlist = document.getElementById("answerlist");



    console.log(event.target.innerText, i)
})

function renderquestion(j)
{
    // Create element:
    var questionprompt = document.createElement("p");
    questionprompt.innerText = quiz[j].question;

    // Append to body:
    document.body.appendChild(questionprompt);

    var answerlist = document.createElement("ol");
    answerlist.setAttribute("id", "answerlist");
    document.body.appendChild(answerlist);
    // var list = document.getElementById("question");
  
    quiz[j].answerchoices.forEach((item) => {
        var li = document.createElement("li");
        li.innerText = item;
        answerlist.appendChild(li);
    })
    // listen for response

} 
