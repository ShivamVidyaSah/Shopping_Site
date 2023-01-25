// js for navbar

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// js for Login form

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

  function register(){
    RegForm.style.transform= "translateX(0px)";
    LoginForm.style.transform= "translateX(0px)";
    Indicator.style.transform= "translateX(100px)";
  }

  function login(){
    RegForm.style.transform= "translateX(300px)";
    LoginForm.style.transform= "translateX(300px)";
    Indicator.style.transform= "translateX(0px)";
  }