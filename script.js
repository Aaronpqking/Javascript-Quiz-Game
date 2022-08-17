var startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function (event) {
  console.log("timer Started");
  timerStart();
  renderquestion();
  startButton.disabled = true;
});

var timer = document.querySelector(".timer");
var answerBox = document.querySelector(".answerContainer");
var endMessage = document.querySelector("#scroll-text");
<<<<<<< HEAD
var timerCount = 5;
var questionCount = 0;
var correct = false;
var score = 0;
var hsarray = [];
=======
var timerCount = 90;
var questionCount = 0;
var correct = false;
var score = document.querySelector(".score");
    score = 0;
>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
var quiz = [
  {
    question: "Javascript is a programing language",
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
<<<<<<< HEAD
      endGame();
=======
>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
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

  answerlist.addEventListener("click", function mouseClick(event) {
    if (quiz[questionCount].rightanswer == event.target.innerText) {
      alert("CORRECT!");
      correct = true;
<<<<<<< HEAD
=======
      console.log("clicked");
>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
    } else {
      alert("Incorrect");
      correct = false;
    }
    this.removeEventListener("click", mouseClick);
    nextQuestion();
  });
}

function nextQuestion() {
  questionprompt.innerHTML = "";
  answerlist.innerHTML = "";

<<<<<<< HEAD
=======


>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
  if (correct == true) {
    score = score + 100;
  } else {
    timerCount -= 3;
  }
<<<<<<< HEAD
  // questionCount += 1;
=======
  questionCount += 1;
>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
  if (questionCount < quiz.length && timerCount > 0) {
    renderquestion();
  } else {
    endGame();
  }
}
//bug: endGame doesn't end game if last question is left unanswered until after button click.
function endGame() {
  timerCount = 0;
  questionprompt.style.display = "none";
  quizComplete.style.display = "block";

<<<<<<< HEAD
  document.getElementById("dis-score").innerHTML = "Your score: " + score;
=======
  score.innerText = score;
    answerlist.appendChild(li);
  
  var input = document.getElementById("score");
  localStorage.setItem("server", input.val());
  //this function displays score/prompts for initials/displays it added to highscore
>>>>>>> ab01a4763195490691f7370aa41cf979057ebcea
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

  displayHighscore();
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

  quizComplete.style.display = "none";

  var highScoreScreen = document.getElementById("highscore-screen");

  highScoreScreen.style.display = "block";
  var li = document.createElement("li");
  li.innerText = hsarray[0].name;
  document.getElementById("scores").appendChild(li);
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
