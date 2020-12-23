// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// math.floor(math.raindom())
// console.log()
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


//Variable Arrays: Special Characters, Numeric Characters, lowercase characters
//Uppercase Characters

// var specialCharacters= ["!","@","#","%","^","&","*","(",")","-","_","+","="];
// var numericCharacters= ["1","2","3","4","5","6","7","8","9","0"];
// var lowercaseCharacters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var uppercaseCharacters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Randome Generator from Array

// var randomLower = Math.floor(Math.random() * specialCharacters)

// Math.floor(math.random() *uppercaseCharacters);
// console.log(uppercaseCharacters);
//Prompt- How many characters would you like your password to contain

//Alert- Click OK to confirm including special characters

//Alert- Click OK to confirm including numeric characters

//Alert- Click OK to confirm including lowercase characters

//Click OK to confirm including uppercase characters

//Alert- Must select at least one character type
//DOM Elements

// const resultEL = document.getElementById('generate');

// generateEl.addEventListener('click', () => {
//     Alert("Click OK to confirm including special characters");
// }

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol,
// };

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() *26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) +65);
// }

// function getRandomNumber () {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

// var howMany = prompt("How many characters would you like your password to contain (32 max)");

// if (howMany < 8) {
//     alert("Password must contain at least 8 Characters");
// }

// else {
//     var specialChar = confirm("Would you like to include special characters?");
// }

// if (specialChar === false) {
//     var includeNumber = confirm("Would you like to include numeric characters");
// }
    
// else {
//     var includeNumber = confirm("Would you like to include numeric characters");
// }

// if (includeNumber === true) {
//     var includeUpper = confirm("Click OK to confirm including lowercase characters");
// }



var howMany = prompt("How many characters would you like your password to contain (32 max)");

if (howMany < 8) {
    alert("Password must contain at least 8 Characters");
}

else {
    var specialChar = confirm("Would you like to include special characters?");
// }

// if (specialChar === false) {
    var includeNumber = confirm("Would you like to include numeric characters");
// }
    
// else {
    var includeNumber = confirm("Would you like to include numeric characters");
// }

// if (includeNumber === true) {
    var includeUpper = confirm("Click OK to confirm including lowercase characters");
}
