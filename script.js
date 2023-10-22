let questions = [
  {
    question: "What is displayed in an HTML file in the browser is not a lie?",
    answer_1: "< QUOTE>There is a comment here< /QUOTE>",
    answer_2: "< U>This text is invisible< /U>",
    answer_3: "< TT>This text is double underlined< /TT>",
    answer_4: "< B>This text is bold< /B>",
    right_answer: 4,
  },
  {
    question: "What does HTML mean?",
    answer_1: "Hypertext Mark Language",
    answer_2: "Hypertext Mark Look",
    answer_3: "Hypertext Markup Language",
    answer_4: "Hypertext Markup Look",
    right_answer: 3,
  },
  {
    question: "What is a possible extension for an HTML file?",
    answer_1: "*.tml",
    answer_2: "*.ht",
    answer_3: "*.web",
    answer_4: "*.htm",
    right_answer: 4,
  },
  {
    question: "What helps to improve the style of HTML files?",
    answer_1: "CSS",
    answer_2: "CPI",
    answer_3: "JScript",
    answer_4: "XHTML",
    right_answer: 1,
  },
  {
    question: "Is there a character limit in HTML files?",
    answer_1: "Yes 250 tags",
    answer_2: "Yes 100,000 characters",
    answer_3: "No, if you use the DIV tag",
    answer_4: "No",
    right_answer: 4,
  },
  //CSS Questions
  {
    question: "Which of the following is not a valid spelling for the colour white?" ,
    answer_1: "rgba(255,255,255,1)",
    answer_2: "#FFF",
    answer_3: "#ff",
    answer_4: "white",
    right_answer: 3,
  },
  {
    question: "What does the CSS declaration orphans: 3 do?",
    answer_1: "Nothing, with CSS3 the property was deprecated.",
    answer_2: "Nothing. The property is invented",
    answer_3: "Joins 3 tables into one if they are empty",
    answer_4: "With continuous text, the text is separated so that at least 3 lines are printed at the top of the 2nd sheet.",
    right_answer: 4,
  },
  {
    question: "Which property has been around since CSS 2",
    answer_1: "opacity",
    answer_2: "quotes",
    answer_3: "text-shadow",
    answer_4: "background-clip",
    right_answer: 2,
  },
  {
    question: "What influence does the :empty pseudo-attribute have?",
    answer_1: "This deletes all sub-elements from an HTML element.",
    answer_2: "This can be used to check whether the user has made entries in a field.",
    answer_3: "This deletes entries in forms",
    answer_4: "Empty HTML elements can be accessed via this, such as empty table cells",
    right_answer: 4,
  },
  {
    question: "What is not the same as margin: 10px?",
    answer_1: "margin: 10px 10px 10px",
    answer_2: "margin: 10",
    answer_3: "margin: 10px 10px",
    answer_4: "margin: 10px 10px 10px 10px",
    right_answer: 4,
  },
  //JavaScript Questions
  {
    question: "Who doesn't fit in here?",
    answer_1: "AppleScript",
    answer_2: "ActionScript",
    answer_3: "CoffeeScript",
    answer_4: "LiveScript",
    right_answer: 1,
  },
  {
    question: "Which of the following logical operators does not exist?",
    answer_1: "||",
    answer_2: "!=",
    answer_3: "<=",
    answer_4: "< !",
    right_answer: 4,
  },
  {
    question: "What is the difference between == and ===?",
    answer_1: " == is the opposite of === ",
    answer_2: " == only checks the value, === also checks the data type",
    answer_3: " == does not exist, === checks the value",
    answer_4: "== checks the value, === checks the value twice",
    right_answer: 2,
  },
  {
    question: "What does the break statement do?",
    answer_1: "It continues a loop or switch instruction",
    answer_2: "It breaks loop or switch",
    answer_3: "It breaks an if evaluation",
    answer_4: "It continues an if statement",
    right_answer: 2,
  },
  {
    question: "How is a variable defined as an array?",
    answer_1: "let name = ()",
    answer_2: "let name = []",
    answer_3: "let name = array",
    answer_4: "let name = {}",
    right_answer: 2,
  },
];


