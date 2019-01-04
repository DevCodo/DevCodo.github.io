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
let time;
let newStr;
let record = 0;
let radios = document.getElementsByName("option");
let boxNew = document.getElementById("box__new");
let boxCheck = document.getElementById("box__check");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");

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

            result.style.display = "block";
            boxNew.innerHTML = "";
            if (Math.floor(click / (time / 60) > record)) {
                record = Math.floor(click / (time / 60));
                boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
            }else if (Math.floor(click / (time / 60))  > 0) {
                boxNew.innerHTML = "Рекорд: " + record + " зн/мин";
            }
             
            boxNew.style.backgroundColor = "white";
            boxCheck.innerHTML = ""; 
            time = Math.round((new Date().getTime() - timeStart) / 1000);
            timeStart = 0;
    
            if (time % 60 < 10) {
                result1.appendChild(document.createTextNode(Math.floor(time / 60) + ":0" + time % 60));
            }else {
                result1.appendChild(document.createTextNode(Math.floor(time / 60) + ":" + time % 60));
            }
            
            result2.appendChild(document.createTextNode(click));
            result3.appendChild(document.createTextNode(Math.floor(click / (time / 60))  + " зн/мин"));
    
            if (click == 0 && err > 0) {
                result4.appendChild(document.createTextNode("100 %"));
            }else if (click == 0 && err == 0) {
                result4.appendChild(document.createTextNode("0 %"));
            }else {
                result4.appendChild(document.createTextNode((err / click * 100).toFixed(1) + " %"));
            }

        }else if (timeStart == 0 && result.style.display == "block") {
            result.style.display = "none";
        }

    }else if(info.key == "Shift" || info.key == "Alt" || info.key == "Ctrl"){
      
    }else if(info.key == strNew.substr(0,1)){

        click++;
        boxNew.appendChild(newStr);
        boxNew.style.backgroundColor = "white";
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
        console.log(strNew.length);
        if(strNew.length == 0) {
            i++;
            strNew = strNewAll[i];
            boxNew.innerHTML = "";
            newStr = document.createTextNode(strNew)
            boxNew.appendChild(newStr);
        }
    }else {
        if (result.style.display != "block") {
            boxNew.style.backgroundColor = "red";
            err++;
        }

    }
    
})


