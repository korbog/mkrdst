window.onload = init;
let form;
let language=true;
function init(){
    form = document.getElementsByClassName('main');
}
function switchLanguage(){
    if (language==true){
        language=false;
        document.querySelectorAll('.ukrText').forEach(function(el){el.style.display = 'none';});
        document.querySelectorAll('.engText').forEach(function(el){el.style.display = 'flex';});
        document.querySelector('.switchLang').style.justifyContent = 'end';
        document.querySelector('.ua').style.filter = 'grayscale()';
        document.querySelector('.en').style.filter = 'none';
    }
    else if (language==false){
        language=true;
        document.querySelectorAll('.ukrText').forEach(function(el){el.style.display = 'flex';});
        document.querySelectorAll('.engText').forEach(function(el){el.style.display = 'none';});
        document.querySelector('.switchLang').style.justifyContent = 'start';
        document.querySelector('.en').style.filter = 'grayscale()';
        document.querySelector('.ua').style.filter = 'none';
    }
}
let burgerCount=0;
function burgerOpen(){
    if(burgerCount==0){
        document.querySelector('.burger').style="background-image:url('images/krestik.png')";
        document.querySelector('.burgerWindow').style="display:flex";
        burgerCount=1;
    }
    else{
        document.querySelector('.burger').style="background-image:url('images/burger.png')";
        document.querySelector('.burgerWindow').style="display:none";
        burgerCount=0;
    }
}
