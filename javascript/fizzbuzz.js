
var numberInput1;
var numberInput2;
var fizzbuzzOutput;
var numbers = [];

for(var i=1; i <= 100; i++) {
  numbers.push(i);
}

function fizzbuzz(number1, number2, arr) {
  for(var i=0, arrLength = arr.length; i < arrLength; i++) {
    if (arr[i] % number1 === 0 && arr[i] % number2 === 0) {
      appendOutput("#fizzbuzzOutput", "FizzBuzz");
    }
    else if(arr[i] % number1 === 0) {
      appendOutput("#fizzbuzzOutput", "Fizz");
    }
    else if(arr[i] % number2 === 0) {
      appendOutput("#fizzbuzzOutput", "Buzz");
    }
    else
    {
    appendOutput("#fizzbuzzOutput", arr[i]);
    }
    appendOutput("#fizzbuzzOutput", "<br>");
  }
}

function getValues() {
  numberInput1 = getValue("number1");
  numberInput2 = getValue("number2");
}

function runProgram() {
  clearOutput("#fizzbuzzOutput");
  getValues();
  fizzbuzz(numberInput1, numberInput2, numbers);
}
