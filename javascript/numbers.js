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


function getValue(id) {
  var value = document.getElementById(id).value;
  return value;
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

function clearOutput() {
  $("span#least").html("");
  $("span#greatest").html("");
  $("span#mean").html("");
  $("span#sum").html("");
  $("span#product").html("");
}

function appendOutput() { 
  $("span#least").append(leastNumber);
  $("span#greatest").append(greatestNumber);
  $("span#mean").append(meanNumber);
  $("span#sum").append(sumNumber);
  $("span#product").append(productNumber);
}


$(":submit").on("click", function(event) {
    event.preventDefault();
    clearOutput();
    getValues();
    pushValuestoArray();
    setOutput();
    appendOutput();
    clearValues();
});



