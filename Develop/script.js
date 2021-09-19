// Assignment Code
// console.log (Password)
// console.log (GeneratePassword);
console.log({Password, generatePassword})
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function Numbers (){
  var Password = prompt(" How long do you want the password? It must be at least 8 characters and no more than 128 characters!" );
  var min = 8
  var max = 128;
  // 8 <= x < 128
  console.log(Math.floor(Math.random()min * max))
}
function writePassword() {
  var password = generatePassword(;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
