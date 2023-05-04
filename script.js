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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
