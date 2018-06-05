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

console.log("my javascript works");
var sym = document.getElementById('symbol').value;
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;

function printResults(){
  document.getElementById('results').innerHTML = eval(a+sym+b);
};
