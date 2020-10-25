//query selectors:
//var form
var affirmationSelection = document.querySelector("#affirmation");
var mantraSelection = document.querySelector("#mantra");
var messageDisplay = document.querySelector(".message");
var messageDisplayBox = document.querySelector(".message-display-box")
var bell = document.querySelector(".bell");
var addMessageForm = document.querySelector(".add-message-form");
var userType = document.querySelector("#user-type");
var userMessage = document.querySelector("#user-message");

var messageBtn = document.querySelector(".message-button");
var addMessageBtn = document.querySelector(".message-add-button");
var submitBtn = document.querySelector("#submit-button");

//event listeners:
messageBtn.addEventListener("click", generateMessage);
addMessageBtn.addEventListener("click", addMessage);
submitBtn.addEventListener("click", addUserMessage)
//global variables:
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

var message;

//functions:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMessage() {
  event.preventDefault();
  displayMessage();
  hideBell();
}

function displayMessage() {
  var selectMessage = document.getElementsByName("select-message");
  for (var i = 0; i < selectMessage.length; i++) {
    if(selectMessage[i].checked) {
      message = selectMessage[i].value;
    }
  }
  if (message === "affirmation") {
    messageDisplay.innerText = `${affirmations[getRandomIndex(affirmations)]}`;
  } else if (message === "mantra") {
    messageDisplay.innerText = `${mantras[getRandomIndex(mantras)]}`
  }
}

function addMessage() {
  hideBell();
  showAddMessageForm();
}

function addUserMessage() {
  event.preventDefault();
  hideBell();
  checkUserType();
  checkUserMessage();
  addUserMessageToType();
  displayUserMessage();
}
function checkUserType() {
  if (userType.value != "affirmation" && userType.value != "mantra"){
    messageDisplayBox.insertAdjacentHTML('afterend', `<p>Please indicate type of message in field</p>`);
    document.getElementById("submit-button").disabled = true;
    return false;
  } else {
    return true;
  }
}
function checkUserMessage() {
  if (userMessage.value === "") {
    messageDisplayBox.insertAdjacentHTML('afterend', `<p>Please type message in field</p>`);
    document.getElementById("submit-button").disabled = true;
    return false;
  } else {
    return true;
  }
}
function addUserMessageToType() {
  //else message will be added to message array (affirmation or mantra)
}
function displayUserMessage() {
  //message will be displayed in the message box
}
//add/remove
function removeHide() {
  //toggle image view and message view
  //use for loop?
}

function hideBell() {
  bell.classList.add("hidden");

}

function showBell() {
  bell.classList.remove("hidden");
}

function showAddMessageForm() {
  addMessageForm.classList.remove("hidden");
}

function hideAddMessageForm() {
  addMessageForm.classList.add("hidden");
}

function showMessageDisplay() {
  message.classList.remove("hidden");
}

function hideMessageDisplay() {
  message.classList.add("hidden");
}
