// Assignment code here
var characterLength = 8;
var choiceArr = [];
var specialChars= ["!", "@","#","$","%","^","&","*","(",")","_","+","{","}","[","]","?"];
var numberChars = ["0","1","2","3","4","5","6","7","8","9"];
var lcChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if(correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}

function generatePassword() {
    var password = "";
    for (var i = 0; i < characterLength; i++ ) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
}

  function getPrompts(){
    choiceArr = [];
    characterLength = parseInt(prompt ("How many characters would you like your password to contain?", "Password must be between 8-128 characters"));

      if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character lengths have to be between 8-128 characters. Please Try again.");
        return false;
      }

      if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lcChars);
      }
      if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upChars);
      }
      if (confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialChars);
      }
      if (confirm("Would you like number in your password?")) {
        choiceArr = choiceArr.concat(numberChars);
      }
      return true;
  }