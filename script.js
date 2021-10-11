
//#GENERATE is the button to start the code


var generateBtn = document.querySelector("#generate");

//use the top row of the key board for special characters
function generatePassword() {
  var upperCase = [
    "A" ,  "B" , "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",  ];

  var lowerCase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",   ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
] ;
  var characters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
  ];
  var results = [];
  var user = [];
  //What is the diffrence between prompt and confirm
  var charNumber = prompt(
    "How many characters in your password?"
  );
console.log(characters);
console.log(lowerCase);
console.log(numbers);
console.log(upperCase);


  var isLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  );

  var isUpperCase = confirm(
    "would you like uppercase letters in your password?"
  );

  var hasNumbers = confirm("What about Numbers, would you like those in your password?");
  var charSpec = confirm(
    "Would you like special characters in your password?"
  );

  if (isLowerCase) {
    results = results.concat(lowerCase);
  }
// use the if statement we used in tutoring session
  if (isUpperCase) {
    results= results.concat(upperCase);
  }
  if (hasNumbers) {
    results = results.concat(numbers);

  }
  if (charSpec) {
    results = results.concat(characters);
  }
  console.log(results);
  for (var i =0; i < charNumber; i++) {
    user.push(results[Math.floor(Math.randonm() * results.length)]);
  }
  return user.join("");
  
}
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password);
  }
  generateBtn.addEventListener("click", writePassword);

  // use this to generate the password
// //console.log(results);
// for (var i =0; i < charNumber; i++) {
//   user.push(results[Math.floor(Math.randonm() * results.length)]);
// }


//function to write the password
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   console.log(password);
// }