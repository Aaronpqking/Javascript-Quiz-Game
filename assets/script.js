var startButton = document.querySelector("#start-button");
var hsButton = document.querySelector("#hsButton");
hsButton.addEventListener("click", displayHighscore);
startButton.addEventListener("click", function (event) {
  console.log("timer Started");
  timerStart();
  renderquestion();
  startButton.disabled = true;
});

var timer = document.querySelector(".timer");
var answerBox = document.querySelector(".answerContainer");
var infoBar = document.querySelector("#scroll-text");
var questionCount = 0;
var correct = false;
var scores = 0;
var hsarray = [];
var timerCount = 90;
var questionCount = 0;
var correct = false;
var score = document.querySelector(".score");
    score = 0;
var quiz = [
  {
    question: "Javascript is a programing language:",
    rightanswer: "True",
    answerchoices: ["True", "False"],
  },
  {
    question: "which of these animals is a mammal?",
    rightanswer: "Camel",
    answerchoices: ["goldfish", "Camel", "owl"],
  },
  {
    question: "Which of these are not a Javascript data type?",
    rightanswer: "container",
    answerchoices: ["boolean", "array", "string", "number", "container"],
  },
  {
    question: "Which HTML tag do we use to recognize JavaScript?",
    rightanswer: "<script>",
    answerchoices: ["<jQuery>", "<js>", "<code>", "<script>"],
  },
  {
    question: "JavaScript Can only be written in JavaScript",
    rightanswer: "False",
    answerchoices: ["True", "False"],
  },
  {
    question: "Choose the proper symbols to create an array",
    rightanswer: "[]",
    answerchoices: ["[  ]", "{  }", "(  )", "<  >"],
  },
  {
    question: "How does a for loop start?",
    rightanswer: "for (i=0; i <= 5; i++)",
    answerchoices: [
      "for (i=0; i <= 5; i++)",
      "for() = i++",
      "for i(i=0; i > 5; i--)",
      "for(i)= i++",
    ],
  },
  {
    question: "How do you comment in JavaScript?",
    rightanswer: "//comment",
    answerchoices: ["<comment>", '**"comment"**', "//comment", "comment:"],
  },
  {
    question: "Java is shorthand for JavaScript",
    rightanswer: "False",
    answerchoices: ["True", "False"],
  },
];

function timerStart() {
  var timerInterval = setInterval(function () {
    timerCount--;
    timer.innerHTML = timerCount;

    if (timerCount <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

var questionprompt = document.querySelector(".question-box");
var quizComplete = document.querySelector(".quiz-complete-screen");
var answerlist = document.createElement("div");
var highScoreScreen = document.querySelector("#highscore-screen");


function renderquestion() {
  hsButton.disabled = true;
  questionprompt.style.display = "block";
  highScoreScreen.style.display = "none";
  quizComplete.style.display = "none";
  questionprompt.innerHTML = quiz[questionCount].question;
  answerBox.appendChild(answerlist);
  answerlist.className= "list-group";
  answerlist.setAttribute("id", "answerlist");

 

  for (var i = 0; i < quiz[questionCount].answerchoices.length; i++) {
    var li = document.createElement("a");
    li.innerText = quiz[questionCount].answerchoices[i];
    li.className = "list-group-item list-group-item-action ";
    li.style.textAlign = "center";
    li.style.backgroundColor = "#FF7700";
    li.style.fontSize = "x-large";
    // li.style.fontWeight = "bold";
    answerlist.appendChild(li);
  }

  answerlist.addEventListener("click", function mouseClick(event) {
    if (quiz[questionCount].rightanswer == event.target.innerText) {
      infoBar.innerText = "CORRECT!";
      infoBar.style.backgroundColor = "green";
      correct = true;
      console.log("clicked");
    } else {
      infoBar.innerText = "INCORRECT";
      infoBar.style.backgroundColor = "red";
      correct = false;
    }
    this.removeEventListener("click", mouseClick);
    nextQuestion();
  });
}

function nextQuestion() {
  questionprompt.innerHTML = "";
  answerlist.innerHTML = "";


  if (correct == true) {
    score = score + 100;
  } else {
    score= score - 25;
    timerCount -= 3;
  }
  // questionCount += 1;
  questionCount += 1;
  if (questionCount < quiz.length && timerCount > 0) {
    renderquestion();
  } else {
    endGame();
  }
}
//bug: endGame doesn't end game if last question is left unanswered until after button click.
function endGame() {
  timerCount = 0;
  timer.innerHTML = timerCount;
  questionprompt.style.display = "none";
  highScoreScreen.style.display = "none";
  quizComplete.style.display = "block";


  infoBar.style.backgroundColor = "white";
  infoBar.innerHTML = "You scored " + score + " points!";

}
function saveHighScore() {
  var input = document.getElementById("initials").value;

  var obj = {
    score: score,
    name: input,
  };

  hsarray = JSON.parse(localStorage.getItem("highscore"));
  console.log(hsarray);
  if (Array.isArray(hsarray)) {
    hsarray.push(obj);
  } else {
    hsarray = [];
    hsarray.push(obj);
  }

  bubbleSort(hsarray);
  console.log(bubbleSort);
  localStorage.setItem("highscore", JSON.stringify(hsarray));
  location.reload();
//  displayHighscore();
}
// Bryan's sort function
// var sortLesson = [12,342,534,5,1000];
// sortLesson.sort(function (a,b){
//     return a-b;
// });
// console.log(sortLesson);
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1].score > arr[j].score) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

function displayHighscore() {
  startButton.disabled = false;
  questionprompt.style.display = "none";
  highScoreScreen.style.display = "block";
  quizComplete.style.display = "block";
  // scores.className = "list-group-flush";
  hsarray = JSON.parse(localStorage.getItem("highscore"));

  for (var i = 0; i < hsarray.length; i++) {
    var li = document.createElement("a");
    li.innerText = i+1 + ". " + hsarray[i].name + " " + " " + hsarray[i].score;
    li.style.textAlign = "center";
    li.style.backgroundColor = "white";
    li.style.fontSize = "x-large";
    li.className = "list-group-item";
    document.getElementById("scores").appendChild(li);

  }
}

// Bryan's sort function
// var sortLesson = [12,342,534,5,1000];
// sortLesson.sort(function (a,b){
//     return a-b;
// });
// console.log(sortLesson);

//  {

//     var obj = {
//       score: score,
//       name: input.val()
//     }
// //push to local storage
//       arry.push(obj)

// localStorage.setItem("server", array2);
// } else
//   //this function displays score/prompts for initials/displays it added to highscore
//   var obj = {
//     score: score,
//     name: input.val()
//   }
// //push to local storage
//   array2()
//     arry.push(obj)

//   localStorage.setItem("server", array2);
//   function displayScore() {
//   }
