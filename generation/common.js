let sLettersRu = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];
let gLettersRu = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
let sLettersEn = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
let gLettersEn = ["a", "e", "i", "o", "u", "y"];

let showButton = document.querySelector("#show");
let showNextButton = document.querySelector("#showNext");
let clearButton = document.querySelector("#clear");
let overlay = document.querySelector(".overlay");
let result = document.querySelector(".result");
let archive = document.querySelector(".archive");
let showAll = document.querySelector("#showAll");
let include = document.querySelector("#include");
let includeNewArr = document.querySelector("#includeNewArr");
let exclude2 = document.querySelector("#exclude2");
let exclude1 = document.querySelector("#exclude1");
let sortUp = document.querySelector("#sortUp");
let sortDown = document.querySelector("#sortDown");
let setNumber = document.querySelector("#setNumber");
let saveButton = document.querySelector("#save");
let radio = document.querySelectorAll("input[type=radio]");

let arr, caunt, cauntСycle, countShow = 0, countShowIcrement, lang, sLetters = [], gLetters = [], resultArr = [], clearArr = [], allArr = [];

setNumber.addEventListener("keyup", function() {
    if (setNumber.value > 21) setNumber.value = 20;
})

clearButton.addEventListener("click", function() {
    clearArr = [];
    allArr = [];
    archive.innerHTML = "";
    result.innerHTML = "";
    showNextButton.style.display = "none";
})

showAll.addEventListener("click", function() {
    if (include.value.indexOf("*") != -1 || include.value.indexOf("+") != -1) {
        arr = include.value.split("");
        radio[0].checked ? lang = "ru" : lang = "en";
        overlay.style.display = "flex";
        showNextButton.style.display = "none";
        result.innerHTML = "";
        archive.innerHTML = "";
        clearArr = [];
        allArr = [];

        setTimeout( () => {
            generationArr();
            getAllResult();
            if (allArr.length > 999) {
                overlay.style.display = "none";
                for (let i = 0; i < 1000; i++) {
                    result.insertAdjacentHTML("beforeEnd", `<div>${allArr[i]}</div>`);
                    countShow++;
                }
                showNextButton.style.display = "block";
            } else {
                overlay.style.display = "none";
                for (let i = 0; i < allArr.length; i++) {
                    result.insertAdjacentHTML("beforeEnd", `<div>${allArr[i]}</div>`);
                }
            }
        }, 500 )
    }
    
})

showNextButton.addEventListener("click", function() {
    if (countShow < allArr.length) {
        countShowIcrement = countShow + 1000;
        if (countShowIcrement >= allArr.length) {
            for (let i = countShow; i < allArr.length; i++) {
                result.insertAdjacentHTML("beforeEnd", `<div>${allArr[i]}</div>`);
                countShow++;
            }
            showNextButton.style.display = "none";
        } else {
            for (let i = countShow; i < countShowIcrement; i++) {
                result.insertAdjacentHTML("beforeEnd", `<div>${allArr[i]}</div>`);
                countShow++;
            }
        }
    }
})

