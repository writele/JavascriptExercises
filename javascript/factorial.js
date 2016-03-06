var factorialInput = 0;
var factorialOutput = 0;


function factorialize(factorial) {
  var result = 1;
  for(var i= factorial; i > 0; i--) {
    result *= i;
  }
  return result;
}

function runProgram() {
  clearOutput("p#factorialOutput");
  factorialInput = getValue("number1");
  factorialOutput = factorialize(factorialInput);
  appendOutput("p#factorialOutput", factorialOutput);
};
