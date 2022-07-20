
var pos=0, test,test_status,question,choice,choices,chA,chB,chC,correct=0;
var questions=[
    ['What is 2x3 ?','4','5','6','C'],
    ['What is 2x7 ?','14','5','6','A'],
    ['What is 2x13 ?','4','26','6','B'],
    ['What is 12x3 ?','4','36','6','B']
];


function _(x){
    return document.getElementById(x)
    }
    test=_('test')
    test.style.textAlign='center'
    test.style.fontSize='30px'
    test.style.color='red'
    //question.style.color='green'
   

function renderQuestion(){
    
    test_status=_('test_status')

    if(pos>=questions.length){
      test.innerHTML='<h2> You got '+correct+" of "+questions.length+' question correct </h2>'
      test_status.innerHTML='<h1>Test complete</h1>'
      pos=0
      correct=0  
      return false
    
       }
    
    test_status.innerText = 'Question ' +(pos+1)+" of " +questions.length;
    
  
    question=questions[pos][0];

    chA=questions[pos][1];
    chB=questions[pos][2];
    chC=questions[pos][3];
    test.innerHTML='<h3>'+question+'</h3>'
    test.innerHTML+='<input type="radio" name="choices" value="A">'+chA+'<br>'
    test.innerHTML+='<input type="radio" name="choices" value="B">'+chB+'<br>'
    test.innerHTML+='<input type="radio" name="choices" value="C">'+chC+'<br> <br>'
    test.innerHTML+='<button onclick="checkAnswer()">Submit Answer</button>'
  
}

function checkAnswer(){
  choices=document.getElementsByName('choices');
  for(let i=0; i<choices.length; i++){
    if (choices[i].checked == true){
        choice=choices[i].value;
    }
  }
  if(choice===questions[pos][4]){
    correct++
  }
  pos++
  renderQuestion()
}

window.addEventListener('load',renderQuestion,false);
