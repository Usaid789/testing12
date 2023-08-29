// ====================================== Chapter 21 (Changing Case) =========================================

// Q1 Type the characters that are missing from this code.var allLower = userInput.toLowerCase;
// ANS 1 
// var allLower = userInput.toLowerCase();

// Q2 Convert the string represented by x to lower-case and assign the result to the same
// ANS 2
// var x = prompt("Enter your name");
// x = x.toLowerCase();
// console.log("Converted Value = " + x);

// Q3 Convert the string represented by y to upper-case and assign the result to the same variable.
// ANS 3
// var y = prompt("Enter your name");
// y = y.toUpperCase();
// console.log("Converted Value = " + y);

// Q4 Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
// ANS 4
// var u = prompt("Enter your name");
// var x = u.toLowerCase();
// console.log("Normal Value = " +u);
// console.log("Converted Value = " + x);

// Q5 Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
// ANS 5
// var myArray = ["Hello", "World"];
// var newArrayElement = myArray[0].toLowerCase();

// Q6 Display in an alert the upper-case version of the string represented by a variable.
// // ANS 6
// var y = prompt("Enter your name");
// y = y.toUpperCase();
// alert("Converted Value = " + y);

// Q7 var cityName = “kaRacHi”; Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
// ANS 7
// var cityName = "kaRacHi";
// var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedName);




// ============================================= Chapter 22 - 25 (Strings) =======================================

// Q1 "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
// ANS 1
// var sameWords = "captain";
// var diffWords = sameWords.slice(1,3);
// console.log(diffWords);

// Q2 The number of characters in the string will be assigned to the variable.
// ANS 2
// var sameWords = "captain";
// var numberOfCharacters = sameWords.length; 
// console.log(numberOfCharacters);

// Q3 The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it tothe variable seg, which hasn't been declared beforehand.
// ANS 3
// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);

// Q4 Find the number of characters in the string represented by avariable and assign the number to a second variable.
// ANS 4
// var u = "Usaid";
// var a = u.length;
// console.log("Length of variable u is : "+a);

// Q5 In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared beforehand.
// ANS 5
// var u = "Pakistan"
// var a = u.length;
// console.log("Length of variable u is : "+a);
// var d = u.slice(1,-3);
// console.log("After slicing : "+d);

// Q6 var text = "To be or not to be."; var indx = text.indexOf("be"); What is the value of indx?
// ANS 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
// the value on indx will be 3

// Q7 var text = "To be or not to be."; var indx = text.lastIndexOf("be");What is the value of indx?
// ANS 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// the value of indx will be 16

// Q8 Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the numberto the variable indx, which hasn't been declared beforehand.
//

// Q9 Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
// ANS 9
// if (indexNum >= 0 && indexNum < yourString.length) {
// } else {
// }

// Q10 In this string "abcde", what character is at index 2? (Use charAt)
// ANS 10
// var u = "abcde";
// var a = u.charAt(1);
// console.log(a);

// Q11 Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
// ANS 11
// var text = "Muhammad Usaid Siddiqui";
// var cha = text.charAt(9);
// console.log(cha);

// Q12 Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
// ANS 12
// var str = "Hello, World!";
// var lastIndex = str.length - 1; // Calculate the index of the last character

// if (lastIndex >= 0) {
//     var x = str.charAt(lastIndex);
//     console.log("The last character:", x);
// } else {
//     console.log("The string is empty.");
// }

// Q13 Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
// ANS 13
// var u = prompt("Enter your full name");
// var cha = u.charAt(4);
// console.log(cha);

// Q14 Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
// ANS 14
// var u = "Karachi Pakistan";
// var a = "r";
// if(u.length >=3 && u.charAt(2) === a)
// {    
// }else{
// }

// Q15 Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand
// ANS 15
// var inputString = "example"; // Replace this with your input string
// var charArray = []; // Declare the array beforehand

