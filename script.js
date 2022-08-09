var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function (event) {
    timerStart(); {
        renderquestion(0);
    }
});

var timer = document.querySelector('.timer');
var answerBox = document.querySelector('.answerContainer');
var endMessage = document.querySelector('#scroll-text');
var timerCount = 90;
var questionCount = 0;
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
function timerStart() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timerCount--;
      timer.innerHTML = timerCount;
  
      if(timerCount === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
    


function renderquestion() {
    // Create element:
    var questionprompt = document.querySelector(".questionBox");
    questionprompt.innerHTML = quiz[questionCount].question;

    // Append to body:
    // document.body.appendChild(questionprompt);

    var answerlist = document.createElement("ol");
    // answerlist.setAttribute("id", "answerlist");
    answerBox.appendChild(answerlist);
    // var list = document.getElementById("question");
  
    quiz[questionCount].answerchoices.forEach((item) => {
        var li = document.createElement("li");
        li.innerText = item;
        answerlist.appendChild(li);
    })
    // listen for response
    answerlist.addEventListener("click", function (event) {
        if (quiz[questionCount].rightanswer == event.target.innerText) {
            alert("correct!");
            questionCount++;
            if (questionCount > quiz.length || timerCount <= 0) { }

        } else {
            alert("GAME OVER!");
        } else {
            alert("Incorrect!");
            questionCount++;
            timerCount -= 3;
            if (questionCount > quiz.length || timerCount <= 0) {

            } else {

                renderquestion();
            }
        }
})
} 
