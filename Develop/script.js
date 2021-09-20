// Assignment Code
// console.log (Password)
// console.log (GeneratePassword);
console.log({Password, generatePassword})
var generateBtn = document.querySelector("#generate");

// The vars needed
var abcLower

// Write password to the #password input
function Numbers (){
  var length = prompt(" How many characters would you like in your password? Pick a number between 8 and 128" );
  var min = 8
  var max = 128;
  // length <8 * length > 128
  if(length <8 * length >128){
    alert("It must be between 8 and 128 characters!")
  }
}

// Comfirm lowercase
function Lowercase (){
  var lowercase = prompt ("Would you like any lowercase letters?");
  var options = ["Yes", "No"]
  if (option[0] === "Yes") {
    console.log(options[0]);
    alert(`Yes ${Password} ${generatePassword}`)
  }
  if (option[1] === "No") {
    console.log (options[1]);
    alert(`No ${Password} ${generatePassword}`)
  }
}
// comfirm yes/no uppercase
// comfirm yes/no numeric
// comfirm yes/special characters

// generate password
function writePassword() {
  var password = generatePassword(
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// display alert  of what the password is