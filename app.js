var inputDOB = document.querySelector("#inputDOB");
var inputLuckyNum = document.querySelector("#inputLuckyNum");
var btnCheck = document.querySelector("#btnCheck");
var outputDiv = document.querySelector("#outputDiv");
var outputDivGif = document.querySelector("#outputDivGif");
var inputDOBStr;

btnCheck.addEventListener("click", checkBtnHandler);

function checkBtnHandler(){
    if(isNaN(inputLuckyNum.value)){
        outputDiv.innerHTML = "Please Enter the valid Lucky Number!"
        outputDivGif.innerHTML = "";
    }
    else 
    if(inputLuckyNum.value == ""){
        outputDiv.innerHTML = "You forgot to Enter Lucky Number!"
        outputDivGif.innerHTML = "";
     }
     else 
     if(inputDOB.value == ""){
        outputDiv.innerHTML = "You forgot to Enter Your Date of Birth!"
        outputDivGif.innerHTML = "";
     }
     else
     if(!isNaN(inputLuckyNum.value)){
        dateToString();
        luckyCheck(inputDOBStr);    
     }
}

function dateToString(){
    var inputDOBStrYr = inputDOB.value.substring(0,4);
    var inputDOBStrMon = inputDOB.value.substring(5,7);
    var inputDOBStrDay = inputDOB.value.substring(8,10);
    inputDOBStr = inputDOBStrYr + inputDOBStrMon + inputDOBStrDay;
    return inputDOBStr;
}

function luckyCheck(){
    var dOBSum = 0;

    for(i=0; i<inputDOB.value.length; i++){
       dOBSum = dOBSum + (inputDOBStr % 10);
       inputDOBStr = Math.trunc(inputDOBStr / 10);
    }

    if((dOBSum % inputLuckyNum.value) == 0){
        outputDiv.innerHTML = "Your Date of Birth :  " + inputDOB.value + "<br />" + "Your Lucky Number :  " + inputLuckyNum.value + "<br />" + "<br />" + "<b> Yay!! Your Birthday is Lucky!🥳🎉 <b>";
        outputDivGif.innerHTML = "<img src=\"https://steemitimages.com/0x0/https://gifer.com/i/7fjW.gif\" alt=\"Congrats GIF\" width=\"400px\" height=\"200px\">";
    }
    else{
        outputDiv.innerHTML = "Your Date of Birth :  " + inputDOB.value + "<br />" + "Your Lucky Number :  " + inputLuckyNum.value + "<br />" + "<br />" + "<b> Sorry! Your birthday is not lucky 🥺" + "<br />" + "But it's not the end of the world😎<b>" + "<br />" + "You can create your own luck!👍🏻";
        outputDivGif.innerHTML = "<img src=\"https://i.gifer.com/XZ9.gif\" alt=\"Congrats GIF\" width=\"400px\" height=\"200px\">";
    }
}