var letterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var letterUpA = letterUp.split("");
   var letterLow = "abcdefghijklmnopqrstuvwxyz";
   var letterLowA = letterLow.split("");
   var number = "0123456789";
   var numberA = number.split("");
   var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
   var symbolA = symbol.split("");

   // Password Generate
function generatePass(){
    var characters = [];
    var password = "";

//  to begin
window.onload = alert("Hello! Click 'Generate password' to get started!");

// length of pass
    var length = prompt("How many characters would you like in your password?");
    if(length <8 || length > 128){
        alert("oops! It must between 8 and 128 characters!");
    }
// needed to make the password
    else{
        if(confirm("Any upper case letters?")){
            Array.prototype.push.apply(characters, lettersUpA);
        }
        if(confirm("What about lower case letters?")){
            Array.prototype.push.apply(charcters, lettersLowA);
        }
        if(confirm("How about numbers?")){
            Array.prototype.push.apply(characters, numberA);
        }
        if(confirm("Any symbols?")){
            Array.prototype.push.apply(characters, symbolA);
        }
        if(characters.length===0){
            alert("Please pick at LEAST one character!");
        }
// loop
        else{
            for(var i=0; i<length; i++){
                var random = Math.floor(Math.random()*characters.length);
                result += characters[random];
            }
        }
        }
// result
        generateBtn.getElementById("password").innerHTML = result;
   }
}