// for (var i = 0; i < inputString.length; i++) {
//     charArray.push(inputString.charAt(i));
// }
// console.log("Character array:", charArray);

// Q16 In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
// ANS 16 
// var str = "1 is the loneliest number, especially the first 1.";
// var searchString = "1";
// var replacementString = "one";
// var indexOfFirstInstance = str.indexOf(searchString);

// if (indexOfFirstInstance !== -1) {
//     var newStr = str.substring(0, indexOfFirstInstance) + replacementString + str.substring(indexOfFirstInstance + searchString.length);
//     console.log("Revised string:", newStr);
// } else {
//     console.log("The search string was not found in the input string.");
// }

// Q17 If you want all instances replaced, enter 3 characters that need to appear in this statement. var y = x.replace("a", "z");
// ANS 17
// var y = x.replace(/a/g, "z");



// ===================================== Chapter 26 (Rounding Numbers) =========================================

// Q1 Form a statement that rounds a number to the nearest integer.
// ANS 1
// var num = 5.4;
// var convertednum = Math.round(num);
// console.log(convertednum);

// Q2 Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// ANS 2
// var origNum = 7.25; 
// var roundNum = Math.ceil(origNum);
// console.log("Rounded up number:", roundNum);

// Q3 Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// ANS 3
// var origNum = 7.85; 
// var roundNum = Math.floor(origNum);
// console.log("Rounded up number:", roundNum);

// Q4 Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
// ANS 4
// var originalNumber = 3.75; // Replace with your number
// var roundedNumber = Math.round(originalNumber);
// console.log("Rounded number:", roundedNumber);

// Q5 Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
// ANS 5
// var originalNumber = 0.5;
// var roundedNumber = Math.floor(originalNumber);
// console.log("Rounded number:", roundedNumber);


// ====================================== Chapter 27 (Random Numbers) ======================================

// Q1 Convert a random number generated by JavaScript to a number in the range 1 to 50
// ANS 1
// var randomNumber = Math.floor(Math.random() * 50) + 1;
// console.log("Random number in the range 1 to 50:", randomNumber);

// Q2 Generate a random number and assign it to a variable that hasn't been declared beforehand.
// ANS 2
// var randomGeneratedNumber = Math.random();
// console.log("Random generated number:", randomGeneratedNumber);

// Q3 You have to create a dice in JavaScript with the use of pseudorandom number.
// ANS 3 
// Simulate rolling a 6-sided dice
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// // Roll the dice and display the result
// var diceResult = rollDice();
// console.log("You rolled:", diceResult);

// Q4 You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
// ANS 4
// var num = Math.random();
// var convertednum = Math.round(num);
// console.log(convertednum);

// if(convertednum == 0)
// {
//     console.log("Heads");
// }
// else if(convertednum == 1){
//     console.log("Tails");
// }
// else{
//     console.log("Something wrong");
// }



// =================================== Chapter 28, 29 (Converting Strings) ===================================

// Q1 How do you convert a string to an integer in JavaScript?
// ANS 1 You can convert a string to an integer in JavaScript using the parseInt() function. Here's how you can do it:

// Q2 Write a JavaScript function to convert the string "123" to an integer.
// ANS 2
// function convertStringToInteger() {
//     var stringValue = "123";
//     var integerValue = parseInt(stringValue);

//     return integerValue;
// }

// var result = convertStringToInteger();
// console.log("Converted integer:", result); // Output: 123

// Q3 How can you convert a string containing a decimal number to a floating-point number in JavaScript?
// ANS 3
// var decimalString = "3.14";
// var floatingPointNumber = parseFloat(decimalString);

// console.log("Converted floating-point number:", floatingPointNumber); 

// Q4 How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
// ANS 4
// function tryConvertToNumber(inputString) {
//     var integerValue = parseInt(inputString);
//     var decimalValue = parseFloat(inputString);

