var navbare = document.querySelector('ul')
var li = document.querySelector('.part')


window.addEventListener('scroll',function(){

if (window.scrollY > 50){

navbare.classList.add('nav-scroll')
navbare.classList.remove('nav-default')

li.classList.remove('part')
li.classList.add('part-scroll')

}
else{

    navbare.classList.add('nav-default')
    navbare.classList.remove('nav-scroll')
 
    li.classList.add('part')
    li.classList.remove('part-scroll')

}
}

)
var btn=document.querySelector('.flash')
var body=document.querySelector('body')



btn.addEventListener('click',function(){

    var cmood= body.getAttribute('mode');
    if(cmood=='light'){
        body.setAttribute('mode','dark')
    }else{
        body.setAttribute('mode','light') 
    
    }
    }
    
    
    )