let rightQuestions = 0;
let currentQuestion = 0;


let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/fail.mp3");
let AUDIO_NEXT = new Audio("audio/next-question.mp3");
let AUDIO_RESTART = new Audio("audio/restart-game.mp3");
let AUDIO_START = new Audio("audio/start-game.mp3"); // TODO


function startGame() {
  document.getElementById("questionCountainer").style =
    "justify-content: flex-start;";
  document.getElementById("bg-img").style = "background-image: none;";
  document.getElementById("start").classList.add("d-none");
  document.getElementById("v-pills-profile-tab").style =
    "margin-left: 13px;  margin-right: 13px;  background: green;";
  AUDIO_START.play();
  showQuestion();
}


function showQuestion() {
  document.getElementById("questionCountainer").classList.remove("d-none");
  document.getElementById("all-questions").innerHTML = questions.length;

  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateToNextQuestion();
    updateProgrssBar();
  }
}


function gameIsOver() {
  return currentQuestion >= questions.length;
}


function updateProgrssBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progressBar").innerHTML = `${percent} %`;
  document.getElementById("progressBar").style = `width: ${percent}%;`;
}


function updateToNextQuestion() {
  let question = questions[currentQuestion];
  if (currentQuestion >= 5) {
    switchToNextSection();
  }
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}


function switchToNextSection() {
  if (currentQuestion === 5) {
    document.getElementById("v-pills-profile-tab").style = "";
    document.getElementById("v-pills-messages-tab").style = "margin-left: 13px;  margin-right: 13px;  background: green;";
  }
  if (currentQuestion === 10) {
    document.getElementById("v-pills-messages-tab").style = "";
    document.getElementById("v-pills-settings-tab").style = "margin-left: 13px;  margin-right: 13px;  background: green;";
  }
}


function showEndScreen() {
  if (currentQuestion === 15) {
    document.getElementById("v-pills-settings-tab").style = "";
    document.getElementById("v-pills-finish-tab").style =
      "margin-left: 13px;  margin-right: 13px;  background: green;";
  }
  document.getElementById("body-block").style = "overflow: hidden;";
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none;";
  document.getElementById("questionText").style = "display: none;";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
}



function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection;
  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  if (selectedQuestionNumber == idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  disabledButtonsAfterClick();
  document.getElementById("nextButton").disabled = false;
}


function disabledButtonsAfterClick() {
  document.getElementById("answerBtn1").style = "pointer-events: none";
  document.getElementById("answerBtn2").style = "pointer-events: none";
  document.getElementById("answerBtn3").style = "pointer-events: none";
  document.getElementById("answerBtn4").style = "pointer-events: none";
}


function abledButtonsAfterClick() {
  document.getElementById("answerBtn1").style = "pointer-events: ";
  document.getElementById("answerBtn2").style = "pointer-events: ";
  document.getElementById("answerBtn3").style = "pointer-events: ";
  document.getElementById("answerBtn4").style = "pointer-events: ";
}


function nextQuestion() {
  abledButtonsAfterClick();
  document.getElementById("nextButton").disabled = true;
  AUDIO_NEXT.play();
  currentQuestion++;
  resetAnswerButtons();
  showQuestion();
}


function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}


function restartGame() {
  document.getElementById("v-pills-profile-tab").style =
    "margin-left: 13px;  margin-right: 13px;  background: green;";
  document.getElementById("v-pills-finish-tab").style = "";
  document.getElementById("endScreen").style = "display: none;";
  document.getElementById("questionBody").style = "";
  document.getElementById("questionText").style = "";
  rightQuestions = 0;
  currentQuestion = 0;
  AUDIO_RESTART.play();
  showQuestion();
}
