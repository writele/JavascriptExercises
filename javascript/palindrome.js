var wordInput;
var wordOutput;

function palindrome(word) {
  var wordArr = word.split("");
  var newArr = [];
  for(var i=wordArr.length-1; i >= 0; i--) {
    newArr.push(wordArr[i]);
  }
  return newArr.join("");
}

function isPalindrome(word1, word2) {
  if(word1 === word2) {
    appendOutput("#palindromeOutput","<p>It's a palindrome!</p>");
  }
  else {
    appendOutput("#palindromeOutput","<p>It's not a palindrome.</p>");
  }
}

function runProgram() {
  clearOutput("#palindromeOutput");
  wordInput = getValue("word");
  wordOutput = palindrome(wordInput);
  isPalindrome(wordInput, wordOutput);
  appendOutput("#palindromeOutput", "<p>" + wordOutput + "</p>");
}

