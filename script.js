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

function generatePassword() {
  let output = "";
  let upper = "ABCDEFGHIJKLMONPQRSTUVWXYZ"; //Upper Case Characters
  let lower = "abcdefghijklmnopqrstuvwxyz"; //Lower Case Characters
  let spec = "!@#$%^&*()"; //Symbols
  let num = "1234567890"; //numbers

  let char;

  // var letters = "abcdefghijklmnop" //test string
  // var randLetter = letters.length
  let howMany = prompt("How many characters would you like?");

  if (howMany < 8 || howMany > 128) {
    alert(
      "Password must be more between 8 and 128 Characters. Please try again"
    );
    return;
  }
  var wantSpec = confirm("Would you like to include special characters?");
  var wantNum = confirm("Would you like to include numbers?");
  var wantUpper = confirm("Would you like to include uppercase characters?");
  var wantLower = confirm("Would you like to include lowercase characters?");

  if (
    wantSpec === false &&
    wantNum === false &&
    wantUpper === false &&
    wantLower === false
  ) {
    alert("At least one Character type must be selected. Please try again.");
    return;
  }

  if (
    wantSpec === true &&
    wantNum === false &&
    wantUpper === false &&
    wantLower === false
  ) {
    char = spec;
    console.log("Special only");
  }
  if (
    wantSpec === true &&
    wantNum === true &&
    wantUpper === false &&
    wantLower === false
  ) {
    char = spec + num;
    console.log("Special Characters and Numbers");
  }
  if (
    wantSpec === true &&
    wantNum === true &&
    wantUpper === true &&
    wantLower === false
  ) {
    char = spec + num + upper;
    console.log("Special Characters, Numbers and Uppercase");
  }
  if (
    wantSpec === true &&
    wantNum === true &&
    wantUpper === true &&
    wantLower === true
  ) {
    char = spec + num + upper + lower;
    console.log("Special Characters, Numbers, Uppercase and Lowercase");
  }

  for (let i = 0; i < howMany; i++) {
    output += char.charAt(Math.floor(Math.random() * char.length));
  }
  console.log(output);
  alert(output);
  return output;
}
