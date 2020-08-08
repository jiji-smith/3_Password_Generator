

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userInput();
  var password = makePasswords();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// set the variable lists stored in different types
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var userChoice = [];
var passwordsLength = 8;


// ask user the choice of the length + types of characters

function userInput() {
  passwordsLength = prompt("Please type the length of passwords you want from 8 and 128");
  if (passwordsLength < 8 || passwordsLength > 128 && typeof passwordsLength !== 'number') {
    alert("You can choose only the numbers between 8 and 128!");
    userInput();
  } else {
    var userOption = confirm("Do you want Lower Case in your passwords? [Yes = 'Ok', No ='Cancel']")
    if (userOption === true) {
      userChoice = userChoice.concat(lowerCase);
    }
    var userOption2 = confirm("Do you want Upper Case in your passwords? [Yes = 'Ok', No ='Cancel']")
    if (userOption2 === true) {
      userChoice = userChoice.concat(upperCase);
    }
    var userOption3 = confirm("Do you want Special Character in your passwords? [Yes = 'Ok', No ='Cancel']")
    if (userOption3 === true) {
      userChoice = userChoice.concat(specialCharacter);
    }
    var userOption4 = confirm("Do you want Numbers in your passwords? [Yes = 'Ok', No ='Cancel']")
    if (userOption4 === true) {
      userChoice = userChoice.concat(numeric);
    }
    if (!userOption && !userOption2 && !userOption3 && !userOption4) {
      alert("You should pick at least one type of the characters");
      userInput();
    }
  }
}

// make passwords
function makePasswords() {
  var passwords = '';
  //loop through random characters
  for (var i = 0; i < passwordsLength; i++) {
    passwords += userChoice[Math.floor((Math.random() * userChoice.length))];
  }
  return passwords;
}



/*

// set the condition and check if the user put the correct input
if (passwordsLength >= 8 || passwordsLength <= 128 && typeof passwordsLength === 'number') {
  alert = ("Thank you, your passwords will be " + passwordsLength + " characters long!");
 } else {
  alert = ("Please type a nubmer between 8 and 128");
 }
}


// get user input




/* I feel like I can make the code above simple...
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

*/

// list of user's choice



// ask user's choice of the lists'
/*
function userPreference () {
  if(confirm("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'")) {
    userChoice = userChoice.concat(lowerCase);
  }

  if(confirm("Do you want Upper Case in your passwords? Yes for 'Ok' No for 'Cancel'")) {
    userChoice = userChoice.concat(upperCase);
  }

  if(confirm("Do you want Special Character in your passwords? Yes for 'Ok' No for 'Cancel'")) {
    userChoice = userChoice.concat(specialCharacter);
  }

  if(confirm("Do you want Numbers in your passwords? Yes for 'Ok' No for 'Cancel'")) {
    userChoice = userChoice.concat(numeric);
  }
}

*/


/*

var getRandomUpperCase = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomUpperCase === true) {getRandomUpperrCase = function () {
  return upperCase[Math.floor((Math.random()*upperCase.length))];
}

var getRandomLowerCase = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomLowerCasec === true) {getRandomLowerCase = function () {
  return lowerCase[Math.floor((Math.random()*lowerCase.length))];
}

var getRandomSpecialCharacter = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomSpecialCharacter === true) {getRandomSpecialCharacter = function () {
  return specialCharacter[Math.floor((Math.random()*specialCharacter.length))];
}

var getRandomNumber = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomNumber === true) {getRandomNumber= function () {
  return numeric[Math.floor((Math.random()*numeric.length))];
}

*/
