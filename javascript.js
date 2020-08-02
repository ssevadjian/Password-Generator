// Assignment Code
const generateBtn = document.querySelector("#generate");
const specialCharacter = ["@", "$", "%", "^", "!", "#", "*", "`", "(", ")", "[", "]", "{", "+", "=", "-"];

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
  console.log("my password length is" + passwordLength);

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
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUppercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getNumeric: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getSpecialCharacters: function () {
      let randomIndex = Math.floor(Math.random() * specialCharacter.length);
      console.log("randomIndex is" + randomIndex);
      let randomElement = specialCharacter[randomIndex];
      console.log("my randomElement" + randomElement);
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
    console.log("my random number " + randomNumberPicked);
    myRandomPassword += randomNumberPicked;
  }
  myRandomPassword += lowercase;
  myRandomPassword += uppercase;
  myRandomPassword += numeric;
  myRandomPassword += specialChar;

  return myRandomPassword;

}
