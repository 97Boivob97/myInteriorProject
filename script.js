var clickPlusBasic = document.querySelector("#basic-plus");
var clickMinusBasic = document.querySelector("#basic-minus");
var basicAmount = document.querySelector("#basic-amount");
var c = document.querySelector("#count");
var roomCounter = document.querySelector("#room-count");
var basicButton = document.querySelector("#basic-button");

var clickPlusPro = document.querySelector("#pro-plus");
var clickMinusPro = document.querySelector("#pro-minus");
var proAmount = document.querySelector("#pro-amount");
var c1 = document.querySelector("#count-pro");
var proRoomCounter = document.querySelector("#pro-room-count");
var proButton = document.querySelector("#pro-button");
var proText = document.querySelector(".pro-text");

var count = 1;
var countpro=1;
//basic service
function add(){
    count++;
    var final_amount = 199*count;
    c.innerHTML = count;
    basicAmount.innerHTML = final_amount;
}
clickPlusBasic.addEventListener("click",add);

clickMinusBasic.addEventListener("click",minus);

function minus(){
    if(count>1){
    count--;
    c.innerHTML = count;
    var final_amount = 199*count;
    basicAmount.innerHTML = final_amount;
    }
}

function text1(){
   roomCounter.innerHTML = count; 
}

basicButton.addEventListener("click",text1);

//pro service

function addPro(){
    countpro++;
    var final_amount = 249*countpro;
    c1.innerHTML = countpro;
    proAmount.innerHTML = final_amount;
}

clickPlusPro.addEventListener("click",addPro);

function minusPro(){
    if(countpro>1){
        countpro--;
        c1.innerHTML = countpro;
        var final_amount = 249*countpro;
        proAmount.innerHTML = final_amount;
        }
}

clickMinusPro.addEventListener("click",minusPro);


function text2(){

    proRoomCounter.innerHTML = countpro;
    proText.style.visibility = "visible";

};

proButton.addEventListener("click",text2);