let aux = new Date().getFullYear();
const quizQuestion = [
    {
        question: 'What is the most used programmig language used in '+aux+' ?',
        a: 'C#',
        b: 'Java',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'

    },{
        question: 'What is the famous mother of others programming languages?',
        a: 'C++',
        b: 'C',
        c: 'Kotlin',
        d: 'Fortram',
        correct: 'b'
    }, {
        question: 'Where is located New Zeland?',
        a: 'Oceania',
        b: 'America',
        c: 'Europe',
        d: 'Asia',
        correct: 'a'
    }, {
        question: 'Whom painted the Mona Lisa?',
        a: 'Leonardo da Vinci',
        b: 'Vicent van Gogh',
        c: 'Pablo Picasso',
        d: 'Michelangelo',
        correct: 'a'
    }
    , {
        question: 'What does HTML stand for?',
        a: 'Human toll for Management',
        b: 'Cascading Style Sheet',
        c: 'Hypertext Markup Language',
        d: 'Json Object Notation',
        correct: 'c'
    }
]
const thequestion = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currenctQuestion = 0;
loadQuiz();
let aux_answer= undefined;
let score = 0;
let aux_valid= 0;
function getSelect(){

    answers.forEach((answer) => {
        if(answer.checked){
            aux_answer = answer.id;
            aux_valid = 1;
        }
    });
}
function deleteSelect(){
    answers.forEach((answer) => {
        if(answer.checked){
            answer.checked=false;
            aux_valid =0;
        }
    });
}

function loadQuiz(){
    
    const pointer = quizQuestion[currenctQuestion];
    thequestion.innerText = pointer.question;
    a_text.innerText=pointer.a;
    b_text.innerText=pointer.b;
    c_text.innerText=pointer.c;
    d_text.innerText=pointer.d;

    a_text.style.color = 'rgb(0, 238, 255)';
    b_text.style.color = 'rgb(0, 238, 255)';
    c_text.style.color = 'rgb(0, 238, 255)';
    d_text.style.color = 'rgb(0, 238, 255)';

}

function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}

async function messageQuiz(){
    await sleep(500);
    if (score==5){
        window.alert("Congratulations, you hit every question.\nYour Score is the Best!!");
    }
    else if(score>=3&&score<5){
    window.alert("Congratulations, this score is good!!");
    }else if(score>0&&score<3){
    window.alert("Your score is not satisfactory, work harder!!");
    }else if(score==0){
    window.alert("Ridiculos score, apply yourself!!");
    }
}

document.querySelector('#input').addEventListener('click',Button_clicked);
function Button_clicked(){
    getSelect();
    if(aux_answer && aux_valid == 1){
        if(aux_answer===quizQuestion[currenctQuestion].correct){
            score++;
        }
        currenctQuestion++;
    if(currenctQuestion<quizQuestion.length){
        deleteSelect();
    loadQuiz();
    }else{
        
        quiz.innerHTML = `<h2>Your score is:  ${score}.</h2>
        <button onclick="location.reload()" >Try Again</button>`;
        messageQuiz();
    }
}
}


