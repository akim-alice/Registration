class Calculator {
    add(a, b){
      return a + b;
    };

    subtract(a, b){
      return a - b;
    };

    multiply(a, b){
      return a * b;
    };

    divide(a, b){
      return a / b;
    };

    square(a){
      return a * a;
    };

    modulus(a, b){
       return a % b;
    };
  };


var sym = document.getElementById('symbol').value;
var a = document.getElementById('a').value;
var b = document.getElementsById('b').value;
var calculate = new Calculator();
console.log("calc link working");
