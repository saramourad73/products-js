var navbare = document.querySelector('ul')
var li = document.querySelector('.part')


window.addEventListener('scroll',function(){

if (window.scrollY > 150){

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








var sora = document.querySelector('.first-section img')


var divs = [
    {
        phot:'https://media.istockphoto.com/id/1415172922/photo/jewelry-box-with-stylish-golden-bijouterie-on-white-table-flat-lay.jpg?s=612x612&w=0&k=20&c=8BeoLu9WoaALI3F53JP4qqN-xRkxMXLIfequatj1_a4=',
  

    },

    {
        phot:'https://www.optimonk.com/wp-content/uploads//types-of-product-images-08.jpg',
     

    },

    {
       phot:'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     

    }
]
var x=0
var conter=setInterval(() => {
    sora.src= divs[x].phot
    x++

    if(x >= divs.length)
    {
        x=0
    }
}, 3000);




var bttn=document.querySelector('.btt')
window.addEventListener('scroll',function(){

if(window.scrollY>300){
bttn.classList.remove('hide')

}else{

    bttn.classList.add('hide')  
}
}
)

bttn.addEventListener('click',function(){

scrollTo(0,0)



})







let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}