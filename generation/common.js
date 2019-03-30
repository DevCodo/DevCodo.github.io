let sLettersRu = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];
let gLettersRu = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
let sLettersEn = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
let gLettersEn = ["a", "e", "i", "o", "u", "y"];

let button = document.querySelector("button");
let result = document.querySelector(".result");
let include = document.querySelector("#include");
let exclude2 = document.querySelector("#exclude2");
let exclude1 = document.querySelector("#exclude1");
let radio = document.querySelectorAll("input[type=radio]");

let arr, lang, sLetters, gLetters, resultArr;

button.addEventListener("click", function() {
    if (include.value.indexOf("-") != -1 || include.value.indexOf("+") != -1) {
        arr = include.value.split(" ");
        radio[0].checked ? lang = "ru" : lang = "en";
        result.innerHTML = "";
    
        if (exclude1.value != "") {
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

        for (let i = 0, f = 0; i < 10; f++) {
            if (!generationWord()) {
                if (f > 5) break;
            }
            if (generationWord()) {
                resultArr = resultArr[0].toUpperCase() + resultArr.slice(1);
                result.insertAdjacentHTML("beforeend", `<div>${resultArr}</div>`);
                i++;
            }
        }
    }
})


function generationWord() {
    resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "+" && arr[i] != "-") resultArr.push(arr[i])
        else if (arr[i] == "+") resultArr.push(generationArrG()[Math.floor(Math.random()*gLetters.length)]) 
        else if (arr[i] == "-") resultArr.push(generationArrS()[Math.floor(Math.random()*sLetters.length)]) 
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