//     if (!isNaN(integerValue)) {
//         console.log("Conversion to integer successful:", integerValue);
//     } else if (!isNaN(decimalValue)) {
//         console.log("Conversion to decimal successful:", decimalValue);
//     } else {
//         console.log("Conversion failed.");
//     }
// }

// var testString = "42";
// tryConvertToNumber(testString); // Output: Conversion to integer successful: 42

// var invalidString = "abc";
// tryConvertToNumber(invalidString); // Output: Conversion failed.

// Q5 How can you convert a number to a string in JavaScript?
// ANS 5
// var number = 42;
// var numberAsString = number.toString();
// console.log("Number as string:", numberAsString); 

// Q6
// ANS 6
// function convertNumberToString() {
//     var number = 42;
//     var numberAsString = number.toString();

//     return numberAsString;
// }
// var result = convertNumberToString();
// console.log("Number as string:", result); 

// Q7 Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
// ANS 7
// var decimalString = "3.14";
// var integerValue = parseInt(decimalString);

// console.log("Converted integer:", integerValue); 



// ====================================== Chapter 30 (Controlling the length of decimals) ========================

// Q1 Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
// ANS 1
// var num = 3.141592653589793;
// var newNum = num.toFixed(4).toString();
// console.log("Rounded and converted number:", newNum);

// Q2 In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
// ANS 2
// var num = 3.141592653589793;
// num = parseFloat(num.toFixed(2).toString());
// console.log("Updated number:", num);

// Q3 Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
// ANS 3
// var num = 5.1532189;
// if (num.toFixed(2).toString().length > 4) {
//     console.log("Correct");
// } else {
//     console.log("Not correct");
// }

// Q4 Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.
// ANS 4
// var longNumber = 12.3456789123456789;

// var roundedString = longNumber.toFixed(2).toString();
// alert("Rounded number: " + roundedString);


// ===================================== Chapter 31 - 34 (Date & Time) ==========================================

// Q1 Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
// ANS 1 
// var dObj = new Date();
// console.log("Current Date:", dObj);

// Q2 Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
// ANS 2
// var dObj = new Date();
// var dStr = dObj.toString();
// console.log("Date as string:", dStr);

// Q3 Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand
// ANS 3
// var d = new Date(); 
// var day = d.getDay();
// console.log("Day of the week:", day);

// Q4 The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
// ANS 4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date(); // Create a new Date object representing the current date and time
// var currentDay = d.getDay();
// alert("Current day: " + dayNames[currentDay]);

// Q5 Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
// ANS 5
// var now = new Date(); // Create a new Date object representing the current date and time

// var year = now.getFullYear();
// var month = now.getMonth(); // Note: Months are zero-based (0 - January, 11 - December)
// var day = now.getDate();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);

// Q6Code a statement that creates a Date object for the last day of thelast month of 2020 and assigns it to later, which hasn't beendeclared beforehand.
// ANS 6
// var later = new Date(2020, 11, 0);
// console.log("Last day of last month in 2020:", later);

// Q7 Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
// ANS 7
// var specificDate = new Date(1992, 1, 2);
// console.log("Specific date:", specificDate);

// Q8 Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
// ANS 8
// alert(new Date(1980, 0, 1).getTime());

// Q9 How do you change the year of a date in JavaScript?
// ANS 9
// var currentDate = new Date();
// currentDate.setFullYear(2024);
// console.log("Updated date:", currentDate);

// Q10 Write a JavaScript function to change the month of a given date to January.
// ANS 10
// function changeMonthToJanuary(inputDate) {
//     inputDate.setMonth(0); 
// }
// var currentDate = new Date(); 
// console.log("Original date:", currentDate);
// changeMonthToJanuary(currentDate);
// console.log("Date with month changed to January:", currentDate);-

// Q11 What is the method to change the day of the week for a specific date in JavaScript?
// ANS 11
// In JavaScript, you cannot directly change the day of the week for a specific date using a built-in method. 
// The day of the week is determined based on the date itself and is not something that you can modify independently

