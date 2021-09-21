// Assignment Code
// console.log (Password)
// console.log (GeneratePassword);
console.log({Password, generatePassword})
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function Numbers (){
  var length = prompt(" How many characters would you like to use in your password? It must be at least 8 characters and no more than 128 characters!" );
  var min = 8
  var max = 128;
  // 8 < * > 128
  if(length <8 * length >128){
      alert("It must be between 8 and 128 characters")
  }
}
// Comfirm characters wanted

function writePassword() {
  var password = generatePassword(
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// display alert  of what the password is