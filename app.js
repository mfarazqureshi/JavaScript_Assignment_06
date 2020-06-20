    // Chapter # 21-25    String Methods

        //   Task  1


var a = prompt("Whats your First Name?");
var b = prompt("Whats your Last Name?");

alert("Welcome " + a + " "+ b)


// Task  2

var a = prompt("Whats your Favorite Mobile Model ? ");
var b = a.length
document.write("My Favorite Phone is: " + a + "<br>");
document.write("Length of String: " + b)


// Task  3


var a = "Pakistani";
var index = a.indexOf("n")
document.write("String: " + a +"<br>");
document.write("Index of 'n': " + index) 


//  Task  4


var word = "Hello World"
var lastindex = word.lastIndexOf("l")
document.write("String: "+word +"<br>" + "Last Index of 'l': " + lastindex)


// Task  5


var String = "Pakistani"
var index = String.charAt(3)
document.write("String: "+ String +"<br>"+"Character at Index 3: "+index)


//  Task  6


var firstname = prompt("Whats your first name")
var secondname = prompt("Whats your second name")
var res = firstname.concat(secondname);
document.write("Wellcome: "+ res)


// Task  7


var city = "Hyderabad";
var citynum = city.indexOf("Hyderabad");
var firstcity = city.slice(0,citynum);
var replacingcity = "Islam";
var secondcity = city.slice(citynum+5)
document.write("City: "+city +"<br>")
document.write("Replacing City: "+firstcity+replacingcity+secondcity)


//  Task  8


var message = "Ali and Sami are best friends. They play cricket and football together.";
var message1 = message.replace(/and/g,"&")
document.write("Message: "+message+"<br>")
document.write("Replacing Message: "+message1)


//  Task 9


var value = "472"
number = ("472")
document.write("Value: "+value+"<br>")
document.write("Type: string" + "<br>")
document.write("Value: "+number+"<br>")
document.write("Type: number" + "<br>")


//  Task  10


var input = prompt("What you Want? ")
var upperinput = input.toUpperCase()
document.write("User Input: "+ input+ "<br>"+ "Upper Case: "+upperinput)


//  Task  11


var word = prompt("JS stand for? ")
var firstchar = word.slice(0,1)
firstchar = firstchar.toUpperCase()
var otherchar = word.slice(1)
otherchar = otherchar.toLowerCase()
var output = firstchar + otherchar;
document.write("User Input: "+ word+ "<br>"+ "Title Case: "+output)


//  Task  12


var num = 35.36;
var newNum = num.toString()
var result = newNum.replace(/35.36/g,"3536");
document.write("Number: " + num + "<br>" + "Result: " + result )


//  Task  13


var name = prompt("Enter a user name");
if (name = name.charCodeAt(33,44,46,64)){
    alert("Please enter a valid username")
}
else{
    alert("Wellcome")
}



//   Task  14


var order = prompt("Wellcome to Bakery..Enter your order Please ..")
order1 = order.toLowerCase()
var A = ["cake","apple pie","cookies","chips","patties"]
var index= A.indexOf(order1)
    if (A [0] === order1 || A [1] === order1 || A [2] === order1 || A [3] === order1 || A [4] === order1)
    {

        document.write(order1 + " is available at index " + index + " in our bakery")
       
    }
    else
    {
        document.write(order1 + " is not available in our bakery") 
        
}


//  Task  15


var pw = prompt("Enter a Password Here"); 
  
if (pw.length<6){  
    alert("Password must be at least 6 characters long.");
    }
else
{
    alert("Greetings")
}


//  Task  16


var university = "University of Karachi";
var out = university.split("").join("<br>")
document.write(out)


//  Task  17


var userInput = prompt("Enter your name")
var lastCharacter = userInput.charAt(-1);
document.write("User Input: " + userInput +"<br>" + "Last character of input: " + lastCharacter)


//  Task  18


var message = "The quick brown fox jumps over the lazy dog"
var occurence = message.indexOf()
document.write(message + "<br>" + "There are " + occurence + " occurences of the word the")




                //   Chapter 26-30   Math Methods


//  Task  01


