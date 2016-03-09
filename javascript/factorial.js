var factorialInput;
var factorialOutput;


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
  if (isValid(factorialInput)) {
    appendOutput("p#factorialOutput", factorialOutput);
  }
  else {
    appendOutput("p#factorialOutput", "There's been an error. Please make sure you've entered a valid number.")
  }
  
};
