window.onload = init;
let form;
let language=true;
function init(){
    form = document.getElementsByClassName('main');
    document.querySelector('#sendInfo').addEventListener('click', (event) => {
        event.preventDefault();
        sendForm();
    });
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
async function sendForm() {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const requestBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    try {
        const response = await fetch("http://api.darksoulstrilogy.fun/forms", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        } else {
            alert('Reg done');
        }
    } catch (error) {
        alert(`Network error: ${error.message}`);
    }
}
