
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function copyPassword() {
 document.getElementById("password").value = password;
  alert("Password copied to clipboard!");
}


var length = Number(prompt("Enter a password length between 8 and 128.")),
  charType = prompt("Enter a special character."),
  charType = prompt("Enter a numeric."),
  charType = prompt("Enter a uppercase."),
  charType = prompt("Enter a lowercase."),
  password = generatePassword();


var chars = "0123456789abcdefghijklmonpqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";


for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
document.getElementById("password").value=password;


