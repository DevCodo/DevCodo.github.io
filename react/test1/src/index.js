import "@babel/polyfill";

// function* gen(num) {
//   yield 1;
//   yield 2;
//   yield 3;

// }

// let same = gen();

// let osnova = Math.floor(num / 10) ; // 133
// let ostatok = num % 10;             // 4



function num(number) {
  let num = number;

  while( num > 0 ) {
    let osn = Math.floor(num / 10) ; // 133
    let ost = num % 10;
    console.log(ost);
    num = osn;
  }
}

function* gen(number) {
  let num = number;

  while( num > 0 ) {
    let osn = Math.floor(num / 10) ; // 133
    let ost = num % 10;
    num = osn;
    yield ost;
  }
}

let num3 = gen(987484363);

for (let some of num3 ) {
  console.log(some);
}

// num(987654321);
