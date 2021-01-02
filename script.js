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



var specSymb = "!@#$%^&*()_-";
var numbers = "1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
    var howMany = prompt("How Many Characters would you like? (Min 8, Max 128)");

    if (howMany < 8 || howMany > 128) {
        alert("Password must be more than 8 and less than 128 Characters, Please try again.");

    }
    else {
        var specialCharacters = confirm("Would you like to include Special Characters?");
        var numbers = confirm("Would you like to include numbers?");
        var includeUpper = confirm("Would you like to include Upper Case Characters?");
        var includeLower = confirm("Would you like to include Lower Case Characters?")
    }

    // console.log(howMany);
    // console.log(specialCharacters);
    // console.log(numbers);

    var result = "";
    var allChar = "";

    if (specialCharacters === true) {
        allChar = allChar + specSymb;
    }
    if (numbers === true) {
        allChar = allChar + numbers;
    }
    if (includeUpper === true) {
        allChar = allChar + upperCase;
    }
    if (includeLower === true) {
        allChar = allChar + lowerCase;
    }
    if (specialCharacters == !true && numbers == !true && includeUpper == !true && includeLower == !true){
        alert("At least one character type must be selected");
        return;
    }

    for (var i = 0; i < howMany; i++) {
        result += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }
    return result;


}

