// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared Variables
const length = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_-+=";

// Password Length Validation: Returns true if length is valid and the input is a number; returns false, if does not meet criteria
function checkLength(length) {
  if (length < 8 || length > 128) {
    return false;
  } else if (isNaN(length)) {
    return false;
  }
  return true;
}

// Generates Password Function: Prompts the user for length, numbers, special character, uppercase, and lowercase
function generatePassword() {
  let enteredLength = 0;
  enteredLength = window.prompt("Please choose password length between 8 and 128");
  // This loop will continue checking until returned true
  while (checkLength(enteredLength) === false) {
    enteredLength = window.prompt("Invalid Entry!  Please choose password length between 8 and 128")
  }
  const numberResult = window.confirm("Would you like to include numbers?");
  const symbolResult = window.confirm("Would you like to include special characters?");
  const upperResult = window.confirm("Would you like to include uppercase letters?");
  const lowerResult = window.confirm("Would you like to include lowercase letters?");

  let arrayResult = [];
  let userResult = [];

  // Once user's input is collected, the data is then split into an array of substrings and is merged into a new array
  if (numberResult) {
    arrayResult = arrayResult.concat(number.split(""))
  }

  if (symbolResult) {
    arrayResult = arrayResult.concat(symbol.split(""))
  }

  if (upperResult) {
    arrayResult = arrayResult.concat(upperCase.split(""))
  }

  if (lowerResult) {
    arrayResult = arrayResult.concat(lowerCase.split(""))
  }
  // Uses Math.random function to return a random password
  console.log(enteredLength);
  for (let i = 0; i < enteredLength; i++) {
    userResult.push(arrayResult[Math.floor(Math.random() * arrayResult.length)]);
  }
  // Creates and returns a new string by concatenating of the elements in the array
  return userResult.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);