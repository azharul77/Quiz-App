const quizDB = [
    {
        question: "Q1: MS-Word is an example of?",
        a: "An operating system",
        b: "A processing device",
        c: "Application software",
        d: " An input device",
        ans: "ans3"
    },
    {
        question: "Q2: Ctrl, Shift and Alt are called .......... keys.",
        a: "modifier",
        b: "function",
        c: "alphanumeric",
        d: "adjustment",
        ans: "ans1"
    },
    {
        question: "Q:3 A computer cannot boot if it does not have the.... ",
        a: "Compiler",
        b: "Loader",
        c: "Operating system",
        d: "Assembler",
        ans: "ans3" 
    },
    {
        question: "Q4: .......is the process of dividing the disk into tracks and sectors ",
        a: "Tracking",
        b: "Formatting",
        c: "Crashing",
        d: "Allotting",
        ans: "ans2"  
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
   const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d; 
}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });

    return answer;
};
const clearAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;
    };

     questionCount++;
     
     clearAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length} <h3> 
        <button class = "btn" onclick= "location.reload()">Play Again </button>`;
     
        showScore.classList.remove('scoreArea');
    }
});