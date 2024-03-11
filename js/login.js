document.addEventListener('DOMContentLoaded',function(){

    const loginForm=document.querySelector('#login');
    const registration=document.querySelector('#creatAccount');

    document.querySelector('#linkCreatAccount').addEventListener('click',e =>{
e.preventDefault();
loginForm.classList.add('hidden');
registration.classList.remove('hidden');


    })

    document.querySelector('#linkLogin').addEventListener('click',e =>{
        e.preventDefault();
        loginForm.classList.remove('hidden');
        registration.classList.add('hidden');
        
        
            })

});