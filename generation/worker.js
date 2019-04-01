self.addEventListener('message', function(e) {
    let clearArr = [];
    let resultArr = [];
    let arr = [];
    let sLetters = e.data["sLetters"];
    let gLetters = e.data["gLetters"];
    let access = true;
    let time;

    sLetters.forEach( a1 => sLetters.forEach( a2 => resultArr.push(a1 + a2)));
    sLetters.forEach( a1 => sLetters.forEach( 
        a2 => sLetters.forEach( 
            a3 => sLetters.forEach( 
                a4 => sLetters.forEach( 
                    a5 => sLetters.forEach( 
                        a6 => {
    
                            if (resultArr.length == 1000) {
                                if (arr.length == 1000) {
                                    clearArr.push(arr);
                                    arr = [];
                                    resultArr = [];
                                    console.log(clearArr)
                                } else {
                                    arr.push(resultArr);
                                    resultArr = [];
                                }
                            };
                            
                            resultArr.push(a1 + a2 + a3 + a4 + a5 + a6) 
    
                        }))))));

    // let a = e.data["gLetters"][2];
    self.postMessage(clearArr);
  }, false);