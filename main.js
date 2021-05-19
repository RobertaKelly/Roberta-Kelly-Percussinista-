window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 0); 
 });
 
 const menuBtn = document.querySelector('.menu-btn');
 const navigation = document.querySelector('.navigation');
 const navigationItens = document.querySelectorAll('.navigation a');
 
 menuBtn.addEventListener('click', () => {
     menuBtn.classList.toggle('active');
     navigation.classList.toggle('active');
 });
 
 navigationItens.forEach((navigationItens) =>{
    navigationItens.addEventListener('click', () => {
     menuBtn.classList.remove('active');
     navigation.classList.remove('active');
    })
 });
 
 const scrollBtn = document.querySelector('.scrollToTop-btn');
 
 window.addEventListener('scroll', function(){
     scrollBtn.classList.toggle('active', window.scrollY > 500)
 });
 
 scrollBtn.addEventListener('click', () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 });
 
 window.addEventListener('scroll', reveal);
 
 function reveal(){
     const reveals = document.querySelectorAll('.reveal');
 
     for(let i = 0; i < reveals.length; i++){
         const windowHeight = window.innerHeight;
         const revealTop = reveals[i].getBoundingClientRect().top;
         const revealPoint = 50;
 
         if( revealTop < windowHeight - revealPoint){
             reveals[i].classList.add('active');
         }
     }
 }