saveButton.addEventListener("click", function() {
    let base;
    if (clearArr.length) {
        base = utoa(clearArr.join("\n"));
    } else if (allArr.length) {
        base = utoa(allArr.join("\n"));
    }
    function utoa(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
    let type = "data:application/octet-stream;base64, ";
    let res = type + base;
    saveButton.href = res;
})

showButton.addEventListener("click", function() {
    if (include.value.indexOf("*") != -1 || include.value.indexOf("+") != -1) {
        arr = include.value.split("");
        radio[0].checked ? lang = "ru" : lang = "en";
        result.innerHTML = "";
        archive.innerHTML = "";
        allArr = [];
        showNextButton.style.display = "none";
        caunt = +setNumber.value;
        if (caunt > 1000) caunt = 1000;
        generationArr();
        writeInResult();
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


function writeInResult() {
    for (let i = 0; i < clearArr.length; i++) {
        archive.insertAdjacentHTML("afterBegin", `<div>${clearArr[i]}</div>`);
    }

    for (let i = 0, f = 0; i < caunt; f++) {
        let acsess = generationWord();
        if (!acsess) {
            if (f > 10000) break;
        }
        if (acsess) {
            // resultArr = resultArr[0].toUpperCase() + resultArr.slice(1);
            if(clearArr.indexOf(resultArr) == -1) {
                clearArr.push(resultArr);
                // clearArr.sort((a,b) => b > a ? 1 : -1);
                result.insertAdjacentHTML("afterBegin", `<div>${resultArr}</div>`);
                i++;
            } else {
                f++;
                if (f > 10000) break;
            }
        }
    }
}


function generationWord() {
    resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") resultArr.push(gLetters[Math.floor(Math.random()*gLetters.length)]); 
        else if (arr[i] == "*") resultArr.push(sLetters[Math.floor(Math.random()*sLetters.length)]); 
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

function checkWord() {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "+" && arr[i] != "*") resultArr.splice(i,0,arr[i]);
    }
    resultArr = resultArr.join("");
    if (exclude2.value != "") {
        let arrExclude2 = exclude2.value.split(" ");
        for (let i = 0; i < arrExclude2.length; i++) {
            if (resultArr.indexOf(arrExclude2[i]) != -1) return false;
        }
        allArr.push(resultArr);
    } else {
        allArr.push(resultArr);
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

function getAllResult() {
    let b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20;
    let arrSimbol = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "*" || arr[i] == "+") arrSimbol.push(arr[i]);
    }
    cauntСycle = arrSimbol.length;
    for (let i = 0; i < arrSimbol.length; i++) {
        if (!b1) {
            if (arrSimbol[i] == "*") b1 = sLetters.slice();
            else b1 = gLetters.slice();
        } else if (!b2) {
            if (arrSimbol[i] == "*") b2 = sLetters.slice();
            else b2 = gLetters.slice();
        } else if (!b3) {
            if (arrSimbol[i] == "*") b3 = sLetters.slice();
            else b3 = gLetters.slice();
        } else if (!b4) {
            if (arrSimbol[i] == "*") b4 = sLetters.slice();
            else b4 = gLetters.slice();
        } else if (!b5) {
            if (arrSimbol[i] == "*") b5 = sLetters.slice();
            else b5 = gLetters.slice();
        } else if (!b6) {
            if (arrSimbol[i] == "*") b6 = sLetters.slice();
            else b6 = gLetters.slice();
        } else if (!b7) {
            if (arrSimbol[i] == "*") b7 = sLetters.slice();
            else b7 = gLetters.slice();
        } else if (!b8) {
            if (arrSimbol[i] == "*") b8 = sLetters.slice();
            else b8 = gLetters.slice();
        } else if (!b9) {
            if (arrSimbol[i] == "*") b9 = sLetters.slice();
            else b9 = gLetters.slice();
        } else if (!b10) {
            if (arrSimbol[i] == "*") b10 = sLetters.slice();
            else b10 = gLetters.slice();
        } else if (!b11) {
            if (arrSimbol[i] == "*") b11 = sLetters.slice();
            else b11 = gLetters.slice();
        } else if (!b12) {
            if (arrSimbol[i] == "*") b12 = sLetters.slice();
            else b12 = gLetters.slice();
        } else if (!b13) {
            if (arrSimbol[i] == "*") b13 = sLetters.slice();
            else b13 = gLetters.slice();
        } else if (!b14) {
            if (arrSimbol[i] == "*") b14 = sLetters.slice();
            else b14 = gLetters.slice();
        } else if (!b15) {
            if (arrSimbol[i] == "*") b15 = sLetters.slice();
            else b15 = gLetters.slice();
        } else if (!b16) {
            if (arrSimbol[i] == "*") b16 = sLetters.slice();
            else b16 = gLetters.slice();
        } else if (!b17) {
            if (arrSimbol[i] == "*") b17 = sLetters.slice();
            else b17 = gLetters.slice();
        } else if (!b18) {
            if (arrSimbol[i] == "*") b18 = sLetters.slice();
            else b18 = gLetters.slice();
        } else if (!b19) {
            if (arrSimbol[i] == "*") b19 = sLetters.slice();
            else b19 = gLetters.slice();
        } else if (!b20) {
            if (arrSimbol[i] == "*") b20 = sLetters.slice();
            else b20 = gLetters.slice();
        }
    }
    forArr(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20);

}

function forArr(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20) {

    if (cauntСycle == 20) {
break20:    for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
    for (let a16 = 0; a16 < b16.length; a16++) {
    for (let a17 = 0; a17 < b17.length; a17++) {
    for (let a18 = 0; a18 < b18.length; a18++) {
    for (let a19 = 0; a19 < b19.length; a19++) {
    for (let a20 = 0; a20 < b20.length; a20++) {
        if (clearArr.length > 10000000) break break20;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15],b16[a16],b17[a17],b18[a18],b19[a19],b20[a20]);
        checkWord()
    }}}}}}}}}}}}}}}}}}}}}
    else if (cauntСycle == 19) {
break19:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
    for (let a16 = 0; a16 < b16.length; a16++) {
    for (let a17 = 0; a17 < b17.length; a17++) {
    for (let a18 = 0; a18 < b18.length; a18++) {
    for (let a19 = 0; a19 < b19.length; a19++) {
        if (clearArr.length > 10000000) break break19;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15],b16[a16],b17[a17],b18[a18],b19[a19]);
        checkWord()
    }}}}}}}}}}}}}}}}}}}}
    else if (cauntСycle == 18) {
break18:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
    for (let a16 = 0; a16 < b16.length; a16++) {
    for (let a17 = 0; a17 < b17.length; a17++) {
    for (let a18 = 0; a18 < b18.length; a18++) {
        if (clearArr.length > 10000000) break break18;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15],b16[a16],b17[a17],b18[a18]);
        checkWord()
    }}}}}}}}}}}}}}}}}}}
    else if (cauntСycle == 17) {
break17:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
    for (let a16 = 0; a16 < b16.length; a16++) {
    for (let a17 = 0; a17 < b17.length; a17++) {
        if (clearArr.length > 10000000) break break17;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15],b16[a16],b17[a17]);
        checkWord()
    }}}}}}}}}}}}}}}}}}
    else if (cauntСycle == 16) {
break16:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
    for (let a16 = 0; a16 < b16.length; a16++) {
        if (clearArr.length > 10000000) break break16;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15],b16[a16]);
        checkWord()
    }}}}}}}}}}}}}}}}}
    else if (cauntСycle == 15) {
break15:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
    for (let a15 = 0; a15 < b15.length; a15++) {
        if (clearArr.length > 10000000) break break15;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14],b15[a15]);
        checkWord()
    }}}}}}}}}}}}}}}}
    else if (cauntСycle == 14) {
break14:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
    for (let a14 = 0; a14 < b14.length; a14++) {
        if (clearArr.length > 10000000) break break14;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13],b14[a14]);
        checkWord()
    }}}}}}}}}}}}}}}
    else if (cauntСycle == 13) {
break13:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
    for (let a13 = 0; a13 < b13.length; a13++) {
        if (clearArr.length > 10000000) break break13;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12],b13[a13]);
        checkWord()
    }}}}}}}}}}}}}}
    else if (cauntСycle == 12) {
break12:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
    for (let a12 = 0; a12 < b12.length; a12++) {
        if (clearArr.length > 10000000) break break12;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11],b12[a12]);
        checkWord()
    }}}}}}}}}}}}}
    else if (cauntСycle == 11) {
break11:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
    for (let a11 = 0; a11 < b11.length; a11++) {
        if (clearArr.length > 10000000) break break11;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10],b11[a11]);
        checkWord()
    }}}}}}}}}}}}
    else if (cauntСycle == 10) {
break10:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
    for (let a10 = 0; a10 < b10.length; a10++) {
        if (clearArr.length > 10000000) break break10;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9],b10[a10]);
        checkWord()
    }}}}}}}}}}}
    else if (cauntСycle == 9) {
break9:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
    for (let a9 = 0; a9 < b9.length; a9++) {
        if (clearArr.length > 10000000) break break9;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8],b9[a9]);
        checkWord()
    }}}}}}}}}}
    else if (cauntСycle == 8) {
break8:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
    for (let a8 = 0; a8 < b8.length; a8++) {
        if (clearArr.length > 10000000) break break8;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7],b8[a8]);
        checkWord()
    }}}}}}}}}
    else if (cauntСycle == 7) {
break7:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
    for (let a7 = 0; a7 < b7.length; a7++) {
        if (clearArr.length > 10000000) break break7;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6],b7[a7]);
        checkWord()
    }}}}}}}}
    else if (cauntСycle == 6) {
break6:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
    for (let a6 = 0; a6 < b6.length; a6++) {
        if (clearArr.length > 10000000) break break6;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5],b6[a6]);
        checkWord()
    }}}}}}}
    else if (cauntСycle == 5) {
break5:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
    for (let a5 = 0; a5 < b5.length; a5++) {
        if (clearArr.length > 10000000) break break5;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4],b5[a5]);
        checkWord()
    }}}}}}
    else if (cauntСycle == 4) {
break4:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
    for (let a4 = 0; a4 < b4.length; a4++) {
        if (clearArr.length > 10000000) break break4;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3],b4[a4]);
        checkWord()
    }}}}}
    else if (cauntСycle == 3) {
break3:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
    for (let a3 = 0; a3 < b3.length; a3++) {
        if (clearArr.length > 10000000) break break3;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2],b3[a3]);
        checkWord()
    }}}}
    else if (cauntСycle == 2) {
break2:     for (let a1 = 0; a1 < b1.length; a1++) {
    for (let a2 = 0; a2 < b2.length; a2++) {
        if (clearArr.length > 10000000) break break2;
        resultArr = [];
        resultArr.push(b1[a1],b2[a2]);
        checkWord()
    }}}
    else if (cauntСycle == 1) {
break1:     for (let a1 = 0; a1 < b1.length; a1++) {
    if (clearArr.length > 10000000) break break1;
        resultArr = [];
        resultArr.push(b1[a1]);
        checkWord()
    }}
    
}   