var number = prompt("Enter a Positive Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: "+number+"<br>"+"Round of Value: "+round+"<br>"+"Floor Value: "+floor+"<br>"+"Ceil Value: "+ceil)


//  Task  02


var number = prompt("Enter a Negative Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: "+number+"<br>"+"Round of Value: "+round+"<br>"+"Floor Value: "+floor+"<br>"+"Ceil Value: "+ceil)


//  Task  03


var A = -4;
var B = 5;
var absolute = Math.abs(A)
var absolute1 = Math.abs(B)
document.write("The absolute value of -4 is " + absolute)


//  Task  04


var random = Math.random() * 6;
var round = Math.round(random);
document.write("Random dice value: " + round)


//   Task  05


var head = "Heads"
var tails = "Tails"

var toss = Math.random() * 2 ;

var floor = Math.floor(toss)
if(floor === 0 )
{
    document.write ("2 " + "<br>" + "Random coin value: " + head )
}
else
{
    document.write ("1 " + "<br>" + "Random coin value: " + tails)
}
console.log(toss)



//   Task  06


var random = Math.random() * 100;
var round = Math.round(random);
document.write("Random Number Between 1 and 100: "+ round)


//   Task  07


var weight = prompt("Enter your weight in Kilograms");
document.write("The Weight of User is: "+weight+" Kilograms")


//   Task  08


var random = 9;
var secret = +prompt("Enter a Secret Number b/w 1 to 10");

if (secret === random){
    alert("Congratulations!")
}
else {
    alert (" Try Again!")
}



            //    Chapter 31-34        Data Methods

//  Task  01


var a = new Date();
document.write(a)


//  Task  02

var a = new Date();
var b = a.getMonth();
alert(b)


const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const d = new Date();
document.write("Current Month: " + month[d.getMonth()]);


//  Task  03


var a = new Date();
var b = a.getDay();
alert(b)

const day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
const d = new Date();
document.write("Today is " + day[d.getDay()]);


//   Task  04


var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();
if (days !== 0 || 6)
{
    document.write("Current day: " + days[d.getDay()])
}
else if (days === 0 || 6)
{

document.write("Its fun day");

}


//   Task  05


var datesNames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

var d = new Date();
if (d < 16)
{
    document.write("First fifteen days of the month")
}
else if (d > 15)
{

document.write("Last Fifteen days of the month");

}


//   Task  06


var date = new Date(prompt("Enter your date" , "April 30,1992"));
var timemili = date.getTime();
var timemin = timemili/(1000*60);
var today = new Date();
document.write(today +"<br>"+ "Elapsed MilliSeconds Since: "+date+" "+ timemili +"<br>"+"Elapsed Minutes Since: "+date+" "+ timemin)


//   Task  07

var a = new Date();
var b = a.toLocaleTimeString();
console.log(b)


//   Task  08


var date = new Date (prompt("Enter Date december 31,2020:"))
document.write("Later Date: "+date)


//   Task  09


var d = new Date ("apr 25, 2020")
var dmili = d.getTime();
var accuage = dmili 
var accuage1 = dmili / (1000 * 60 *60 *24 *30 *12)
var round = Math.round(accuage1)
document.write(round + " days have passed since 1st ramadan , 2020")
console.log(round)



//   Task  10


var date1 = new Date("Jan 01,2015")
var date1mili = date1.getTime();
var out1 = date1mili/(1000*60);
var date2 = new Date ("dec 05,2015")
var date2mili = date2.getTime();
var out2 = date2mili/(1000*60);
var result = out2 - out1
document.write(result+" seconds had passed since beginning of 2015")
console.log(out1)
console.log(out2)


//   Task   11


var a = new Date()
var b = a.setHours(1);
var c = new Date(-b)

document.write("Current Date: " + a + "<br>" + "1 hour ago it was " + c)


//   Task  12


var a = new Date();
var d = new Date();
var pastYear = d.getFullYear() - 100;
var c = d.setFullYear(pastYear);
document.write("Current date: " + a + "<br>" + "100 years back,it was " + d )


//  Task  13


var a = new Date (prompt("Whats your age ?","jan 01,2020"));
var out = a.getFullYear();
document.write("Your birth year is: "+out)


