// Assignment Code
var generateBtn = document.querySelector("#generate");

const length = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_-+=";


function checkLength(length) {
  if (length <= 8 || length >= 128) {
    window.alert("Invalid Entry.  Please choose password length between 8 and 128")
    generatePassword();
  }
  return length;
}


function generatePassword() {
  let enteredLength = 0;
  enteredLength = window.prompt("Please choose the length of the password");
  console.log(enteredLength);
  // const passwordLength = checkLength(enteredLength);
  if (enteredLength <= 8 || enteredLength >= 128) {
    window.alert("Invalid Entry.  Please choose password length between 8 and 128")
    return;
  }

  const numberResult = window.confirm("Would you like to include numbers?");
  const symbolResult = window.confirm("Would you like to include special characters?");
  const upperResult = window.confirm("Would you like to include uppercase letters?");
  const lowerResult = window.confirm("Would you like to include lowercase letters?");

  let arrayResult = [];
  let userResult = [];
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
  console.log(enteredLength);
  for (let i = 0; i < enteredLength; i++) {
    userResult.push(arrayResult[Math.floor(Math.random() * arrayResult.length)]);
  }

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