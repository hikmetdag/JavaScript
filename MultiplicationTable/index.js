
let num1=Math.ceil(Math.random()*10)
let num2=Math.ceil(Math.random()*10)
const questionEl=document.getElementById('question')
const formEl=document.getElementById('form')
const inputEl=document.getElementById('input')
const scoreEl=document.querySelector('.score')



let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreEl.innerText=`Score:${score}`
questionEl.innerText=`What is ${num1} multiplied by ${num2} `
const correctAns=num1*num2;


formEl.addEventListener("submit",()=>{
    const userAnswer= +inputEl.value;
    
    if(correctAns===userAnswer){
        score++;
      upLocalStorage();
    }
    else{
        score--;
        upLocalStorage();
    }

});

function upLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

