const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];  

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll('.answer');
const question=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text" );
const submitBtn=document.getElementById("submitBtn");
let currentQuestion=0;

let score=0;
function loadQuiz()
{
    deselectAnswers(); 
    question.innerText=quizData[currentQuestion].question;
    a_text.innerText=quizData[currentQuestion].a;
    b_text.innerText=quizData[currentQuestion].b;
    c_text.innerText=quizData[currentQuestion].c;
    d_text.innerText=quizData[currentQuestion].d;
    // a_text="cxt";
    // console.log()
    
}
loadQuiz();
function getSelected()
{
    let answer=undefined;
    answerEls.forEach(answerEl=>
        {
               if(answerEl.checked) {
   answer =answerEl.id;
               }
               
        });
        return answer
}
function deselectAnswers()
{
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    })
}
submitBtn.addEventListener("click",function()
{
    
    const answer=getSelected();
    console.log(answer);
    if(answer)
    {
        if(answer==quizData[currentQuestion].correct)
        {
            score++; 
        }
        currentQuestion++;
        if(currentQuestion>=quizData.length)
        {
        quiz.innerHTML=`<h2>You answered correctly ${score} out of ${quizData.length}  questions.</h2>
        
        <button onclick="location.reload()"
        >Reload
        </button>`;
        }
        else
       loadQuiz();
    }
    
});
