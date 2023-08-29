//===============Pre-Build Functions===============

//Pop-Up Generating Function
//Funtions ko call karne ke liye hamesha parenthesis lagenege()
//Javascript line by line execute hoti hai
//Jahan dot lag jaye wo method hoga

//alert("Hello World"); //String=> Set of characters
//alert(33*8);

//===============User-Input Functions===============

//var u= prompt("Enter your name");
//alert(u);

//===============Variables===============

//var UserName="Usaid";
//var UserName= prompt("Enter your name");
//console.log(UserName);

//Variable for numbers

// var totalmarks=300;
// var eng=49;
// var math=10;
// var urdu=90;
// var totalobtainmarks =eng + math + urdu;
// console.log(totalobtainmarks);
// var per=totalobtainmarks/totalmarks*100;
// console.log(per);

//Taking input from user

// var totalmarks=300;
// var eng= prompt("Enter your marks in english")
// console.log("English :",eng);
// var math = prompt("Enter your marks in math");
// console.log("Maths :",math);
// var urdu = prompt("Enter your marks in urdu");
// console.log("Urdu :", urdu);
// var totalobtainmark = eng + math + urdu;
// console.log("Obtained Marks =",totalobtainmark);
// var per=totalobtainmark/totalmarks*100;
// console.log("Percentage =",per);

//=======================Concatenaiton=======================

// var firstname = prompt("Enter first name");
// var lastname = prompt("Enter last name");
// var fullname = firstname +  " " + lastname
// console.log("Welcome "+ fullname);

//==============================================

// var num=2;
// // num=num+1;
// num++;
// console.log(num);


// num = 2;
// num2 = num++;
// console.log(num , num2);


// num = 2;
// num2 = ++num;
// console.log(num , num2);

//==================================IF-ELSE==================================

// var age = prompt("Enter the age");
// var card = confirm("Enter yess or no");
// console.log("Age : "+ age);
// console.log("Do you have card : " +card);


// if(age >= 12){
//     console.log("You are allowed to sit");
// }

// //(card==true) == (card)
// //(card !=true) == (!card)
// else if(card==true){
//     console.log("You are allowed to sit on card");
// }
// else{
//     console.log("You are not allowed to sit");
// }

//============================And Or operators============================

// var age = prompt("Enter your age");
// console.log("Age : " +age);
// var card = confirm("Enter yes or no");
// console.log("Do you have card : "+card);

// if(age >=12 && card)
// {
//     console.log("Congratulations you are allowed");
// }
// else
// {
//     console.log("Sorry not allowed");
// }


// var totalmarks=400;
// var eng= +prompt("Enter your marks in english")
// console.log("English :",eng);
// var math = +prompt("Enter your marks in math");
// console.log("Maths :",math);
// var urdu = +prompt("Enter your marks in urdu");
// console.log("Urdu :", urdu);
// var java = +prompt("Enter your marks in JavaScript");
// console.log("JavaScript :", java);
// var totalobtainmark = eng + math + urdu + java;
// console.log("Total Marks : " + totalmarks);
// console.log("Obtained Marks =",totalobtainmark);
// var per=totalobtainmark/totalmarks*100;
// console.log("Percentage ="+per +"%");

// if(per>=80)
// {
//     console.log("Grade = A+ ")
// }
//  else if(per >=70 && per <=79)
// {
//     console.log("Grade = A ")
// }
// else if(per >=60 && per <=69)
// {
//     console.log("Grade = B ")
// }
// else if(per >=50 && per <=59)
// {
//     console.log("Grade = C ")
// }
// else if(per >=40 && per <=49)
// {
//     console.log("Grade = D ")
// }
// else {
//     console.log("Fail");
// }

//==============================Nested Loops==============================

// var age = prompt("Enter your age");
// console.log("Age : " +age);
// var card = confirm("Enter Yess or No");
// console.log("Do you have card : " +card);

// if(age >= 12)
// {
//     console.log("Selected");
//     if (card)
//     {
//         console.log("Selected beacuse you have card")
//     }
//     else{
//         console.log("Not selected because of card");
//     }
// }
// else{
//     console.log("Not selected because of age");
// }

//==============================ARRAYS==============================

// There are no restriction of data type in java script
// Array ki data type object hoti hai

// var arr1 = ["Usaid","Areeb","Talha","Javed",123,"Anas",88,"Rafay"];
// console.log("Array 1 : " + arr1);
// console.log(list.length);
// list.push("sunny");
// console.log(list);
// list.shift("anas");
// console.log(list);

// var arr2 = arr1.slice(2,6);
// console.log("Array 2 : " +arr2);

// arr1.splice(1,4);
// console.log(arr1);

