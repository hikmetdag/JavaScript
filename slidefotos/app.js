const nextEl=document.querySelector('.next')
const prevEl=document.querySelector('.prev')
const imgContainerEl=document.querySelector('.imgContainer')
const imgsEl=document.querySelectorAll('img')

let currentImg=1
let timeOut;
nextEl.addEventListener('click',()=>{
    currentImg++
    clearTimeout(timeOut);
    updateImg();

})

prevEl.addEventListener('click',()=>{
    currentImg--
    clearTimeout(timeOut);
    updateImg()

})
 


function updateImg(){
    if(currentImg>imgsEl.length){
        currentImg=1
    }
    else if(currentImg<1){
        currentImg=imgsEl.length
    }
imgContainerEl.style.transform= `translateX(-${(currentImg-1)*500}px)`
 timeOut= setTimeout(()=>{
    currentImg++
    updateImg()
 },1500)
}
updateImg()