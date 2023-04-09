var containerQuestionEl = document.getElementById("question-container");
var startButtonEl = document.getElementById("start")
var timerEl = document.getElementById("timer")
var time = 60
var titleEl = document.getElementById("title")
var instructionsEl = document.getElementById("instructions")
var hideEl = document.getElementById("hide")
var questionDescriptionEl = document.getElementById("question-description")
var questionEl = document.getElementById("question")
var question1El = document.getElementById("question-1")
var question2El = document.getElementById("question-2")
var question3El = document.getElementById("question-3")
var question4El = document.getElementById("question-4")

var questions = [
{
    q: 'Inside which HTML element do we put the JavaScript?',
    a: '1. <script>',
    choices: [{choice: '1. <script>'}, {choice: '2. <scripting>'}, {choice: '3. <js>'}, {choice: '4. <Javascript>'}]
},
{
    q: 'Where is the correct place to insert a JavaScript?',
    a: '2. Both the <head> section and the <body> section are correct',
    choices: [{choice: '1. The <head> section'}, {choice: '2. Both the <head> section and the <body> section are correct'}, {choice: '3. The <body> section'}]
},
{
    q: 'The external JavaScript file must contain the <script> tag.',
    a: '2. False',
    choices: [{choice: '1. True'}, {choice: '2. False'}]
},
{
    q: 'Which operator is used to assign a value to a variable?',
    a: '1. =',
    choices: [{choice: '1. ='}, {choice: '2. *'}, {choice: '3. -', choice: '4. X'}]
},
{
    q: 'Is JavaScript case-sensitive?',
    a: '1. Yes',
    choices: [{choice: '1. Yes'}, {choice: '2. No'}]
},
{
    q: 'How do you declare a JavaScript variable?',
    a: '1. var carName;',
    choices: [{choice: '1. var carName;'}, {choice: '2. variable carName;'}, {choice: '3. v carName;'}]
},
{
    q: 'What will the following code return: Boolean(10 > 9)',
    a: '2. true',
    choices: [{choice: '1. NaN'}, {choice: '2. true'}, {choice: '3. false'}]
},
];

function countDown () {
    time--;
    timerEl.textContent = time
    if (time <= 0) {
        clearInterval(interval);
        timerEl.textContent = "Time's up!";
    }


}

function handleClick() {
    var interval = setInterval(countDown, 1000)
    startButtonEl.style.display = "none"
    instructionsEl.style.display = "none"
    titleEl.style.display = "none"

}
start.addEventListener("click", handleClick);

// add the text that is needed for each button

// create a function that displays the questions and options