
// set the variable lists
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacter = ['`','!','@','#','$','%','^','&','*','(',')','-','=','+'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];



// ask user the choice of the length
var passwordsLength = prompt ("Please type the length of passwords you want from 8 and 128");

// set the condition and check if the user put the correct input
if (passwordsLength >= 8 && passwordsLength <= 128 && typeof passwordsLength === 'number') {
  alert = ("Thank you, your passwords will be " + passwordsLength + " characters long!");
 } else {
  alert = ("Please type a nubmer between 8 and 128");
 };



// ask user's choice of the lists
var getRandomLowerCase = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomLowerCasec === true) {getRandomLowerCase = function () {
  return lowerCase[Math.floor((Math.random()*lowerCase.length))];
}



/* I feel like I can make the code above simple...
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

*/

var getRandomUpperCase = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomUpperCase === true) {getRandomUpperrCase = function () {
  return upperCase[Math.floor((Math.random()*upperCase.length))];
}

var getRandomSpecialCharacter = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomSpecialCharacter === true) {getRandomSpecialCharacter = function () {
  return specialCharacter[Math.floor((Math.random()*specialCharacter.length))];
}

var getRandomNumber = confirm ("Do you want Lower Case in your passwords? Yes for 'Ok' No for 'Cancel'");
if (getRandomNumber === true) {getRandomNumber= function () {
  return numeric[Math.floor((Math.random()*numeric.length))];
}

/*
// check if the user choose minimum one list
else {
  alert ("you need to choose at least one!")
}
*/


// if statment for each answers



// generate passwords
for (var i = 0; i === passwordsLength-1; i++) {
  alert(password[i]);
}


// alert the passwords



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