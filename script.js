var startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function (event) {
    
  console.log("timer Started")
  timerStart();
  renderquestion();
  startButton.disabled = true;
    })

var timer = document.querySelector('.timer');
var answerBox = document.querySelector('.answerContainer');
var endMessage = document.querySelector('#scroll-text');
var timerCount = 90;
var questionCount = 0;
var correct = false;
var score = 0;
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
    },
    {
        question: "Which HTML tag do we use to recognize JavaScript?",
        rightanswer: "<script>",
        answerchoices: ["<jQuery>", "<js>", "<code>", "<script>"]
    },
    {
        question: "JavaScript Can only be written in JavaScript",
        rightanswer:"False",
        answerchoices: ["True", "False"]    
    },
    {
        question: "Choose the proper symbols to create an array",
        rightanswer: "[]",
        answerchoices: ["[  ]", "{  }", "(  )", "<  >"]
    },
    {
        question: "How does a for loop start?",
        rightanswer: "for (i=0; i <= 5; i++)",
        answerchoices: ["for (i=0; i <= 5; i++)","for() = i++", "for i(i=0; i > 5; i--)", "for(i)= i++",]
  }, 
  {
        question: "How do you comment in JavaScript?",
        rightanswer: "//comment",
        answerchoices: ["<comment>","**\"comment\"**", "//comment", "comment:",]
}, {
         question: "Java is shorthand for JavaScript",
         rightanswer: "False",
         answerchoices: ["True","False"]
}, 
]

function timerStart() {
  
    var timerInterval = setInterval(function() {
      timerCount--;
      timer.innerHTML = timerCount;
  
      if(timerCount <= 0) {
       
          clearInterval(timerInterval);
      }
  
    }, 1000);
}
  
var questionprompt = document.querySelector(".questionBox");    
var quizComplete = document.querySelector(".quiz-complete-screen");
  
var answerlist = document.createElement("ul");


function renderquestion() {
  questionprompt.innerHTML = quiz[questionCount].question;
  answerlist.setAttribute("id", "answerlist");
  answerBox.appendChild(answerlist);
  
  for (var i = 0; i < quiz[questionCount].answerchoices.length; i++) {
    var li = document.createElement("li");
    li.innerText = quiz[questionCount].answerchoices[i];
    answerlist.appendChild(li);
  }
 
  answerlist.addEventListener("click", function mouseClick (event) {
    if (quiz[questionCount].rightanswer == event.target.innerText) {
      alert("CORRECT!");
      correct = true;
      console.log("clicked")
    } else {
      alert("Incorrect");
      correct = false;
    }
      this.removeEventListener('click', mouseClick);
    nextQuestion();
  })
}    
 
function nextQuestion() {

  questionprompt.innerHTML = "";
  answerlist.innerHTML = "";

  // while (questionprompt.firstChild) {
    // questionprompt.removeChild(questionprompt.firstChild);
  // }
  // while (answerlist.firstChild) {
    // answerlist.removeChild(answerlist.firstChild);
  // }
      
  if (correct == true) {
    score = score + 100;
  } else {
    timerCount -= 3;
  }
  console.log("Hi Andrew!")
  questionCount +=1;
  if (questionCount < quiz.length && timerCount > 0) {


    
    renderquestion();
    
  } else {
    endGame();
  }
}

function endGame() {
  timerCount = 0;
  questionprompt.style.display = "none";
  quizComplete.style.display = "block";


  
  
//this function displays score/prompts for initials/displays it added to highscore

}
