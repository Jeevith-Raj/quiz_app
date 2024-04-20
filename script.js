const questions = [
    {
        question:"Which is the largest animmal",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}

        ]
    },
    {
        question:"Which is the largest bird",
        answers:[
            {text:"crow",correct:false},
            {text:"ostrich",correct:true},
            {text:"flamingo",correct:false},
            {text:"hen",correct:false}

        ]
    },
    {
        question:"Which is the largest country",
        answers:[
            {text:"india",correct:false},
            {text:"Russia",correct:true},
            {text:"africa",correct:false},
            {text:"china",correct:false}

        ]
    }
];
const questionElement = document.getElementById("q");
const answer = document.getElementById("ans");
const next = document.getElementById("nextbtnlet ");

let currentquestionindex =0;
let score =0;
function startquiz(){
    currentquestionindex = 0;
    score = 0;
    next.innerHTML = "Next";
    showquestion();
}

function showquestion(){
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionElement.innerHTML = questionno +"." + currentquestion.question;
}

