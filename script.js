// Password Generate

    var characters = [];
    var password = "";

    // var needed
    var letterUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letterUpA = letterUp.split("");
    var letterLow = "abcdefghijklmnopqrstuvwxyz";
    var letterLowA = letterLow.split("");
    var number = "0123456789";
    var numberA = number.split("");
    var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
    var symbolA = symbol.split("");


    //  to begin
    window.onload = alert("Hello! Click 'Generate password'!");

    function userInput() {
        // length of pass
        var length = prompt("How many characters would you like in your password?");

        if (length < 8 || length > 128) {
            alert("oops! It must between 8 and 128 characters!");
            return;
        }
        var useUpperCase = confirm("Any upper case letters?")
        var useLowerCase = confirm("What about lower case letters?")
        var useNumbers = confirm("How about numbers?")
        var useSymbols = confirm("Any Symbols?")

        if (useUpperCase === false && useLowerCase === false && useNumbers === false && useSymbols === false) {
            alert("Please pick at LEAST one type character!");
            return;
        }

        var passwordInput = {
            length: length,
            useUpperCase: useUpperCase,
            useLowerCase: useLowerCase,
            useSymbols: useSymbols,
            useNumbers: useNumbers

        }

        return passwordInput
    }

    function randomNumber(array) {
        var randomIndex = Math.floor(Math.random()*array.length);
        var randomElement = array[randomIndex];
        return randomElement;
    }
    
    function generatePassword() {
        var userOptions = userInput();

        var result = []
        var characterOptions = []
        var characterMust = []

        if (userOptions.useUpperCase){
            characterOptions = characterOptions.concat(letterUpA);
            characterMust.push(randomNumber(letterUpA))
        }

        console.log("characterOptions: ", characterOptions)


        //1. for loop through character options -> push random characters to resul

        //2. For loop through guaranteed characters 
        //result[i] = characterMust[i];

        // return result.join('')


    }

    // needed to make the password

    // if(confirm("Any upper case letters?")){
    //     Array.prototype.push.apply(characters, lettersUpA);
    // }
    // if(confirm("What about lower case letters?")){
    //     Array.prototype.push.apply(charcters, lettersLowA);
    // }
    // if(confirm("How about numbers?")){
    //     Array.prototype.push.apply(characters, numberA);
    // }
    // if(confirm("Any symbols?")){
    //     Array.prototype.push.apply(characters, symbolA);
    // }
    // if(characters.length===0){
    //     alert("Please pick at LEAST one character!");
    // }
    // loop
    // else{
    //     for(var i=0; i<length; i++){
    //         var random = Math.floor(Math.random()*characters.length);
    //         result += characters[random];
    //     }
    // }
    // }
    // result
    generateBtn.getElementById("password").innerHTML = result;


    // Assignment Code
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
