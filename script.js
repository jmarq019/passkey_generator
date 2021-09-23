// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables needed for the prompts
var lengthOfKey = 0;
var includeUpperCase = false;
var includeLowerCase = false;
var includeNums = false;
var includeSpecialChar = false;
var myNewPassKey;

    // These arrays will be filled with numbers corresponding to ASCII notation character codes 
    var uppercaseLetters = [];
    var lowercaseLetters = [];
    var numsArray = [];
    var specialArray = [];

  // Filling the arrays with the fillMyArray function.
  uppercaseLetters = fillMyArray(65, 90);
  lowercaseLetters = fillMyArray(97, 122);
  numsArray= fillMyArray(48, 57);
  specialArray = fillMyArray(34, 47).concat(fillMyArray(58, 64)).concat(fillMyArray(91, 96)).concat(fillMyArray(123, 126));


// Gets the desired length of the password.
function askLength(){
  var numOfChances = 0;
  var lengthInput;
  //we prompt the user for the number of characters. Default will be set to 10.
lengthInput = window.prompt("How long do you want your passowrd to be? (must be between 8 and 128 characters, please!)", "10");
lengthOfKey = parseInt(lengthInput);

//handles the case of invalid input.
while (lengthOfKey < 8 || lengthOfKey > 128) {
  lengthInput = window.prompt("You must enter a number between 8 and 128.");
  lengthOfKey = parseInt(lengthInput);
    if (lengthOfKey >= 8 && lengthOfKey <= 128) {
    break;
    }
}

//returns the user's input for the desired length of their password.
return lengthOfKey;
}

// Asks if we want caps to be included or not.
function askUpper(){
var wantCaps = true;
wantCaps = window.confirm("Do you want capital letters to be included? (Y = OK; No = Cancel)");
includeUpperCase = wantCaps;
return includeUpperCase;
}

// Asks if we want lower case letters to be included or not.
function askLower(){
  var wantLows = true;
  wantLows = window.confirm("Do you want lower case letters to be included? (Y = OK; No = Cancel)");
  includeLowerCase = wantLows;
  return includeLowerCase;
}

// Asks if we want numeric characters to be included or not.
function askNumeric(){
var wantNums = true;
wantNums = window.confirm("Do you want Numbers to be included? (Y = OK; No = Cancel)");
includeNums = wantNums;
return includeNums;
}

// Asks if we want special characters to be included or not.
function askSpecialChar(){
var wantSpecial = true;
wantSpecial = window.confirm("Do you want special characters to be included? (Y = OK; No = Cancel)");
includeSpecialChar = wantSpecial;
return includeSpecialChar;
}

// This function will fill my character arrays
function fillMyArray(x, y){
  var asciiCharCodes = [];
  for (var i = x; i <= y; i++){
    asciiCharCodes.push(i);
  }
  return asciiCharCodes;
}

