import { async } from "q";

// let promis1 = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     Math.random() > 0.5 ? resolve("good1") : reject("bad1");
//   }, 300);
// })

// function promis2(res1) {
  
//   return  new Promise(function(resolve, reject) {
//       setTimeout(() => {
//         Math.random() > 0.5 ? resolve(res1 + "good2") : reject("bad2");
//       }, 300);
//     })
// }


// let promis3 = new Promise(function(resolve, reject) {
//     resolve("good3")
// })


async function promis4() {
  let num = Math.random();

  if (num > 0.5) {
    return "Bingo";

  } else {
    throw new Error("bewgfrgfsgfdgad");
  }
}



export { promis4};