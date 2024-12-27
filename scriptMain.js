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


function bgSecondChange1(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybgds1.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS1').style="position:relative; height: 800px; width: 450px; padding-right:50px; transition: 0.5s; filter: none;";
    document.querySelector('.heroDS2').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
    document.querySelector('.heroDS3').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
}
function bgSecondChange2(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybgds2.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS2').style="position:relative; height: 800px; width: 450px; padding-right:50px; transition: 0.5s; filter: none;";
    document.querySelector('.heroDS1').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
    document.querySelector('.heroDS3').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
}
function bgSecondChange3(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybgds3.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS3').style="position:relative; height: 800px; width: 450px; padding-right:50px; transition: 0.5s; filter: none;";
    document.querySelector('.heroDS1').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
    document.querySelector('.heroDS2').style="height: 400; width: 200; opacity:25%; transition: 0.5s;";
}
function bgSecondReturn1(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybg3gray.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS1').style="margin-right: -100px; padding-bottom: 9vh; height: 600px; width: 300px; filter: grayscale(); transition: 0.5s;";
    document.querySelector('.heroDS2').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
    document.querySelector('.heroDS3').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
}
function bgSecondReturn2(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybg3gray.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS2').style="margin-right: -100px; padding-bottom: 9vh; height: 600px; width: 300px; filter: grayscale(); transition: 0.5s;";
    document.querySelector('.heroDS1').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
    document.querySelector('.heroDS3').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
}
function bgSecondReturn3(){
    document.querySelector('.bgSecond').style="background-image: url(images/dstrilogybg3gray.png); opacity:100%; transition:0.5s;";
    document.querySelector('.heroDS3').style="margin-right: -100px; padding-bottom: 9vh; height: 600px; width: 300px; filter: grayscale(); transition: 0.5s;";
    document.querySelector('.heroDS1').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
    document.querySelector('.heroDS2').style="height: 600px; width: 300px; opacity:100%; transition: 0.5s;";
}


