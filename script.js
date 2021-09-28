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
        if (userOptions.useLowerCase){
            characterOptions = characterOptions.concat(letterLowA);
            characterMust.push(randomNumber(letterLowA))
        }
        if (userOptions.useSymbol){
            characterOptions = characterOptions.concat(useSymbol);
            characterMust.push(randomNumber(symbolA))
        }
        if(userOptions.useNumbers){
            characterOptions = characterOptions.concat(useNumbers);
            characterMust.push(randomNumber(numberA))
        }
        result[length] = characterMust [length]
        result[letterUp] = characterMust [letterUpA]
        result[letterLow] = characterMust [letterLowA]
        result[symbol] = characterMust [symbolA]
        result [number] = characterMust [symbolA];
        return result.join('')
    }



    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
      }
    // var result = characterMust[Math.floor(Math.random() * characterMust.length)];
    //   function writePassword(){
    //     var password = "";
    //     var allowed = {};
    //     if (num) password += random(allowed.num = "012345678");
    //     if (abcLower) password += random(allowed.abcLower = "abcdefghijklmonpqrstuvwxyz");
    //     if (abcUpper) password += random(allowed.abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    //     // if (sym) password += random(allowed.num = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~");
    var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener("click", writePassword);
    var result = characterMust[Math.floor(Math.random() * characterMust.length)]; 