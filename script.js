// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables needed for the prompts
var lengthOfKey = 0;
var includeUpperCase = true;
var includeLowerCase = true;
var includeNums = true;
var includeSpecialChar = true;
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

function promptUser(typeOfCharacter){

return window.confirm("Do you want " + typeOfCharacter + " to be included? (Y = OK; No = Cancel)");
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

if (includeUpperCase){
  passKeyCombos = passKeyCombos.concat(uppercaseLetters);
}

if(includeLowerCase){
  passKeyCombos = passKeyCombos.concat(lowercaseLetters);
}

if(includeNums){
  passKeyCombos = passKeyCombos.concat(numsArray);
}

if(includeSpecialChar){
  passKeyCombos = passKeyCombos.concat(specialArray);
}

console.log(passKeyCombos);
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

  includeUpperCase = promptUser("Uppercase letters");
  console.log("Uppercase is " + includeUpperCase);

  includeLowerCase = promptUser("Lowercase letters");
  console.log("Lowercase is " + includeLowerCase);

  includeNums = promptUser("numbers");
  console.log("Numbers is " + includeNums);

  includeSpecialChar = promptUser("special characters");
  console.log("Special characters is " + includeSpecialChar);
  
  var password = generatePassword(lengthOfKey, includeUpperCase, includeLowerCase, includeNums, includeSpecialChar);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
