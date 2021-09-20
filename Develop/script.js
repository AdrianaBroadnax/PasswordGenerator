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
  console.log(Math.floor(Math.random() * max)) 
}

// Comfirm yes/no include lowercase
function Lowercase (){
  var Password = prompt ("Would you like any lowercase letters?");
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