//  Task  14


var name = "Muhammad Faraz Qureshi";
var month = "June";
var units = 410;
var charges = 16;
var payable= units * charges;
var lateCharge = 350;
var grossPayable = payable + lateCharge;
document.write("<h1> K-Electric Bill </h1>" + "<br>" + "Customer Name: " + name + "<br>" 
+ "Month: " + month + "<br>" + "No. of units: " + units + "<br>" + "Charges per units: " + charges
+ "<br>" + "<br>" + "Net amount payable (within due date): " + payable + "<br>" + "Late payment surcharge: " + lateCharge
+ "<br>" + "Gross amount payable (after due date): " + grossPayable)


                // Chapter 35-38        Function


//   Task  01


var a = new Date();
function date (){
document.write(a)
}
date();
 

//   Task  02


var a = prompt("Enter your first name")
var b = prompt("Enter your last name")
function name (){
document.write("Welcome: "+a+" "+b)
}
name();


//   Task  03


var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var add = num1 + num2
function sum(){
    document.write("Sum of two number is: "+add)
}
sum();


//   Task  04

function calc(num1,opr,num2){
    if (opr === "+"){
        return num1 + num2
    }
    else if (opr === "-"){
        return num1 - num2
    }
    else if (opr === "*"){
        return num1 * num2
    }
    else if (opr === "/"){
        return num1 / num2
    }
    else {
        return "Incorrect Operator"
    }
}

var result = calc(5,"+",5)
var result1 = calc(4,"*",4)
var result2 = calc(4,"$",9)
var result3 = calc(5,"/",9)
var result4 = calc(3,"-",3)
document.write(result + "<br>")
document.write(result1 + "<br>")
document.write(result2 + "<br>")
document.write(result3 + "<br>")
document.write(result4 + "<br>")


//   Task  05

var a = prompt("write a number who want to square");
function square(sq){
    sq = a*a;
    document.write("The sum of squares for numbers up to and including "+a+" is "+sq)
}
square();


//   Task  06

var n = prompt("Write a number who want to Factorial");
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);


//   Task  07


function sum() {
for (var a=1 ; a<100 ; a=a+10)
{
    for(var b=a ; b < a+10 ; b++)
    {
        document.write(b + "  " + " ");
    }

document.write("<br>")

}
}
sum();



//   Task  08


var base = +prompt("Enter base value")
var perp = +prompt("Enter perpendicular value")

function hyp(){

    var a = base * base;
    var b = perp * perp
    var hypot = a + b;
    document.write("Hypotenuse^2 = "+ hypot)
}
hyp();


//   Task  09


var width = +prompt("Enter width value")
var height = +prompt("Enter height value")

function area(){

    var a = width * height;
    document.write("Area of the rectangle is: " + a)

}
area();


//   Task   10


var word = prompt("Enter your word");
var check = "";

function pallindrome(){
for (var i=word.length - 1; i >= 0  ; i-- )
{
    check +=word[i]
}

{
document.write(word[i])
}

document.write(word,check)



if (check === word) {
    document.write("<br>" + word + " is palindrome word")
}
}
pallindrome();


//   Task  11

var message = "the quick brown fox";
function titleCase(){
var firstchar = message.indexOf('the quick brown fox ')
var replacing = 'The Quick Brown Fox'
var out2 = message.slice(firstchar+20)
document.write("Example String: "+message+"<br>"+"Expected Output: "+ replacing + out2)
}
titleCase();

//   Task  12



var str = "Web Development Tutorial"
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("Web Development Tutorial");
function findLongestWord(str) {
    return str.length;
  }
  findLongestWord("Web Development Tutorial");
findLongestWord(str);    
document.write(findLongestWord(str))



//   Task   13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));



//   Task  14


var r = prompt("Enter value of Radius")
var pi = 3.142;

function calcCircumference() {

    var Circumference = 2 * pi * r;
    document.write("Circumference Of Circle: "+Circumference+"<br>");
}

calcCircumference();

function calcArea() {

    var area = pi * r * r;
    document.write("Area Of Circle: "+ area)

}

calcArea();


