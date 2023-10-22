// 1.Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let char = prompt("enter the value")
// if(char >= "A" && char <="Z"){
//     alert( char + " " +  "upperCase charater")
// }

// else if(char >= "a" && char <="z"){
//     alert( char + " " +  "lowerCase charater")
// }

// else{
//     console.log("non alphabetic charater")
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let num1= prompt("First integers");
// let num2 = prompt("second integers")

// if (num1 == num2){
//     alert(num1 +" "+ "First integers is equal to "  +" "+  num2  +" "+  "second integers")
// }

// else if (num1 >  num2){
//     alert(num1 +" "+ "First integers is greater than to "  +" "+  num2  +" "+  "second integers")
// }

// else{
//     alert("no match condtion")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let input1 = prompt(" enter number");
// if (input1 > 0) {

//   alert("The number is positive");

// }

// else if (input1 == 0) {
//   alert("The number is zero");
// }

// else {
//     console.log("The number is negative");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let vowel =prompt("enter letter `")

// if (
//   vowel === "a" ||
//   vowel === "e" ||
//   vowel === "i" ||
//   vowel === "o" ||
//   vowel === "u"
// ) {
//   alert("true");
// } else {
//   alert("false");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

let password1 = prompt("enter your password");
let password2 = prompt("enter your password");

if (password1 ===  password2){
  alert("Correct! password")
}


if (password1 !== password2){
  alert("Incorrect password")
}

else{
  alert("Please enter your password")
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
