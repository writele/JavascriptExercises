var greatestNumber;
var leastNumber;
var meanNumber;
var productNumber;
var sumNumber;

var number1;
var number2;
var number3;
var number4;
var number5;

var numbers = [];


function calculateLeastNumber(arr) {
  return Math.min.apply(Math, arr);
}

function calculateGreatestNumber(arr) {
  return Math.max.apply(Math, arr);
}

function calculateMeanNumber(arr) {
  var mean = 0;
  for (var i=0, arrLength = arr.length; i < arrLength; i++) {
    mean += arr[i];
  }
  return mean / arrLength;
}

function calculateSumNumber(arr) {
  var sum = 0;
  for (var i=0, arrLength = arr.length; i < arrLength; i++) {
  sum += arr[i];
  }
  return sum;
}

function calculateProductNumber(arr) {
  var product = 1;
  for (var i=0, arrLength = arr.length; i < arrLength; i++) {
  product *= arr[i];
  }
  return product;
}

function getValues() {
  number1 = getValue("number1");
  number2 = getValue("number2");
  number3 = getValue("number3");
  number4 = getValue("number4");
  number5 = getValue("number5");
}

function pushValuestoArray() {
  numbers.push(Number(number1));
  numbers.push(Number(number2));
  numbers.push(Number(number3));
  numbers.push(Number(number4));
  numbers.push(Number(number5));
}

function clearValues() {
  numbers = [];
}


function setOutput() {
  leastNumber = calculateLeastNumber(numbers);
  greatestNumber = calculateGreatestNumber(numbers);
  meanNumber = calculateMeanNumber(numbers);
  sumNumber = calculateSumNumber(numbers);
  productNumber = calculateProductNumber(numbers);
}

function clearOutputNumbers() {
  clearOutput("span#error");
  clearOutput("span#least");
  clearOutput("span#greatest");
  clearOutput("span#mean");
  clearOutput("span#sum");
  clearOutput("span#product");
}

function appendOutputNumbers() { 
  appendOutput("span#least", leastNumber);
  appendOutput("span#greatest", greatestNumber);
  appendOutput("span#mean", meanNumber);
  appendOutput("span#sum", sumNumber);
  appendOutput("span#product", productNumber);
}

function runProgram() {
  clearOutputNumbers();
  getValues();
  pushValuestoArray();
  setOutput();
  if (isValid(number1) && isValid(number2) && isValid(number3) && isValid(number4) && isValid(number5)) {
    appendOutputNumbers();
  }
  else {
    appendOutput("span#error", "<p>There's been an error. Please make sure you've entered valid numbers.</p>")
  }
  clearValues();
}





