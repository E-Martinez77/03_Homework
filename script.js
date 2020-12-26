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


//Build array for special characters

var specSymb = [
    "!"
    , "@"
    , "#"
    , "$"
    , "%"
    , "^"
    , "&"
    , "*"
    , "("
    , ")"
    , "_"
    , "-"
  ];

//Build array for Numbers

var numbers = [
    "1"
    , "2"
    , "3"
    , "3"
    , "4"
    , "5"
    , "6"
    , "7"
    , "8"
    , "9"
    , "0"
  ];

// Build an array for uppercase letters

var upperCase = [
    "A"
    , "B"
    , "C"
    , "D"
    , "E"
    , "F"
    , "G"
    , "H"
    , "I"
    , "J"
    , "K"
    , "L"
    , "M"
    , "N"
    , "O"
    , "P"
    , "Q"
    , "R"
    , "S"
    , "T"
    , "U"
    , "V"
    , "W"
    , "X"
    , "Y"
    , "Z"
  ];

//Build an array for lowercase letters

var lowerCase = [
    "a"
    , "b"
    , "c"
    , "d"
    , "e"
    , "f"
    , "g"
    , "h"
    , "i"
    , "j"
    , "k"
    , "l"
    , "m"
    , "n"
    , "o"
    , "p"
    , "q"
    , "r"
    , "s"
    , "t"
    , "u"
    , "v"
    , "w"
    , "x"
    , "y"
    , "z"
  ];

// We need a generatePassword Function

//How do I make an alert pop up on button click

document.getElementById("generate").onclick = function () {
  var howMany = prompt("How Many Characters would you like? (Minimum 8)");

  if (howMany < 8) {
    alert("Password must be more than 8 Characters, Please try again");
  }
  else {
    var specialChar = confirm("Would you like to include special characters?");

    var includeNumber = confirm("Would you like to include numeric characters");

    var includeUpper = confirm("Click OK to confirm including uppercase letters");

    var includeLower = confirm("Click OK to confirm including lowercase letters");
  }



}