let ds1block=0,ds2block=0,ds3block=0;
function chooseDS1(){
    if (ds1block==0){
        document.querySelector('.chooseDsBg1').style="box-shadow: inset 0px 0px 50px 5px #491e13; ";
        document.querySelector('.ds1LogoTitle').src="images/ds1logoblack.png";
        document.querySelector('.ds1LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds1block==1){
        document.querySelector('.ds1LogoTitle').src="images/ds1logoblack.png";
        document.querySelector('.ds1LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds1block==2){
        document.querySelector('.ds1LogoTitle').src="images/ds1logoblack.png";
        document.querySelector('.ds1LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
}
function chooseDS2(){
    if (ds2block==0){
        document.querySelector('.chooseDsBg2').style="box-shadow: inset 0px 0px 50px 5px #3e4b58; ";
        document.querySelector('.ds2LogoTitle').src="images/ds2logoblack.png";
        document.querySelector('.ds2LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds2block==1){
        document.querySelector('.ds2LogoTitle').src="images/ds2logoblack.png";
        document.querySelector('.ds2LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds2block==2){
        document.querySelector('.ds2LogoTitle').src="images/ds2logoblack.png";
        document.querySelector('.ds2LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
}
function chooseDS3(){
    if (ds3block==0){
        document.querySelector('.chooseDsBg3').style="box-shadow: inset 0px 0px 50px 5px #e2d054; ";
        document.querySelector('.ds3LogoTitle').src="images/ds3logoblack.png";
        document.querySelector('.ds3LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds3block==1){
        document.querySelector('.ds3LogoTitle').src="images/ds3logoblack.png";
        document.querySelector('.ds3LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
    else if(ds3block==2){
        document.querySelector('.ds3LogoTitle').src="images/ds3logoblack.png";
        document.querySelector('.ds3LogoTitle').style="transform:scale(1.1); cursor:pointer; transition:0.5s";
    }
}
function chooseDS1Active(){
    if(ds1block==0){
        document.querySelector('.chooseDsBg1').style="backdrop-filter: blur(5px);height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS1').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds2Person').src="images/chooseDS2pmini.png";
        document.querySelector('.ds3Person').src="images/chooseDS3pmini.png";
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds1Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.chooseDs1Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs1Button').style="display: flex;"; 
        ds1block=1;
        ds2block=2;
        ds3block=2;
    }
    else if(ds1block==1){
        document.querySelector('.chooseDsBg1').style="height:30vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS1').style="height:30vh; transition:0.5s ";
        document.querySelector('.chooseDsBg2').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:30vh;transition:0.5s ";
        document.querySelector('.chooseDS2').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:30vh ;transition:0.5s"; 
        document.querySelector('.ds2Person').src="images/chooseDS2p.png";
        document.querySelector('.ds3Person').src="images/chooseDS3p.png";
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds1Person').style="transform:scale(1); transition:0.5s;margin-bottom:0;";
        document.querySelector('.chooseDs1Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs1Button').style="display: none;"; 
        ds1block=0;
        ds2block=0;
        ds3block=0;
    }
    else if(ds1block==2){
        document.querySelector('.chooseDsBg1').style="height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS1').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds2Person').src="images/chooseDS2pmini.png";
        document.querySelector('.ds3Person').src="images/chooseDS3pmini.png";
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds1Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.ds1Person').src="images/chooseDS1p.png";
        document.querySelector('.chooseDs2Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs2Button').style="display: none;"; 
        document.querySelector('.chooseDs3Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs3Button').style="display: none;"; 
        document.querySelector('.chooseDs1Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs1Button').style="display: flex;"; 
        ds1block=1;
        ds2block=2;
        ds3block=2;
    }
}
function chooseDS2Active(){
    if(ds2block==0){
        document.querySelector('.chooseDsBg2').style="height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS2').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds1Person').src="images/chooseDS1pmini.png";
        document.querySelector('.ds3Person').src="images/chooseDS3pmini.png";
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds2Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.chooseDs2Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs2Button').style="display: flex;"; 
        ds1block=2;
        ds2block=1;
        ds3block=2;
    }
    else if(ds2block==1){
        document.querySelector('.chooseDsBg2').style="height:30vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS2').style="height:30vh; transition:0.5s ";
        document.querySelector('.chooseDsBg1').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:30vh;transition:0.5s ";
        document.querySelector('.chooseDS1').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:30vh ;transition:0.5s"; 
        document.querySelector('.ds1Person').src="images/chooseDS1p.png";
        document.querySelector('.ds3Person').src="images/chooseDS3p.png";
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds2Person').style="transform:scale(1); transition:0.5s;margin-bottom:0;";
        document.querySelector('.chooseDs2Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs2Button').style="display: none;"; 
        ds1block=0;
        ds2block=0;
        ds3block=0;
    }
    if(ds2block==2){
        document.querySelector('.chooseDsBg2').style="height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS2').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg3').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS3').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds1Person').src="images/chooseDS1pmini.png";
        document.querySelector('.ds3Person').src="images/chooseDS3pmini.png";
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds1Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds2Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.ds2Person').src="images/chooseDS2p.png";
        document.querySelector('.chooseDs1Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs1Button').style="display: none;"; 
        document.querySelector('.chooseDs3Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs3Button').style="display: none;"; 
        document.querySelector('.chooseDs2Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs2Button').style="display: flex;"; 
        ds1block=2;
        ds2block=1;
        ds3block=2;
    }
}
function chooseDS3Active(){
    if(ds3block==0){
        document.querySelector('.chooseDsBg3').style="height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS3').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg1').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS2').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS1').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds2Person').src="images/chooseDS2pmini.png";
        document.querySelector('.ds1Person').src="images/chooseDS1pmini.png";
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.chooseDs3Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs3Button').style="display: flex;"; 
        ds1block=2;
        ds2block=2;
        ds3block=1;
    }
    else if(ds3block==1){
        document.querySelector('.chooseDsBg3').style="height:30vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS3').style="height:30vh; transition:0.5s ";
        document.querySelector('.chooseDsBg2').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDsBg1').style="height:30vh;transition:0.5s ";
        document.querySelector('.chooseDS2').style="height:30vh ;transition:0.5s";
        document.querySelector('.chooseDS1').style="height:30vh ;transition:0.5s"; 
        document.querySelector('.ds2Person').src="images/chooseDS2p.png";
        document.querySelector('.ds1Person').src="images/chooseDS1p.png";
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="transform:scale(1); transition:0.5s;margin-bottom:0;";
        document.querySelector('.chooseDs3Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs3Button').style="display: none;"; 
        ds1block=0;
        ds2block=0;
        ds3block=0;
    }
    if(ds3block==2){
        document.querySelector('.chooseDsBg3').style="height:70vh;transform:none;transition:0.5s;";
        document.querySelector('.chooseDS3').style="height:70vh; transition:0.5s ";
        document.querySelector('.chooseDsBg1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDsBg2').style="height:10vh;transition:0.5s ";
        document.querySelector('.chooseDS1').style="height:10vh ;transition:0.5s";
        document.querySelector('.chooseDS2').style="height:10vh ;transition:0.5s"; 
        document.querySelector('.ds1Person').src="images/chooseDS1pmini.png";
        document.querySelector('.ds2Person').src="images/chooseDS2pmini.png";
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds1Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds2Person').style="opacity:100%; transition:0.1s";
        document.querySelector('.ds3Person').style="transform:scale(0.7); transition:0.5s;margin-bottom:-120px;";
        document.querySelector('.ds3Person').src="images/chooseDS3p.png";
        document.querySelector('.chooseDs1Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs1Button').style="display: none;"; 
        document.querySelector('.chooseDs2Text').style="display: none; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs2Button').style="display: none;"; 
        document.querySelector('.chooseDs3Text').style="display: flex; opacity:100%; transition:0.5s"; 
        document.querySelector('.chooseDs3Button').style="display: flex;"; 
        ds1block=2;
        ds2block=2;
        ds3block=1;
    }
}
function chooseDS1Return(){
    if (ds1block == 0){
        document.querySelector('.chooseDsBg1').style="box-shadow: none;";
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds1LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds1block==1){
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds1LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds1block==2){
        document.querySelector('.ds1LogoTitle').src="images/ds1logo.png";
        document.querySelector('.ds1LogoTitle').style="transform:none; transition:0.5s";
    }
}
function chooseDS2Return(){
    if (ds2block == 0){
        document.querySelector('.chooseDsBg2').style="box-shadow: none;";
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds2LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds2block==1){
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds2LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds2block==2){
        document.querySelector('.ds2LogoTitle').src="images/ds2logo.png";
        document.querySelector('.ds2LogoTitle').style="transform:none; transition:0.5s";
    }
}
function chooseDS3Return(){
    if (ds3block == 0){
        document.querySelector('.chooseDsBg3').style="box-shadow: none;";
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds3LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds3block==1){
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds3LogoTitle').style="transform:none; transition:0.5s";
    }
    else if(ds3block==2){
        document.querySelector('.ds3LogoTitle').src="images/ds3logo.png";
        document.querySelector('.ds3LogoTitle').style="transform:none; transition:0.5s";
    }
}


document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x-top: ${(e.clientX - window.innerWidth / 2.8) * 0.1}deg;
        --move-y-top: ${(e.clientY - window.innerHeight / 4) * -0.15}deg;
        --move-x-right: ${(e.clientX - window.innerWidth / 1.6) * 0.1}deg;
        --move-y-right: ${(e.clientY - window.innerHeight / 3) * -0.15}deg;
        --move-x-left: ${(e.clientX - window.innerWidth / 2.8) * 0.1}deg;
        --move-y-left: ${(e.clientY - window.innerHeight / 2) * -0.15}deg;
        --move-x-bottom: ${(e.clientX - window.innerWidth / 1.6) * 0.1}deg;
        --move-y-bottom: ${(e.clientY - window.innerHeight / 1.2) * -0.15}deg;
        `
    })
})
let locationTopCount=-1, locationRightCount=-1, locationLeftCount=-1, locationBottomCount=-1;
function locationMoveTop(){
    document.querySelector('.locationPicTop').style="transition:0.2s; cursor:pointer; filter:none; transform: scale(1.1) rotateX(var(--move-y-top)) rotateY(var(--move-x-top));";
    document.querySelector('.locationTextTop').style="background-image: url(images/locationTextMouse.png); background-position: center; background-repeat: no-repeat; background-size: cover;";
}
function locationMoveRight(){
    document.querySelector('.locationPicRight').style="transition:0.2s; cursor:pointer; filter:none; transform: scale(1.1) rotateX(var(--move-y-right)) rotateY(var(--move-x-right));";
    document.querySelector('.locationTextRight').style="background-image: url(images/locationTextMouse.png); background-position: center; background-repeat: no-repeat; background-size: cover;";
}
function locationMoveLeft(){
    document.querySelector('.locationPicLeft').style="transition:0.2s; cursor:pointer; filter:none; transform: scale(1.1) rotateX(var(--move-y-left)) rotateY(var(--move-x-left));";
    document.querySelector('.locationTextLeft').style="background-image: url(images/locationTextMouse.png); background-position: center; background-repeat: no-repeat; background-size: cover;";
}
function locationMoveBottom(){
    document.querySelector('.locationPicBottom').style="transition:0.2s; cursor:pointer; filter:none; transform: scale(1.1) rotateX(var(--move-y-bottom)) rotateY(var(--move-x-bottom));";
    document.querySelector('.locationTextBottom').style="background-image: url(images/locationTextMouse.png); background-position: center; background-repeat: no-repeat; background-size: cover;";
}

function locationActiveTop(){
    locationTopCount=0
    document.querySelector('.locationsBg').style="opacity:0%; transition:2s;filter:sepia(1); display:none;"
    document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/anorLondoBG.png); "
    document.querySelector('.locationsActiveText').style="display:flex; "
    document.querySelector('.vendrickName').style="display:none; "
    document.querySelector('.iritilName').style="display:none; "
    document.querySelector('.vendrickText').style="display:none; "
    document.querySelector('.iritilText').style="display:none; "
    document.querySelector('.topName').style="display:flex; "
    document.querySelector('.rightName').style="display:none; "
    document.querySelector('.leftName').style="display:none; "
    document.querySelector('.bottomName').style="display:none; "
    document.querySelector('.topText').style="display:flex; "
    document.querySelector('.rightText').style="display:none; "
    document.querySelector('.leftText').style="display:none; "
    document.querySelector('.bottomText').style="display:none; "
    checkLocationButton();
}  
function locationActiveRight(){
    locationRightCount=0
    document.querySelector('.locationsBg').style="opacity:0%; transition:2s;filter:sepia(1); display:none;"
    document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/amaneBG.png); "
    document.querySelector('.locationsActiveText').style="display:flex; "
    document.querySelector('.blighttownName').style="display:none; "
    document.querySelector('.faronName').style="display:none; "
    document.querySelector('.blighttownText').style="display:none; "
    document.querySelector('.faronText').style="display:none; "
    document.querySelector('.topName').style="display:none; "
    document.querySelector('.rightName').style="display:flex; "
    document.querySelector('.leftName').style="display:none; "
    document.querySelector('.bottomName').style="display:none; "
    document.querySelector('.topText').style="display:none; "
    document.querySelector('.rightText').style="display:flex; "
    document.querySelector('.leftText').style="display:none; "
    document.querySelector('.bottomText').style="display:none; "
    checkLocationButton();
}
function locationActiveLeft(){
    locationLeftCount=0
    document.querySelector('.locationsBg').style="opacity:0%; transition:2s;filter:sepia(1); display:none;"
    document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/eleumLoyceBG.png); "
    document.querySelector('.locationsActiveText').style="display:flex; "
    document.querySelector('.shizaName').style="display:none; "
    document.querySelector('.demonRuinsName').style="display:none; "
    document.querySelector('.shizaText').style="display:none; "
    document.querySelector('.demonRuinsText').style="display:none; "
    document.querySelector('.topName').style="display:none; "
    document.querySelector('.rightName').style="display:none; "
    document.querySelector('.leftName').style="display:flex; "
    document.querySelector('.bottomName').style="display:none; "
    document.querySelector('.topText').style="display:none; "
    document.querySelector('.rightText').style="display:none; "
    document.querySelector('.leftText').style="display:flex; "
    document.querySelector('.bottomText').style="display:none; "
    checkLocationButton();
}
function locationActiveBottom(){
    locationBottomCount=0
    document.querySelector('.locationsBg').style="opacity:0%; transition:2s;filter:sepia(1); display:none;"
    document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/shulvaBG.png); "
    document.querySelector('.locationsActiveText').style="display:flex; "
    document.querySelector('.catacombsName').style="display:none; "
    document.querySelector('.dungeonName').style="display:none; "
    document.querySelector('.catacombsText').style="display:none; "
    document.querySelector('.dungeonText').style="display:none; "
    document.querySelector('.topName').style="display:none; "
    document.querySelector('.rightName').style="display:none; "
    document.querySelector('.leftName').style="display:none; "
    document.querySelector('.bottomName').style="display:flex; "
    document.querySelector('.topText').style="display:none; "
    document.querySelector('.rightText').style="display:none; "
    document.querySelector('.leftText').style="display:none; "
    document.querySelector('.bottomText').style="display:flex; "
    checkLocationButton();
}

function checkLocationButton(){
    if (locationTopCount==0 || locationRightCount==0 || locationLeftCount==0 || locationBottomCount==0){
        document.querySelector('.leftButtonLocations').style="transition:.3s;opacity:0%;cursor:auto;"
        document.querySelector('.RightButtonLocations').style="transition:.3s;opacity:50%;cursor:pointer;"
    }
    else if (locationTopCount==1 || locationRightCount==1 || locationLeftCount==1 || locationBottomCount==1){
        document.querySelector('.leftButtonLocations').style="transition:.3s;opacity:50%;cursor:pointer;"
        document.querySelector('.rightButtonLocations').style="transition:.3s;opacity:50%;cursor:pointer;"
    }
    else if (locationTopCount==2 || locationRightCount==2 || locationLeftCount==2 || locationBottomCount==2){
        document.querySelector('.leftButtonLocations').style="transition:.3s;opacity:50%;cursor:pointer;"
        document.querySelector('.rightButtonLocations').style="transition:.3s;opacity:0%;cursor:auto;"
    }
}
function locationGoLeft(){
    if(locationTopCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/anorLondoBG.png); "
        document.querySelector('.anorLondoName').style="display:flex;"
        document.querySelector('.vendrickName').style="display:none;"
        document.querySelector('.iritilName').style="display:none;"
        document.querySelector('.anorLondoText').style="display:flex;"
        document.querySelector('.vendrickText').style="display:none;"
        document.querySelector('.iritilText').style="display:none;"
        locationTopCount=0;
        checkLocationButton();
    }
    else if(locationTopCount==2){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/vendrickBG.png); "
        document.querySelector('.anorLondoName').style="display:none;"
        document.querySelector('.vendrickName').style="display:flex;"
        document.querySelector('.iritilName').style="display:none;"
        document.querySelector('.anorLondoText').style="display:none;"
        document.querySelector('.vendrickText').style="display:flex;"
        document.querySelector('.iritilText').style="display:none;"
        locationTopCount=1;
        checkLocationButton();
    }
    if(locationRightCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/amaneBG.png); "
        document.querySelector('.amaneName').style="display:flex;"
        document.querySelector('.blighttownName').style="display:none;"
        document.querySelector('.faronName').style="display:none;"
        document.querySelector('.amaneText').style="display:flex;"
        document.querySelector('.blighttownText').style="display:none;"
        document.querySelector('.faronText').style="display:none;"
        locationRightCount=0;
        checkLocationButton();
    }
    else if(locationRightCount==2){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/blighttownBG.png); "
        document.querySelector('.amaneName').style="display:none;"
        document.querySelector('.blighttownName').style="display:flex;"
        document.querySelector('.faronName').style="display:none;"
        document.querySelector('.amaneText').style="display:none;"
        document.querySelector('.blighttownText').style="display:flex;"
        document.querySelector('.faronText').style="display:none;"
        locationRightCount=1;
        checkLocationButton();
    }
    if(locationLeftCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/eleumLoyceBG.png); "
        document.querySelector('.eleumLoyceName').style="display:flex;"
        document.querySelector('.shizaName').style="display:none;"
        document.querySelector('.demonRuinsName').style="display:none;"
        document.querySelector('.eleumLoyceText').style="display:flex;"
        document.querySelector('.shizaText').style="display:none;"
        document.querySelector('.demonRuinsText').style="display:none;"
        locationLeftCount=0;
        checkLocationButton();
    }
    else if(locationLeftCount==2){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/shizaBG.png); "
        document.querySelector('.eleumLoyceName').style="display:none;"
        document.querySelector('.shizaName').style="display:flex;"
        document.querySelector('.demonRuinsName').style="display:none;"
        document.querySelector('.eleumLoyceText').style="display:none;"
        document.querySelector('.shizaText').style="display:flex;"
        document.querySelector('.demonRuinsText').style="display:none;"
        locationLeftCount=1;
        checkLocationButton();
    }
    if(locationBottomCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/shulvaBG.png); "
        document.querySelector('.shulvaName').style="display:flex;"
        document.querySelector('.catacombsName').style="display:none;"
        document.querySelector('.dungeonName').style="display:none;"
        document.querySelector('.shulvaText').style="display:flex;"
        document.querySelector('.catacombsText').style="display:none;"
        document.querySelector('.dungeonText').style="display:none;"
        locationBottomCount=0;
        checkLocationButton();
    }
    else if(locationBottomCount==2){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/catacombsCarthusBG.png); "
        document.querySelector('.shulvaName').style="display:none;"
        document.querySelector('.catacombsName').style="display:flex;"
        document.querySelector('.dungeonName').style="display:none;"
        document.querySelector('.shulvaText').style="display:none;"
        document.querySelector('.catacombsText').style="display:flex;"
        document.querySelector('.dungeonText').style="display:none;"
        locationBottomCount=1;
        checkLocationButton();
    }
}
function locationGoRight(){
    if(locationTopCount==0){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/vendrickBG.png); "
        document.querySelector('.anorLondoName').style="display:none;"
        document.querySelector('.vendrickName').style="display:flex;"
        document.querySelector('.iritilName').style="display:none;"
        document.querySelector('.anorLondoText').style="display:none;"
        document.querySelector('.vendrickText').style="display:flex;"
        document.querySelector('.iritilText').style="display:none;"
        locationTopCount=1;
        checkLocationButton();
    }
    else if(locationTopCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/irithyllBG.png); "
        document.querySelector('.anorLondoName').style="display:none;"
        document.querySelector('.vendrickName').style="display:none;"
        document.querySelector('.iritilName').style="display:flex;"
        document.querySelector('.anorLondoText').style="display:none;"
        document.querySelector('.vendrickText').style="display:none;"
        document.querySelector('.iritilText').style="display:flex;"
        locationTopCount=2;
        checkLocationButton();
    }
    if(locationRightCount==0){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/blighttownBG.png); "
        document.querySelector('.amaneName').style="display:none;"
        document.querySelector('.blighttownName').style="display:flex;"
        document.querySelector('.faronName').style="display:none;"
        document.querySelector('.amaneText').style="display:none;"
        document.querySelector('.blighttownText').style="display:flex;"
        document.querySelector('.faronText').style="display:none;"
        locationRightCount=1;
        checkLocationButton();
    }
    else if(locationRightCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/faronBG.png); "
        document.querySelector('.amaneName').style="display:none;"
        document.querySelector('.blighttownName').style="display:none;"
        document.querySelector('.faronName').style="display:flex;"
        document.querySelector('.amaneText').style="display:none;"
        document.querySelector('.blighttownText').style="display:none;"
        document.querySelector('.faronText').style="display:flex;"
        locationRightCount=2;
        checkLocationButton();
    }
    if(locationLeftCount==0){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/shizaBG.png); "
        document.querySelector('.eleumLoyceName').style="display:none;"
        document.querySelector('.shizaName').style="display:flex;"
        document.querySelector('.demonRuinsName').style="display:none;"
        document.querySelector('.eleumLoyceText').style="display:none;"
        document.querySelector('.shizaText').style="display:flex;"
        document.querySelector('.demonRuinsText').style="display:none;"
        locationLeftCount=1;
        checkLocationButton();
    }
    else if(locationLeftCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/demonRuinsBG.png); "
        document.querySelector('.eleumLoyceName').style="display:none;"
        document.querySelector('.shizaName').style="display:none;"
        document.querySelector('.demonRuinsName').style="display:flex;"
        document.querySelector('.eleumLoyceText').style="display:none;"
        document.querySelector('.shizaText').style="display:none;"
        document.querySelector('.demonRuinsText').style="display:flex;"
        locationLeftCount=2;
        checkLocationButton();
    }
    if(locationBottomCount==0){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/catacombsCarthusBG.png); "
        document.querySelector('.shulvaName').style="display:none;"
        document.querySelector('.catacombsName').style="display:flex;"
        document.querySelector('.dungeonName').style="display:none;"
        document.querySelector('.shulvaText').style="display:none;"
        document.querySelector('.catacombsText').style="display:flex;"
        document.querySelector('.dungeonText').style="display:none;"
        locationBottomCount=1;
        checkLocationButton();
    }
    else if(locationBottomCount==1){
        document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/irithyllDungeonBG.png); "
        document.querySelector('.shulvaName').style="display:none;"
        document.querySelector('.catacombsName').style="display:none;"
        document.querySelector('.dungeonName').style="display:flex;"
        document.querySelector('.shulvaText').style="display:none;"
        document.querySelector('.catacombsText').style="display:none;"
        document.querySelector('.dungeonText').style="display:flex;"
        locationBottomCount=2;
        checkLocationButton();
    }
}
function locationReturn(){
    document.querySelector('.locationPicTop').style="transform: none; transition:0.5s; ";
    document.querySelector('.locationTextTop').style="background-image:none; "
    document.querySelector('.locationPicRight').style="transform: none; transition:0.5s; ";
    document.querySelector('.locationTextRight').style="background-image:none; "
    document.querySelector('.locationPicLeft').style="transform: none; transition:0.5s; ";
    document.querySelector('.locationTextLeft').style="background-image:none; "
    document.querySelector('.locationPicBottom').style="transform: none; transition:0.5s; ";
    document.querySelector('.locationTextBottom').style="background-image:none; "
}
function locationsChooseReturn(){
    document.querySelector('.locationsBg').style="opacity:100%; transition:2s; display:flex;"
    document.querySelector('.locationsMain').style="transition:2s; background-image:url(images/fog2.gif); "
    document.querySelector('.locationsActiveText').style="display:none; "
    locationTopCount=-1;
    locationRightCount=-1;
    locationLeftCount=-1;
    locationBottomCount=-1;
}

function characterNameActive1(){
    document.querySelector('.characterName1').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";

}
function characterNameActive2(){
    document.querySelector('.characterName2').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive3(){
    document.querySelector('.characterName3').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive4(){
    document.querySelector('.characterName4').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive5(){
    document.querySelector('.characterName5').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive6(){
    document.querySelector('.characterName6').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive7(){
    document.querySelector('.characterName7').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive8(){
    document.querySelector('.characterName8').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive9(){
    document.querySelector('.characterName9').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive10(){
    document.querySelector('.characterName10').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive11(){
    document.querySelector('.characterName11').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive12(){
    document.querySelector('.characterName12').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName1').style="display:none";
    document.querySelector('.characterName13').style="display:none";
}
function characterNameActive13(){
    document.querySelector('.characterName13').style="height: 14vh; width: 80%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 20px;";
    document.querySelector('.characterNameBase').style="display:none";
    document.querySelector('.characterName2').style="display:none";
    document.querySelector('.characterName3').style="display:none";
    document.querySelector('.characterName4').style="display:none";
    document.querySelector('.characterName5').style="display:none";
    document.querySelector('.characterName6').style="display:none";
    document.querySelector('.characterName7').style="display:none";
    document.querySelector('.characterName8').style="display:none";
    document.querySelector('.characterName9').style="display:none";
    document.querySelector('.characterName10').style="display:none";
    document.querySelector('.characterName11').style="display:none";
    document.querySelector('.characterName12').style="display:none";
    document.querySelector('.characterName1').style="display:none";
}

function playMusic(){
    document.querySelector('.musicDisk').style="background-image: url(images/musicDisk2.gif);";
}
function stopMusic(){
    document.querySelector('.musicDisk').style="animation-play-state: paused;";
}