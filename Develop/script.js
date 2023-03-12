// Assignment code here
var characterLength = 8;
var choiceArray = ""
var specialChars= ["!", "@","#","$","%","^","&","*","(",")","_","+","{","}","[","]","?"];
var numberChars = ["0","1","2","3","4","5","6","7","8","9"];
var lcChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Step 0: Define the function generatePassword.
function generatePassword(){
  console.log("It's working! You clicked the button!");
  // Step 1: Prompt the user for the password criteria inside of the generateButton function. 
  characterLength = parseInt(prompt ("How many characters would you like your password to contain?", "Password must be between 8-128 characters"));
  if (confirm ("Click ok to confirm including special characters.",)) {
    choiceArray = choiceArray.concat(specialChars);
  }
  if (confirm ("Click ok to confirm including numbers.")) {
    choiceArray = choiceArray.concat(numberChars);
  }
  if (confirm ("Click ok to confirm including lowercase letters.")) {
    choiceArray = choiceArray.concat(lcChars);
  }
  if (confirm ("Click ok to confirm including uppercase letters.")) {
    choiceArray = choiceArray.concat(upChars);
  }

// Step 2: Validate the input based on the criteria
 if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length input must be a number between 8-128 characters. Please try again.");
    return "Please try again";
 }
 
  // Step 3: Generate password based on criteria.

// Step 4:Display the password in the textarea by returning the function with the var set to the generated password.
return true
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
