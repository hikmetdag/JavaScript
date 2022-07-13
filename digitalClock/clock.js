var hour=document.querySelector('.hours')
var minute=document.querySelector('.minutes')
var seconds=document.querySelector('.seconds')
var ampmEl=document.querySelector('.ampm')

function clockPrgrm(){
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let ampm='PM'


if(h>12){
    h=h-12
    ampm='PM'
}

h=h<10 ? '0'+h:h;
s=s<10 ? '0'+s:s;
m=m<10 ? '0'+m:m;

hour.innerText=h;
minute.innerText=m;
seconds.innerText=s;
ampmEl.innerHTML=ampm;





setTimeout(()=>{clockPrgrm()},1000)

}
clockPrgrm();