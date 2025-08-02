// // -----------------------------CHAPTER-1----------------------------------
// -------------------------------------QUESTION-1------------------------------
alert("Error! Please enter a valid password.");
// -------------------------------------QUESTION-2------------------------------
alert("Welcome to JS Land...\nHappy Coding!");
// -------------------------------------QUESTION-3------------------------------
alert("Welcome to JS Land...");
// -------------------------------------QUESTION-4------------------------------
alert("Happy Coding!\n⬜ Prevent this page from creating additional dialogs.");
// -------------------------------------QUESTION-5------------------------------
alert("Hello... I can run JS through my web browser's console");
// -----------------------------CHAPTER-2----------------------------------
// -------------------------------------QUESTION-1------------------------------
var username = "Anosha";
// -------------------------------------QUESTION-2------------------------------
var myName = ("Anosha")
var FatherName = ("M.Amin")
var FullName = myName + FatherName;
alert(FullName)
// -------------------------------------QUESTION-3------------------------------
var message = "Hello World";
alert(message)
// -------------------------------------QUESTION-4------------------------------
var StudentName = "Anosha"
alert(StudentName)
var Age = "22"
alert(Age)
var Course = "Certified mobile application development"
alert(Course)
// -------------------------------------QUESTION-5------------------------------
var Food = "Pizza\nPizz\nPiz\nPi\nP";
alert(Food);
// -------------------------------------QUESTION-6------------------------------
var email = "anoshatharani@gmail.com"
alert("My email address is " + email);
//-------------------------------------QUESTION-7------------------------------
var book = " A smarter way to learn JavaScript";
alert("I am trying to learn from the note book" + book);
// -------------------------------------QUESTION-8------------------------------
var dochtml = 'Yah! I can write HTML content through Javascript';
alert(dochtml)
document.write("<br>" + dochtml);
// -------------------------------------QUESTION-9------------------------------
var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);
// -----------------------------CHAPTER-3----------------------------------
// -------------------------------------QUESTION-1------------------------------
var age = "22";
alert("I am " + age + " years old");
// -------------------------------------QUESTION-2------------------------------
var visit = "8"
alert("You have visited the site " + visit + "times")
// -------------------------------------QUESTION-3------------------------------
var birthyear = "2002";
document.write(" <br>My birth year is " + birthyear + "<br>Data type of my declared variable is number <br>");
// -------------------------------------QUESTION-4------------------------------
var visitor = "Anosha ";
var product = " Lipsticks ";
var quantity = " 4 ";
document.write(visitor + "ordered " + quantity + product + " on Masarrat-Misbah Makeup.com <br>" )
// -----------------------------CHAPTER-4----------------------------------
// -------------------------------------QUESTION-1------------------------------
var product = "makeup", product1 = "skincare" , product2 = "haircare"; //1statement and 3 declares
console.log(product , product1 , product2)
// --------------------------------------QUESTION-2------------------------------
// -----------------------5 legal variable names-------------------
// var num1 , num2numm3 =  
// variable banate hue number beech me r end me lagega.
// // var  _num , num_2 , num_ 
// variable banate hue srf underscore lag skta hai.
// // var $num , num$num , num$  
// variable banate hue srf dollar lag skta hai.
// // var nameHere 
// camel case is allow in variable name 
// // var NameHere 
// Pascal case laga skte
// // var name_here
// snake case bhi laga skte hain.
// // var MY_NAME 
// sb ko caps bh use krkskte hain.
// // -----------------------5 illegal variable names-------------------
// // var 1num 
// number se start nh hoga.
// // var numl@  
// koi bh special character use nh hoga.
// // var num m 78 0 
// kahi bhb spcae use nh hoga.
// // var kwqd-nihq 
// string hyphen bh use nh honge
// // var 12334  
// srf number bh use nh hoga.
// -------------------------------------QUESTION-3------------------------------
// -------------------------------A==========================
document.write("<h1> Rules for naming JS variable </h1> <br>" )
// -----------------------------B-------------------------------
var a = " $legalcharacter "
var b = " _legalcharacter "
var c = " PascalCase "
var d = " Snake_Case "
var e = " pascalCase "
// -----------------------------C------------------------------
document.write("Variable must begin with a " + a  + b + c + d  + e +  "<br>")
// -------------------------------D----------------------------
document.write("Variable names are case sensitive " +  "<br>")
// ------------------------------E-------------------------------------
document.write("Variable names shou;d not be JS character " +  "<br>")

//------------------------CHAPTER-5----------------------------------
// -------------------------------------QUESTION-1------------------------------
var num1 = 3
var num2 = 5
var add = num1 + num2
document.write("Sum of " + num1 + " and " + num2 + " is " + add + "<br>")
// -------------------------------------QUESTION-1a------------------------------
var num1 = 3
var num2 = 5
var sub = num1 - num2
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>")
// -------------------------------------QUESTION-1b------------------------------
var num1 = 3
var num2 = 5
var mul = num1 * num2
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>")
// -------------------------------------QUESTION-1c------------------------------
var num1 = 3
var num2 = 5
var div = num1 % num2
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>")
// -------------------------------------QUESTION-1d------------------------------
var num1 = 3
var num2 = 5
var mod = num1 % num2
document.write("modulas of " + num1 + " and " + num2 + " is " + mod + "<br>")
// -------------------------------------QUESTION-2------------------------------
var num = undefined
document.write("Value after variable declaration is: "  + num + "<br>")
num = 18
document.write("Initial value: " + num + "<br>");
num++
document.write("Value after increment is: " + num + "<br>");
num = num + 7
document.write("Value after addition is: " + num + "<br>");
//     also
num += 7
document.write("Value after addition is: " + num + "<br>");
num--
document.write("Value after decrement is: " + num + "<br>");
num = num % 4
document.write("The remainder is: " + num + "<br>");
var tPrice = 900
var tQuantity = 6
var totalCost = tPrice * tQuantity
document.write("Total cost to buy " + tQuantity + " tickets to a movie is " + totalCost + "PKR" + "<br>");
// -----------------------------------------------QUESTION-3------------------------------
var table = 4
document.write("<h1>Table of " + table + "</h1>");
for (var l = 1; l <= 10; l++) {
    document.write(table + " x " + l + " = " + (table * l) + "<br>");
}
// // -----------------------------------------------QUESTION-4------------------------------
var celsius = 25
var fahrenhit = (celsius * 9 / 5) + 32
document.write(celsius + "°C is " + fahrenhit + "°F" + "<br>");