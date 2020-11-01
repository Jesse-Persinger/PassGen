// Assignment Code
var generateBtn = document.querySelector("#generate");

var Textbox = document.getElementById("password");

var choice;

var passUpper;

var passLowwer;

var passNum;

var passSymbol;

var passwordVar;

var empty;

// arrays for generator
// symbol array
symbols = ["!", "@", "#", "$", "%", "^", "&", "*",]

// number array
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]

//letters array
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

// capitals
capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// options for generator

var options;






// Write password to the #password input
// generate password function
function writePassword() {
  choice = parseInt(prompt("How long do you want your password 8-128"));
  // if statment
  if (!choice) {
    alert("invalid option");
  } else if (choice < 8 || choice > 128) {
    option = parseInt(prompt(Incorrect, Value));
  } else {
    // other inputs 
    passUpper = confirm("Do you want to use capital letters?  (NOT WORKING)");
    passLower = confirm("Do you want to use lowwer case letters?");
    passNum = confirm("Do you want to use numbers?");
    passSymbol = confirm("Do you want to use symbols?");
    //debug
    console.log(passUpper);
    console.log(passLower);
    console.log(passNum);
    console.log(passSymbol);
  };
//none
  if (!passUpper && !passLower && !passNum && !passSymbol) {
    choice = alert("pick an option");
  }
  // all four
  else if (passSymbol && passUpper && passLower && passUpper) {
    passwordVar = symbols.concat(numbers, letters, capital);
  }
  //variations of 3
  else if (passUpper && passSymbol && passNum) {
    passwordVar = symbols.concat(numbers, capital);
  }
  else if (passLower && passNum && passSymbol){
    passwordVar = symbols.concat(numbers, letters);
}
  else if (passSymbol && passLower && passUpper){
    passwordVar = symbols.concat(letters, capital);
  }
  else if (passNum && passLower && passUpper){
    passwordVar = numbers.concat(letters, capital);
  }
  // variations of 2
  else if (passSymbol && passNum){
    passwordVar = symbols.concat(numbers);
  }
  else if (passSymbol && passLower){
    passwordVar = symbols.concat(letters);
  }
  else if (passSymbol && passUpper){
    passwordVar = symbols.concat(capital);
  }
  else if (passNum && passLower){
    passwordVar = numbers.concat(letters);
  }
  else if (passSymbol && passLower){
    passwordVar = symbols.concat(letters);
  }
  else if (passLower && passUpper){
    passwordVar = capital.concat(letters);
  }
  else if (passNum && passUpper){
    passwordVar = capital.concat(numbers);
  }
  // 1 option
  else if (passSymbol){
    passwordVar = symbols;
  }
  else if (passUpper){
    passwordVar = capital;
  }
  else if (passLower){
    passwordVar = letters;
  }
  else if (passNum){
    passwordVar = numbers;
  }
  //debug
  console.log(passwordVar);
  //Randomizer
  var password = []

  for (var i = 0; i  < choice; i++) {
    var pickedVar = passwordVar[Math.floor(Math.random() * choice)];
    password.push(pickedVar);
  }
  //debug 
  console.log(password);
  Textbox.textContent = password

  var copy = document.getElementById("copy");
  copy.addEventListener("click", function(){
    copypassword();
  }
  )
  function copypassword(){
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("copied");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

