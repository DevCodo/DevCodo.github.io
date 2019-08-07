import "@babel/polyfill";
// import Parser from "./js/EmailParser";

// let parser = new Parser("iva_black@mail.ru");

// console.log(parser.email);
// console.log(parser.name);
// console.log(parser.domain);
// parser.email = "kirukaro.ru"
// console.log(parser.email);
// console.log(parser);
// // console.log(parser);



let some = new Promise( function(resolve, reject) {
 
  Math.random() > 0.5 ? resolve(3) : reject("Fatal")
})

some.then((x) => {
  console.log(x)
}).catch((error) => {
  console.log(new Error(error))
})