// Q12 Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
// ANS 12
// function changeMinutesToSpecificValue(inputDate) {
//     var specificMinutes = prompt("Enter the specific minutes:");
//     var parsedMinutes = parseInt(specificMinutes);

//     if (!isNaN(parsedMinutes)) {
//         inputDate.setMinutes(parsedMinutes);
//         console.log("Time with minutes changed:", inputDate);
//     } else {
//         console.log("Invalid input for minutes.");
//     }
// }
// var currentTime = new Date(); 
// console.log("Original time:", currentTime);
// changeMinutesToSpecificValue(currentTime);

// Q13 Write a JavaScript function to add a specific number of hours to a given time.
// ANS 13
// function addHoursToTime(inputDate, hoursToAdd) {
//     var millisecondsInHour = 60 * 60 * 1000; 
//     var millisecondsToAdd = hoursToAdd * millisecondsInHour;

//     inputDate.setTime(inputDate.getTime() + millisecondsToAdd);
//     console.log("Time after adding hours:", inputDate);
// }
// var currentTime = new Date(); 
// console.log("Original time:", currentTime);
// addHoursToTime(currentTime, 3); 

// Q14 You have to create a age calculator in JavaScript.
// ANS 14
// function calculateAge() {
//     var birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
    
//     var birthYear = parseInt(birthdate.substring(0, 4));
//     var birthMonth = parseInt(birthdate.substring(5, 7));
//     var birthDay = parseInt(birthdate.substring(8, 10));

//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     var currentMonth = currentDate.getMonth() + 1; // Months are zero-based
//     var currentDay = currentDate.getDate();

//     var age = currentYear - birthYear;

//     // Adjust age if birthday hasn't occurred yet this year
//     if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
//         age--;
//     }

//     return age;
// }

// var userAge = calculateAge();
// console.log("Your age is:", userAge);



// ===================================== Chapter 35 - 37 (Functions) =======================================

// Q1 Code the first line of a function displayAlert.
// function abc()
// {
//     alert("This is the first function");
// }
// abc();

// Q2 Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
// ANS 2
//  function askName() {
//     var userName = prompt("Enter name:");
//     return userName;
// }

// var userName = askName();
// console.log("Hello, " + userName + "!");

// Q3
// ANS 3
// function sayHello() {
//     console.log("Hello!");
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// function greet() {
//     sayHello();    
//     sayGoodbye();  
// }
// greet();

// Q4 Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
// ANS 4
//  function abc() {
//     var userName = prompt("Enter name:");
//     return userName;
// }
// var userName = abc();
// alert("Hello, " + userName + "!");

// Q5 Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
// ANS 5
// function concat(a, b, c) {
    
// }
// var myVariable = "Hello";
// var myString = " World";
// var myNumber = 42;
// concat(myVariable, myString, myNumber); 


// Q6 Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
// ANS 6
// function concatenateStrings(str1, str2) {
//     var concatenatedResult = str1 + str2;
//     return concatenatedResult;
// }
// var firstString = "Hello, ";
// var secondString = "world!";
// var concatenatedValue = concatenateStrings(firstString, secondString);
// console.log("Concatenated value:", concatenatedValue);

// Q7 Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
// ANS 7 
// function multiplyNumbers(num1, num2, num3) {
//     var multipliedResult = num1 * num2 * num3;
//     return multipliedResult;
// }
// var x = 3;
// var y = 4;
// var z = 5;
// var multipliedValue = multiplyNumbers(x, y, z);
// console.log("Multiplied value:", multipliedValue);

// Q8 Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// ANS 8
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; // Return 0 for an empty array
//     }

//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// var numberArray = [10, 20, 30, 40, 50];
// var avg = calculateAverage(numberArray);

// console.log("Average:", avg);