function generatePassword(lengthOfKey, includeUpperCase, includeLowerCase, includeNums, includeSpecialChar) {
var asciiCode;


//this array will hold the characters as they are translated from ASCII
var myNewPassKeyArray = [];
var passKeyCombos = [];


// only uppercase is confirmed
if (includeUpperCase == true && includeLowerCase == false && includeNums == false && includeSpecialChar == false) {
  for (var i = 0; i < uppercaseLetters.length; i++){
    passKeyCombos.push(uppercaseLetters[i]);
    }
}
// only lowercase is confirmed
else if (includeUpperCase == false && includeLowerCase == true && includeNums == false && includeSpecialChar == false) {
  for (var i = 0; i < lowercaseLetters.length; i++){
    passKeyCombos.push(lowercaseLetters[i]);
    }
}
//only numbers are confirmed.
else if (includeUpperCase == false && includeLowerCase == false && includeNums == true && includeSpecialChar == false) {
  for (var i = 0; i < numsArray.length; i++){
    passKeyCombos.push(numsArray[i]);
    }
}
//only special characters are confirmed.
else if (includeUpperCase == false && includeLowerCase == false && includeNums == false && includeSpecialChar == true) {
  for (var i = 0; i < specialArray.length; i++){
    passKeyCombos.push(specialArray[i]);
    }
}
//only uppercase and lowercase are confirmed.
else if  (includeUpperCase == true && includeLowerCase == true && includeNums == false && includeSpecialChar == false) {
  for (var i = 0; i < uppercaseLetters.length; i++){
    passKeyCombos.push(uppercaseLetters[i]);
    }
    for (var i = 0; i < lowercaseLetters.length; i++){
      passKeyCombos.push(lowercaseLetters[i]);
      }
}
//lowercase,upercase and numbers are confirmed, specail characters not confirmed.
else if (includeUpperCase == true && includeLowerCase == true && includeNums == true && includeSpecialChar == false){
  for (var i = 0; i < uppercaseLetters.length; i++){
    passKeyCombos.push(uppercaseLetters[i]);
    }
    for (var i = 0; i < lowercaseLetters.length; i++){
      passKeyCombos.push(lowercaseLetters[i]);
      }
      for (var i = 0; i < numsArray.length; i++){
        passKeyCombos.push(numsArray[i]);
        }
}
// lowercase not confirmed, the rest were confirmed
else if (includeUpperCase == true && includeLowerCase == false && includeNums == true && includeSpecialChar == true){
  for (var i = 0; i < uppercaseLetters.length; i++){
    passKeyCombos.push(uppercaseLetters[i]);
    }
    for (var i = 0; i < numsArray.length; i++){
      passKeyCombos.push(numsArray[i]);
      }
      for (var i = 0; i < specialArray.length; i++){
        passKeyCombos.push(specialArray[i]);
        }
}
// uppercase not confirmed, the rest were confirmed
else if (includeUpperCase == false && includeLowerCase == true && includeNums == true && includeSpecialChar == true){
    for (var i = 0; i < lowercaseLetters.length; i++){
      passKeyCombos.push(lowercaseLetters[i]);
      }
      for (var i = 0; i < numsArray.length; i++){
        passKeyCombos.push(numsArray[i]);
        }
        for (var i = 0; i < specialArray.length; i++){
          passKeyCombos.push(specialArray[i]);
          }
}
// lowercase and uppercase not confirmed,numbers and special characters concat
else if (includeUpperCase == false && includeLowerCase == false && includeNums == true && includeSpecialChar == true){
  for (var i = 0; i < numsArray.length; i++){
    passKeyCombos.push(numsArray[i]);
    }
    for (var i = 0; i < specialArray.length; i++){
      passKeyCombos.push(specialArray[i]);
      }
}
// if all or none were confirmed.
else{
    for (var i = 0; i < uppercaseLetters.length; i++){
      passKeyCombos.push(uppercaseLetters[i]);
      }
      for (var i = 0; i < lowercaseLetters.length; i++){
        passKeyCombos.push(lowercaseLetters[i]);
        }
        for (var i = 0; i < numsArray.length; i++){
          passKeyCombos.push(numsArray[i]);
          }
          for (var i = 0; i < specialArray.length; i++){
            passKeyCombos.push(specialArray[i]);
            }
}


//translates the ASCI codes and fills an array with the equivalent values
for (var i = 0; i < lengthOfKey; i++){
asciiCode = passKeyCombos[Math.floor(Math.random() * passKeyCombos.length)]
myNewPassKeyArray.push(String.fromCharCode(asciiCode));
}

  myNewPassKey = myNewPassKeyArray.join("");

return myNewPassKey;

}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");


  //Asking the user for their input and loging the responses in the console.
  lengthOfKey = askLength();
  console.log("Password length is " + lengthOfKey + " characters");

  includeUpperCase = askUpper();
  console.log("Uppercase is " + includeUpperCase);

  includeLowerCase = askLower();
  console.log("Lowercase is " + includeLowerCase);

  includeNums = askNumeric();
  console.log("Numbers is " + includeNums);

  includeSpecialChar = askSpecialChar();
  console.log("Special characters is " + includeSpecialChar);
  
  var password = generatePassword(lengthOfKey, includeUpperCase, includeLowerCase, includeNums, includeSpecialChar);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
