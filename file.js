let marked = document.querySelector('#marked');
let notification = document.querySelectorAll('.notif');
let num = document.querySelector('.nums');
let count=num.innerHTML;

marked.addEventListener('click', function(){
    notification.forEach(e=>{
        e.style.backgroundColor='white';
        num.innerHTML=0;
    })   
})

notification.forEach(j => {
    j.addEventListener('click', function(){
        if(!(j.classList.contains('clicked'))){
            if(num.innerHTML > 0){
        j.style.backgroundColor='white';
        j.classList.add('clicked');
       num.innerHTML -=1;
        }}
    })
})