// arr1[10] = "javed";
// console.log("Updated Array : " +arr1);

//======================================== For Loops ========================================

// var a = +prompt("Enter a number to print table")

// var arr1 = ["Usaid","Areeb","Talha","Javed",123,"Anas",88,"Rafay"];

// for(i=1; i<arr1.length; i++)
// {
//     console.log(arr1[i]);
// // }
// var a = ["Hello","Bye"];
// var b = ["Usaid","Talha","Areeb","Ali"];
// for(i=0; i<a.length; i++)
// {
//     for(j=0; j<b.length; j++)
//     {
//         console.log(a[i] + " " + b[j]);
//     }
// }


//============================== STRINGS METHODS ==============================

// var city = "karachi";
// var userinp = prompt("Enter your name");
// var convertedinp = userinp.toLowerCase();
// console.log("Normal Value = " + userinp);
// console.log("COnverted Value = " + convertedinp);

// if(city == convertedinp)
// {
//     console.log("Found");
// }
// else{
//     console.log("Not found");
// }

// var cities = ["karachi","lahore","islamabad","peshawar"];
// var userinp = prompt("Enter your city");
// var convertinp = userinp.toLowerCase();
// var found = false;
// for (var i=0; i<cities.length; i++)
// {
//     if(convertinp == cities[i]){
//         found = true;
//     }
// }
// if(found)
// {
//     console.log("City found");
// }
// else
// {
//     console.log("City not found");
// }

// var a = "hello world";
// console.log(a.length);

// var arr = ["a","b","c","d","e","f"];
// console.log(arr.indexOf("e"));
// arr[4] = "world";
// console.log(arr);

// var u = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus temporibus, mollitia molestiae quidem rerum porro provident ab autem magni";
// console.log(u);
// var b = u.slice(0,10) +'...';
// console.log(b);

// var
// var text = "World War II";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, 1) + "Hello World" + text.slice(i + 12);
//  }
//  }
//  console.log(text);
    

// =================================== Round of techniques ===========================================
// var num = 5.9;
// var convertednum = Math.round(num);
// console.log(convertednum);

// var convertednum = Math.ceil(num);
// console.log(convertednum);

// var convertednum = Math.floor(num);
// console.log(convertednum);

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

//============================ Date ============================

// var date = new Date()
// console.log(date.getDate());

// var date = new Date();
// console.log(date);
// var getDay = date.getDay();
// var getMonth = date.getMonth();
// var getDay = date.getDay();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// console.log(days[getMonth]);

// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDate = new Date();
// var currentDayName = daysOfWeek[currentDate.getDay()];

// console.log("Today is " + currentDayName);

// var date = new Date();
// var convertedDate = date.toLocaleString();
// console.log(convertedDate);


// ======================================== Functions ========================================
// functions are used to resue code
// Recieving ke waqt parameter kehlata hai
// Jab outside se data pass ho to arguement kehlata hai
// return function me se data bahar pass karne ke liye hota hai

// function abc(a) // Receiving data
// {
//     console.log("Hello " +a);
// }
// abc("Usaid"); // Passing data
// abc("Areeb")


// function calculator(a,b,operator){

//     if(operator === "+")
//     {
//      return a + b;
//     }
//     else if(operator === "-")
//     {
//         return a - b;
//     }
//     else if(operator === "*")
//     {
//         return a * b;
//     }
//     else if(operator === "/")
//     {
//         return a / b;
//     }
//     else{
//         console.log("Wrong operator selected")
//     }
// }

// var operator = prompt("Enter operator");
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// var result = calculator(a,b,operator);
// console.log("Ans is : " +result);


// =========================== Global and local variables ===================================
// var b = "abc" => Global variable
// { var b = "abc"} => Local variable



// ====================================== Switch Case ==============================================

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


// ============================================ While / Do-while Loops ========================================
//

// var i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// var i=0;
// do{
//      console.log(i);
//      i++;
// } while(i < 10);


// ================================================ Events ==================================================

var inp = document.getElementById("inp");

// function greet()
// {
//    img.src="https://www.springboard.com/blog/wp-content/uploads/2022/01/is-programming-hard-a-guide-to-getting-started-in-2022-scaled-1-scaled.jpeg";
// }

// function onMouseHover(){
//     img.src="https://www.springboard.com/blog/wp-content/uploads/2022/01/is-programming-hard-a-guide-to-getting-started-in-2022-scaled-1-scaled.jpeg";
// }
// function onMouseOut(){
//     img.src="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"
// }

function addVal(val){
    inp.value += val;
}
function calculateVal()
{
    inp.value = eval(inp.value);
}
function clearVal()
{
    inp.value = "";
}
function goBack(){
    inp.value = inp.value.slice(0,-1);
}