// Q9 Write a JavaScript function that takes two parameters and returns their sum.
// ANS 9
// function sum(a,b)
// {
//     var c = a+b;
//     return c;
// }
// var x = 2;
// var y = 4;
//  var z = sum(x,y);
//  console.log("Sum is : "+z);

// Q11 You have to capture the returned value from a function and store it in a variable?
// ANS 11
// function addNumbers(a, b) {
//     return a + b; // Return the sum of a and b
// }

// var num1 = 5;
// var num2 = 10;

// var result = addNumbers(num1, num2); // Capture the returned value in the 'result' variable

// console.log("Sum:", result); // Display the stored result


// Q12 Write a function which tells letter counts of (word).
// ANS 12
// function countLetter(word){
//     var letterCount ={};
//     for(var i =0; i<word.length; i++){
//         var result= word[i];
//         if(letterCount[result]){
//             letterCount[result]++;
//         }
//         else{
//             letterCount[result]=1;
//         }

//     }
//     return letterCount;
// }
// var word =prompt("enter letter");
// var real= countLetter(word);
// console.log(real);

// Q13 Write a function to set (year) in date object.
// ANS 13
// function setYearInDate(date, year) {
//     date.setFullYear(year);
//     return date;
//   }
  
//   var date = new Date();
//   var year = 2023;
//   var dateWithYear = setYearInDate(date, year);
//   console.log(dateWithYear);
  
// Q14 Write a function which tells the age of a person who Born on (dateOfBirth)
// ANS 14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
  
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var dateOfBirth = "2001-04-19"; 
//   var age = calculateAge(dateOfBirth);
//   console.log("Age:", age);
  

// Q15 Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false

// function checkWord(array,word){
//     for(var i=0;i <array.length; i++){
//         if(array[i] === word){
//             return true;
//         }
//     }
//     return false;
// }
// var array=['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
// var word = 'haris';
// var result = checkWord(array,word);
// console.log(result);

// Q16 Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)
// ANS 16
// function repeat(letter){
//     return letter.repeat(10);
// }
// var input = "a";
// var result= repeat(input);
// console.log(result);

// Q17 write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()
// ANS 17
// function reverse (letter){
//     return letter.reverse();
// }
// var letter= ['a','b','c','d','e'];
// var result= reverse(letter);
// console.log(result);


// ======================================= Chapter 38 (Local vs. Global Variables) ================================

// Q1 Write a JavaScript function that demonstrates the usage of a local variable.
// ANS 1
// function calculateSum(a, b) {
//     var localVariable = "This is a local variable."; // Local variable within the function
//     var sum = a + b; // Local variable for the sum
//     console.log(localVariable);
//     return sum;
// }
// var num1 = 5;
// var num2 = 10;

// var result = calculateSum(num1, num2);
// console.log("Sum:", result);

// Q2 How can you access a global variable inside a function in JavaScript?
// ANS 2
// var globalVariable = "I'm a global variable"; // Define a global variable

// function accessGlobal() {
//     console.log(globalVariable);
// }
// accessGlobal(); 



// ============================= Chapter 39, 40 (Switch Statements) ========================================

// Q1 Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
// ANS 1
// var day = prompt("Enter your day");
// switch(day){
//     case "Sunday":
//         console.log("Holiday");
//         break;
//         case "Saturday":
//             console.log("Half working day");
//             break;
//             default:
//                 console.log("Working day");
// }

// Q2 Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
// ANS 2
// var cityName = prompt("Enter your city name");
// switch(cityName){
//     case "Karachi":
//         console.log("Congratulations you are selected");
//         break;

//         case "Lahore":
//         console.log("Congratulations you are selected");
//         break;

//         case "Isalamabad":
//         console.log("Congratulations you are selected");
//         break;

//         case "Peshawar":
//         console.log("Pleast wait you will be aswered ssoon");
//         break;

//         default:
//             console.log("Sorry you are not selected");
// }



