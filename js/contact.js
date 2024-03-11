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



var btn=document.querySelector('button')
var feedback=document.querySelector('textarea')
var form=document.querySelector('form')
btn.addEventListener('click',function(){

var Option=feedback.value

var newtextarea=document.createElement('div')
form.appendChild(newtextarea)
newtextarea.innerHTML=Option
newtextarea.style.width='400px'
newtextarea.style.height='150px'
newtextarea.style.marginTop='60px'
newtextarea.style.backgroundColor='white'
newtextarea.style.color='black'
newtextarea.style.fontSize='25px'
newtextarea.style.border='2px black solid'
newtextarea.style.borderRadius='10px '









}
)