var h1 = document.querySelector("h1")
var optionsEl = document.getElementById('options')
var index = 0
var score = 0
var scoreEl = document.getElementById('.score')
var timerEl = document.getElementById('timer')
var sec = 45;



var questions = [
    {
        question: "Beginner JavaScript Quiz",
        options: ['Start Quiz!'],
        answer: 'Start Quiz'
    },
    {
        question: "Do Java and JavaScript mean the same thing?",
        options: ['Why yes of course, they both have Java in them', 'Absolutely not, if they were the same they would have the same name.', 'They are different, but they are interchangable.', 'They are just different versions of the same thing.'],
        answer: 'Absolutely not, if they were the same they would have the same name.'
    },

    {
        question: "How do you call a function in JavaSctipt?",
        options: ['You ask for its phone number, and hope it gies it to you.', 'You write function.functionname().', 'Wite functionname().', 'Use the call() function.'],
        answer: 'Wite functionname().'
    },

    {
        question: "How would you get an element by its id in JavaScript?",   
        options: ['myElement = document.getElementById("id01");', 'myElement = $("#id01");.', 'myElement = document.retrieveElementbyId("id01");.', 'myElement = &("#id01");.'],
        answer: 'myElement = document.getElementById("id01");'
    },

    {
        question: "What is the syntax for preventing a page from refreshing after a function runs?",
        options: ['function.preventRefresh();.', 'function.preventDefault();.', 'event.preventRefresh();.', 'event.preventDefault();.'],
        answer: 'event.preventDefault();.'
    },
];

function timer(){
    sec = 45;
    var textUpdate = false
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec + " seconds";
        sec--;
        if (sec == -2) {
            saveScore()
            textUpdate = true
        }
        if (textUpdate) {
            clearInterval(timer);
        }
    }, 1000);
}

 

 function renderQuestions() {
    h1.innerText = questions[index].question
    optionsEl.innerHTML = ""

    for (var i = 0; i < questions[index].options.length; i ++) {
        var li = document.createElement('ol')
        var buttons = document.createElement('button')
        var option = questions[index].options[i]
        var answers = questions[index].answer
        answers.innerText = questions[index].answer
        li.innerText = ''
        buttons.innerText = option
        optionsEl.appendChild(li), optionsEl.appendChild(buttons)

        buttons.addEventListener('click', function() {
            console.log(this.innerText)
            if (this.innerText == "Start Quiz!"){
                timer()
            }
            if (this.innerText == answers) {
                score ++
                //scoreEl.innerText == score
                document.getElementById("score").textContent=score;
                console.log(scoreEl)
                index ++
                sec += 5
                renderQuestions()
            } else {
                index ++
                sec -= 5
                renderQuestions()
            }
            if (index == 4) {
                saveScore()
            }
            console.log(score)
            console.log(buttons.innerText)
            console.log(answers)
            console.log(index)
        })
 }
}



function saveScore() {
    var initials = prompt("Please enter first and last initial.")
    localStorage.setItem("Initals", initials)
    localStorage.setItem("Score", score)
}




renderQuestions()