const textareaEl=document.getElementById("textarea")
const totalEl=document.getElementById('counterTotal')
const remainingEl=document.getElementById('counterRemaining')

remainingEl.innerHTML= textareaEl.getAttribute("maxLength");

textareaEl.addEventListener("keyup",()=>{
counterUp();
})

function counterUp(){
   const x= totalEl.innerHTML=textareaEl.value.length;
    
  const y=  remainingEl.innerHTML= textareaEl.getAttribute("maxLength")-x

    if(y<20){
        remainingEl.style.color='red'

    }

}


