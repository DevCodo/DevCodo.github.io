export default class App {
  name = "Ivan";
  mult(a, b) {
    console.log(a * b);
  }
}

(new App).mult(3, 4);