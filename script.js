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


//Build string for special characters

var specSymb = "!@#$%^&*()_-";

//Build string for Numbers

var numbers = "1234567890";

// Build string for uppercase letters

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Build string for lowercase letters

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// We need a generatePassword Function

function generatePassword() {
    var howMany = prompt("How Many Characters would you like? (Min 8, Max 128)");

    if (howMany < 8 || howMany > 128){
        alert("Password must be more than 8 and less than 128 Characters, Please try again.");
        
    }
    else{
        var specialCharacters = confirm("Would you like to include Special Characters?");
        var numbers = confirm("Would you like to include numbers?");        
    }

    console.log(howMany);
    console.log(specialCharacters);
    console.log(numbers);

    var result = "";
    var allChar = "";

    if (specialCharacters === true) {
        allChar = allChar + specSymb;
    }
    if (numbers === true) {
        allChar = allChar + numbers;
    }

    for (var i = 0; i < howMany; i++) {
        result += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }
    return result;


}



//How do I make an alert pop up on button click



// document.getElementById("generate").onclick = function () {
//     var howMany = prompt("How Many Characters would you like? (Min 8, Max 128)");


//     //   if (howMany < 8 || howMany > 128) {
//     //     alert("Password must be more than 8 or less than 128 Characters, Please try again");
//     //   }
//     //   else {
//     //     var specialChar = confirm("Would you like to include special characters?");

//     //     var includeNumber = confirm("Would you like to include numeric characters");

//     //     var includeUpper = confirm("Click OK to confirm including uppercase letters");

//     //     var includeLower = confirm("Click OK to confirm including lowercase letters");
//     // }

//     if (howMany > 8 || howMany < 128) {
//     var specialChar = confirm("Would you like to include special characters?");

//     var includeNumber = confirm("Would you like to include numeric characters");

//     var includeUpper = confirm("Click OK to confirm including uppercase letters");

//     var includeLower = confirm("Click OK to confirm including lowercase letters");

//     }
//     else {
//     alert("Password must be more than 8 or less than 128 Characters, Please try again");
//     }



// }