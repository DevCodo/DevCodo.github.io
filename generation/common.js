let sLettersRu = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];
let gLettersRu = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
let sLettersEn = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
let gLettersEn = ["a", "e", "i", "o", "u", "y"];

let showButton = document.querySelector("#show");
let clearButton = document.querySelector("#clear");
let result = document.querySelector(".result");
let archive = document.querySelector(".archive");
let include = document.querySelector("#include");
let includeNewArr = document.querySelector("#includeNewArr");
let exclude2 = document.querySelector("#exclude2");
let exclude1 = document.querySelector("#exclude1");
let sortUp = document.querySelector("#sortUp");
let sortDown = document.querySelector("#sortDown");
let setNumber = document.querySelector("#setNumber");
let saveButton = document.querySelector("#save");
let radio = document.querySelectorAll("input[type=radio]");

let arr, caunt, lang, sLetters = [], gLetters = [], resultArr, clearArr = [];



clearButton.addEventListener("click", function() {
    clearArr = [];
    archive.innerHTML = "";
    result.innerHTML = "";
})

saveButton.addEventListener("click", function() {
    function utoa(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
    let type = "data:application/octet-stream;base64, ";
    let base = utoa(clearArr.join());
    let res = type + base;
    saveButton.href = res;
})

showButton.addEventListener("click", function() {
    if (include.value.indexOf("*") != -1 || include.value.indexOf("+") != -1) {
        arr = include.value.split("");
        radio[0].checked ? lang = "ru" : lang = "en";
        result.innerHTML = "";
        archive.innerHTML = "";
        caunt = +setNumber.value;
        if (caunt > 1000) caunt = 1000;
        generationArr();
        writeInResult();
        console.log(clearArr.length)
    }
})

sortDown.addEventListener("click", function() {
    archive.innerHTML = "";
    clearArr.sort((a,b) => b > a ? 1 : -1);
    for (let i = 0; i < clearArr.length; i++) {
        archive.insertAdjacentHTML("afterBegin", `<div>${clearArr[i]}</div>`);
    }
})

sortUp.addEventListener("click", function() {
    archive.innerHTML = "";
    clearArr.sort((a,b) => b < a ? 1 : -1);
    for (let i = 0; i < clearArr.length; i++) {
        archive.insertAdjacentHTML("afterBegin", `<div>${clearArr[i]}</div>`);
    }
})

function getAllResult() {
    let caunt = 0;
    for (let i = 0, f = 0; i < 100; f++) {
        if (!generationWord()) {
            if (f > 1000000) break;
        }
        if (generationWord()) {
            // resultArr = resultArr[0].toUpperCase() + resultArr.slice(1);
            if(clearArr.indexOf(resultArr) == -1) {
                clearArr.push(resultArr);
                result.insertAdjacentHTML("afterBegin", `<div>${resultArr}</div>`);
                i++;
                caunt++;
            } else {
                f++;
                if (f > 1000000) break;
            }
        }
    }
    console.log(caunt);
    if (caunt) setTimeout(getAllResult, 100);
}

function writeInResult() {
    for (let i = 0; i < clearArr.length; i++) {
        archive.insertAdjacentHTML("afterBegin", `<div>${clearArr[i]}</div>`);
    }

    for (let i = 0, f = 0; i < caunt; f++) {
        if (!generationWord()) {
            if (f > 100000) break;
        }
        if (generationWord()) {
            // resultArr = resultArr[0].toUpperCase() + resultArr.slice(1);
            if(clearArr.indexOf(resultArr) == -1) {
                clearArr.push(resultArr);
                // clearArr.sort((a,b) => b > a ? 1 : -1);
                result.insertAdjacentHTML("afterBegin", `<div>${resultArr}</div>`);
                i++;
            } else {
                f++;
                if (f > 100000) break;
            }
        }
    }
}

function generationArr() {
    sLetters = [];
    gLetters = [];
    if (includeNewArr.value != "") {
        let newArr = includeNewArr.value.split(" ");
        if (lang == "ru") {
            for (let i = 0; i < newArr.length; i++) {
                if (gLettersRu.indexOf(newArr[i]) != -1) gLetters.push(newArr[i]);
                if (sLettersRu.indexOf(newArr[i]) == -1) continue;
                else sLetters.push(newArr[i]);
            }
        } else {
            for (let i = 0; i < newArr.length; i++) {
                if (gLettersEn.indexOf(newArr[i]) != -1) gLetters.push(newArr[i]);
                if (sLettersEn.indexOf(newArr[i]) == -1) continue;
                else sLetters.push(newArr[i]);
            }
        }

    } else if (exclude1.value != "") {
        let arrExclude1 = exclude1.value.split(" ");
        if (lang == "ru") {
            sLetters = sLettersRu.filter(function(el) {
                for (let i = 0; i < arrExclude1.length; i++) {
                    if (el == arrExclude1[i]) return false;
                }
                return true;
            });
            gLetters = gLettersRu.filter(function(el) {
                for (let i = 0; i < arrExclude1.length; i++) {
                    if (el == arrExclude1[i]) return false;
                }
                return true;
            });
        } else {
            sLetters = sLettersEn.filter(function(el) {
                for (let i = 0; i < arrExclude1.length; i++) {
                    if (el == arrExclude1[i]) return false;
                }
                return true;
            });
            gLetters = gLettersEn.filter(function(el) {
                for (let i = 0; i < arrExclude1.length; i++) {
                    if (el == arrExclude1[i]) return false;
                }
                return true;
            });
        }
        
    } else {
        if (lang == "ru") {
            sLetters = sLettersRu.slice();
            gLetters = gLettersRu.slice();
        } else {
            sLetters = sLettersEn.slice();
            gLetters = gLettersEn.slice();
        }
    }
}

function generationWord() {
    resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") resultArr.push(generationArrG()[Math.floor(Math.random()*gLetters.length)]); 
        else if (arr[i] == "*") resultArr.push(generationArrS()[Math.floor(Math.random()*sLetters.length)]); 
        else resultArr.push(arr[i]);
    }
    resultArr = resultArr.join("");
    if (exclude2.value != "") {
        let arrExclude2 = exclude2.value.split(" ");
        for (let i = 0; i < arrExclude2.length; i++) {
            if (resultArr.indexOf(arrExclude2[i]) != -1) return false;
        }
    }
    return resultArr;
}

function generationArrS() {
    let arr = [];
    sLetters.forEach(x => arr.push(x));
    return arr;
}
function generationArrG(lang) {
    let arr = [];
    gLetters.forEach(x => arr.push(x));
    return arr;
}
