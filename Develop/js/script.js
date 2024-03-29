// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // when you assign a function call to a variable you can assume it is going to return something.
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // reference to the text area element and to set the text inside of it, you would set whateverstring you want inside of it. 

};


var generatePassword = function () {
  var passwordLength = prompt("Please insert your password length"); // in memory because of this 
  // console.log(passwordLength); // for us to know what the value of passwordLength is -debugging

  if (passwordLength < 8) {
    alert("Your password needs to be at least 8 characters long, please try again");
    return;
  } else if (passwordLength > 128) {
    alert("Your password cannot be longer than 128 characters,please try again");
  };
  // recursion-calling a function inside of itself. 


  // how to put these together so I don't have to call on each one.... SWITCH STATEMENT


  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ["@", "$", "#", "!", "^", "?", "{}", "<", ">", "*"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  // const passwordRequirements= confirm("Did you want" + [i] + "in your Password?")
  //hasUpper, hasLower, hasSymbols, hasNumeric



  var hasUpper = confirm("Did you want Upper case letters in your Password?");
  // console.log(hasUpper);

  var hasLower = confirm("Did you want Lower case letters in your Password?");

  var hasSymbols = confirm("Did you want Symbols in your Password?");

  var hasNumeric = confirm("Did you want Numbers in your Password?");


  var userSelection = [];


  switch (confirm("Your password will be generated")) {
    case hasUpper:
      userSelection = userSelection.concat(upper)
      // console.log("The user selected to have upper case letters in password");
      break;
    case hasLower:
      userSelection.concat(lower)
    // console.log("The user selected to have lower case letters in password")
    case hasSymbols:
      userSelection.concat(symbols)
    case hasNumeric:
      userSelection.concat(numbers)
      break;
    default: console.log("password generator is down!");
      break;
  }


  if (userSelection.length < 1) {
    alert("Please select at least one special character, please try again.");
    return;
  }


  var finalP = ''
  for (let i = 0; i < passwordLength; i++) {
    var randomI = Math.floor(Math.random() * userSelection.length)
    console.log(randomI);
    // We are going to create a new variable that will keep adding characters based on the random Index variable we created above
    finalP = finalP + userSelection[randomI];
    console.log(finalP)
  }



  return finalP;


};

generateBtn.addEventListener("click", writePassword)