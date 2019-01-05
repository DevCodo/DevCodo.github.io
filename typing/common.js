function getArrRandom(a, b) {
    return Math.random() - 0.5;
}
function getStrRandom(str) {
    let arrPhras = str.split("/");
    arrPhras.sort(getArrRandom);
    return arrPhras;
}

let str; 
let strNewAll;
let i = 0;
let strNew;
let err = 0;
let click = 0;
let timeStart = 0;
let time = 0;
let timeStr = "0:00";
let newStr;
let record = 0;
let timer;
let radios = document.getElementsByName("option");
let boxNew = document.getElementById("box__new");
let boxCheck = document.getElementById("box__check");
let timeShow = document.getElementById("time");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
timeShow.innerHTML = timeStr;

document.body.addEventListener("keydown", function(info) {
    if(info.key == "Enter") {
        if (timeStart == 0 && result.style.display != "block") {
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    
                    if (radios[i].value == "phrasesRu") {
                        str = phrasesRu;
                    }else if(radios[i].value == "phrasesEn") {
                        str = phrasesEn;
                    }else if(radios[i].value == "words850") {
                        str = words850;
                    }
                    
                    strNewAll = getStrRandom(str);
                    strNew = strNewAll[i];
                    break;
                }
            }
            
            timer = setInterval(function() {
                time++;
                if (time % 60 < 10) {
                    timeStr = Math.floor(time / 60) + ":0" + time % 60;
                } else {
                    timeStr = Math.floor(time / 60) + ":" + time % 60;
                }
                timeShow.innerHTML = timeStr;
            },1000)
            

            err = 0;
            click = 0;
            timeStart = new Date().getTime();
            result1.innerHTML = ""; 
            result2.innerHTML = ""; 
            result3.innerHTML = ""; 
            result4.innerHTML = ""; 
            boxNew.innerHTML = ""; 
            boxCheck.innerHTML = "";
            boxNew.style.textIndent = "0px";
            newStr = document.createTextNode(strNew);
            boxNew.appendChild(newStr);

        }    

    }else if(info.key == "Escape"){
        if (timeStart != 0) {
            clearInterval(timer);
            result.style.display = "block";
            boxNew.innerHTML = "";
            boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
            if (Math.floor(click / (time / 60) > record) && time > 59) {
                record = Math.floor(click / (time / 60));
                boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
            }else if (Math.floor(click / (time / 60))  > 0) {
                boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
            }
             
            // boxNew.style.backgroundColor = "white";
            boxCheck.innerHTML = ""; 
            timeStart = 0;
    

            result1.appendChild(document.createTextNode(timeStr));
            result2.appendChild(document.createTextNode(click));

            if (time == 0) {
                result3.appendChild(document.createTextNode("0 зн/мин"));
            } else {
                result3.appendChild(document.createTextNode(Math.floor(click / (time / 60))  + " зн/мин"));
            }
    
            if (click == 0 && err > 0) {
                result4.appendChild(document.createTextNode("100 %"));
            }else if (click == 0 && err == 0) {
                result4.appendChild(document.createTextNode("0 %"));
            }else {
                result4.appendChild(document.createTextNode((err / click * 100).toFixed(1) + " %"));
            }

            time = 0;
        }else if (timeStart == 0 && result.style.display == "block") {
            result.style.display = "none";
            timeShow.innerHTML = "0:00"
        }

    }else if(info.key == "Shift" || info.key == "Alt" || info.key == "Ctrl"){
      
    }else if(info.key == strNew.substr(0,1)){
        if (result.style.display != "block" && timeStart != 0) {
            click++;
            boxNew.appendChild(newStr);
            // boxNew.style.backgroundColor = "white";
            boxNew.innerHTML = "";
            newStr = document.createTextNode(strNew.substring(1))
            boxNew.appendChild(newStr);
    
            let checkP = document.createElement("span");
            let checkStr = document.createTextNode(strNew.substr(0,1));
            if(strNew.substr(1,1) == " ") {
                boxNew.style.textIndent = "14px";
            }
            if(info.key == " ") {
                checkP.style.width = "14px";
                checkP.style.flexShrink = "0";
                boxNew.style.textIndent = "0px";
            }
            checkP.appendChild(checkStr);
            boxCheck.appendChild(checkP);
    
            strNew = strNew.substring(1);
            if(strNew.length == 0) {
                i++;
                strNew = strNewAll[i];
                boxNew.innerHTML = "";
                newStr = document.createTextNode(strNew)
                boxNew.appendChild(newStr);
            }
        }
    }else {
        if (result.style.display != "block" && timeStart != 0) {
            boxNew.style.backgroundColor = "red";
            setTimeout(function(){ boxNew.style.backgroundColor = "white"}, 100);
            err++;
        }

    }
    
})


