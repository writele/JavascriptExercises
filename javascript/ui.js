function getValue(id) {
  var value = document.getElementById(id).value;
  return value;
}

function appendOutput(element, variable) {
  $(element).append(variable);
}

function clearOutput(element) { 
  $(element).html("");
}

$(":submit").on("click", function(event) {
  event.preventDefault();
  runProgram();
});