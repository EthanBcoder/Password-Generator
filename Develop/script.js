// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = 8;
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
  passwordText.value = password;
  


}

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );


  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  }

  if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
  ) {
  alert('Must select at least one character type');
  return null;
  }

  var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];


  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }


  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
