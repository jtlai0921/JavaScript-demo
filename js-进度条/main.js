const btn=document.getElementById('btn');
const myDiv=document.getElementById('myDiv');
let timer;
btn.addEventListener('click',()=>{
    myDiv.style.width='0';
    cancelAnimationFrame(timer);
    timer=requestAnimationFrame(function fn(){
        if(parseInt(myDiv.style.width)<500){
            myDiv.style.width=parseInt(myDiv.style.width)+5+'px';
            myDiv.innerHTML=parseInt(myDiv.style.width)/5+'%';
            timer=requestAnimationFrame(fn);
        }
        else{
            cancelAnimationFrame(timer);
        }
    });
})
