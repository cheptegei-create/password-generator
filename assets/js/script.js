//targeting elements in the HTML file.
var generateButton = document.querySelector("#generate");
var displayPass = document.querySelector("#password");


//Object called password
var password = {
  //properties
  spacialCharacters: [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    ":",
    ";",
    "'",
    '"',
    "<",
    ",",
    ">",
    ".",
    "/",
    "?",
    "[",
    "]",
    "`",
  ],
  numericCharacters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lowerCaseCharacters: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ],
  upperCaseCharacters: [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ],
};
console.log(password.upperCaseCharacters);



var generatePassword = function () {
  console.log("button clicked");
//How many characters do you want your password to contain.
var finalPassLength = parseInt(window.prompt(
  "How many characters do you want your password to contain."
));


//Password length must be atleast 8 characters.

if (finalPassLength < 8) {
  window.alert("Your password must be atleast 8 charatcers");
  var finalPassLength = parseInt(window.prompt(
    "How many characters do you want your password to contain."
  ));
} 

//Password must be less than 129 characters.
if (finalPassLength > 129) {
  window.alert("Your password must be less than 129 charatcers");
  var finalPassLength = parseInt(window.prompt(
    "How many characters do you want your password to contain."
  ));
}

alert("Your password will have " + finalPassLength + " characters");
//Click ok if you want special characters.
var confirmSpecialCharacters = window.confirm("Click ok if you want special characters");
//Click ok if you want numeric characters.
var confirmNumericCharacters = window.confirm("Click ok if you want numeric characters");
//Click ok to include lowercase characters.
var confirmLowerCaseCharacters = window.confirm("Click ok to include lowercase characters");
//Click ok to include uppercase characters
var confirmUpperCaseCharacters = window.confirm("Click ok to include uppercase characters");

//conditions for criteria
if (!confirmLowerCaseCharacters && !confirmUpperCaseCharacters && !confirmNumericCharacters && !confirmSpecialCharacters) {
  window.alert("You must choose at least one criteria");
  //Click ok if you want special characters.
var confirmSpecialCharacters = window.confirm("Click ok if you want special characters");
//Click ok if you want numeric characters.
var confirmNumericCharacters = window.confirm("Click ok if you want numeric characters");
//Click ok to include lowercase characters.
var confirmLowerCaseCharacters = window.confirm("Click ok to include lowercase characters");
//Click ok to include uppercase characters
var confirmUpperCaseCharacters = window.confirm("Click ok to include uppercase characters");
}

//defining password characters
var passChar = [];

if (confirmSpecialCharacters) {
  passChar = passChar.concat(password.spacialCharacters);
}

if (confirmNumericCharacters) {
  passChar = passChar.concat(password.numericCharacters);
}

if (confirmLowerCaseCharacters) {
  passChar = passChar.concat(password.lowerCaseCharacters);
}

if (confirmUpperCaseCharacters) {
  passChar = passChar.concat(password.upperCaseCharacters);
}

console.log(passChar);

//defining a random password
var randomPass = [];

for (var x = 0; x < finalPassLength; x++) {
  randomPass += passChar[Math.floor(Math.random() * passChar.length)]
}
  //display password on the page
  return randomPass;
};

var criteriaSelect = function () {
  var finalPass = generatePassword();
  displayPass.textContent = finalPass;
};

//Adding an event listener to the generate button
generateButton.addEventListener("click", criteriaSelect);
