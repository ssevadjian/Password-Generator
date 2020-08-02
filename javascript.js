// Assignment Code
const generateBtn = document.querySelector("#generate");
const specialCharacter = ["@", "$", "%", "^", "!", "#", "*", "`", "(", ")", "[", "]", "{", "+", "=", "-"];
const ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const integers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = prompt("Please enter the desired length of your password. This must be at least 8 characters long, but less than 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be at least 8 characters and less than 128.");
    return;
  }
  if (isNaN(passwordLength) === true) {
    alert("Password length must be provided as a number.");
    return;
  }

  let lowercaseConfirm = confirm("Would you like to include lower case characters?");

  let uppercaseConfirm = confirm("Would you like to include uppercase characters?");

  let numericConfirm = confirm("Would you like to include numbers in your password?");

  let specialCharactersConfirm = confirm("Would you like to include special characters?");

  if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialCharactersConfirm === false) {
    alert("You must select at least one character type.");
    return;
  }

  let minCharacters = 0;

  let lowercase = "";
  let uppercase = "";
  let numeric = "";
  let specialChar = "";

  let passwordCreator = {
    getLowercase: function () {
      let randomLowercase = Math.floor(Math.random() * lcLetters.length);
      let randomElement = lcLetters[randomLowercase];
      return randomElement;
    },
    getUppercase: function () {
      let randomUppercase = Math.floor(Math.random() * ucLetters.length);
      let randomElement = ucLetters[randomUppercase];
      return randomElement;
    },
    getNumeric: function () {
      let randomInteger = Math.floor(Math.random() * integers.length);
      let randomElement = integers[randomInteger];
      return randomElement;
    },
    getSpecialCharacters: function () {
      let randomIndex = Math.floor(Math.random() * specialCharacter.length);
      let randomElement = specialCharacter[randomIndex];
      return randomElement;
    }
  };

  if (lowercaseConfirm === true) {
    lowercase = passwordCreator.getLowercase();
    minCharacters++;
  }

  if (uppercaseConfirm === true) {
    uppercase = passwordCreator.getUppercase();
    minCharacters++;
  }

  if (numericConfirm === true) {
    numeric = passwordCreator.getNumeric();
    minCharacters++;
  }

  if (specialCharactersConfirm === true) {
    specialChar = passwordCreator.getSpecialCharacters();
    minCharacters++;
  }

  let myRandomPassword = "";
  for (let i = 0; i < (parseInt(passwordLength) - minCharacters); i++) {
    let randomNumberPicked = Math.floor(Math.random() * 4);
    myRandomPassword += randomNumberPicked;
  }
  myRandomPassword += lowercase;
  myRandomPassword += uppercase;
  myRandomPassword += numeric;
  myRandomPassword += specialChar;

  return myRandomPassword;

}
