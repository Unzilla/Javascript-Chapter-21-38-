// Chapter 21-25 

//Task 1
// var firstName=prompt("Enter first name");
// var lastName=prompt("Ente last name");
// var fullName=firstName+" "+lastName;
// alert("Hello "+ fullName);

//Task 2
// var mobilePhoneModel=prompt("Enter your favourite phone model:");
// document.write("My favourite phone is : "+mobilePhoneModel);
// document.write("<br>Length of string: "+mobilePhoneModel.length);

//Task 3
// var word="Pakistani";
// document.write("<br>String:"+word);
// document.write("<br>Index of 'n':"+word.indexOf('n'));

//Task 4
// var word="Hello World";
// document.write("<br>String:"+word);
// document.write("<br> last Index of 'n':"+word.lastIndexOf('l'));

//Task 5
// var word="Pakistani";
// document.write("<br>String:"+word);
//  document.write("<br> Character at index 3:"+word.charAt(3));

//Task 6

// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// alert("Hello "+ firstName.concat(lastName));

//Task 7
// var city1="Hyderabad";
// document.write("<br>City:"+city1);
// document.write("<br>After replacement: "+city1.replace(city1,"Islamabad"));

//Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));

//Task 9
// var stringValue="472";
// document.write("<br>Value:"+stringValue);
// document.write("<br>Type:"+typeof stringValue);
// document.write("<br>Value:"+stringValue);
// var numberValue=parseInt(stringValue);
// document.write("<br>Type: "+typeof numberValue);

//Task 10
// var userInput=prompt("Type something:");
// document.write("<br>User Input:"+userInput);
// document.write("<br>Upper Case:"+userInput.toUpperCase());

//Task 11

// var userInput=prompt("Type something:");
// document.write("<br>User Input:"+userInput);
// var firstChar=userInput.charAt(0);
// var remaingChar=userInput.slice(1);
// var capitalFirstChar=firstChar.toUpperCase();
// var smallRemainingChar=remaingChar.toLowerCase();
// document.write("<br>Title Case:"+capitalFirstChar+smallRemainingChar);

//Task 12 
// var num = 35.36 ;
// var changeCase=num.toString();
// var checkedNew = changeCase.split('.').join("");
// document.write("<br>Number:"+num);
// document.write("<br>Result:"+checkedNew);

//Task 13
// var userName=prompt("Enter user name","Do not contain any special characters"+ "!"+","+"."+"@");
// for(i=0;i<userName.length;i++){
//     if(userName.slice(i,i+2)==="!" || userName.slice(i,i+2)===","|| userName.slice(i,i+2)==="."|| userName.slice(i,i+2)==="@"){
//         alert("enter a valid username");
//         break;
//     }
    
// }
//Task 14
// var A= ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag=false;
// var search=prompt("Welcome to ABC bakery What do you want to order sir/ma'am");
// var changeCase=search.toLowerCase();
// for(var i=0;i<A.length;i++){
//     if(A[i]===changeCase){
//         flag=true;
//         alert(changeCase+" is available at index "+i+" in our bakery");
//     }
// }if(flag===false){

//     alert("Sorry this item is not available in our bakery");
// }

//Task 15

// var pass=prompt("Enter password:");
// var letterNumber = /^[0-9a-zA-Z]+$/;
// if(pass.charCodeAt(0)>=48 && pass.charCodeAt(0)<=57){
//     alert("Password can't begin with number:");
// }
// if(pass.length<6){
//     alert("It must be 6 characters long:");
// }
// if(pass.match(letterNumber)){
//     alert("Passwword set successfully:");

// }else{
//     alert("write only alphanumeric");
// }



//Task 16
// var university = "University of Karachi";
// var arraySplit=university.split('');
// for(var i=0;i<arraySplit.length;i++){
//     document.write("<br>"+arraySplit[i]);
// }

//Task 17
// var userInput=prompt("Type anything:");
// document.write("<br>Last character of user input is: "+userInput.charAt(userInput.length-1));

//Task 18
// function countWords(sentence="",word){
//     var lowerSentence=sentence.toLowerCase();
//     var array=lowerSentence.split(" ");
//     var counter=0;
//     for(var i=0;i<array.length;i++){
//         if(array[i]===word){
//             counter++;
//         }
//     }
//     return counter;

// }
// document.write(countWords("The quick brown fox jumps over the lazy dog","the"));




//Chapter 26-30

//Task 1
// var num=+prompt("Enter number:");
// document.write("<br>"+"Number:"+num);
// document.write("<br>"+"Round Off Value:"+Math.round(num));
// document.write("<br>"+"Floor value:"+Math.floor(num));
// document.write("<br>"+"Ceil value:"+Math.ceil(num));

//Task 2
// var num=+prompt("Enter negative floating point number:");
// document.write("<br>"+"Number:"+num);
// document.write("<br>"+"Round Off Value:"+Math.round(num));
// document.write("<br>"+"Floor value:"+Math.floor(num));
// document.write("<br>"+"Ceil value:"+Math.ceil(num));

//Task 3
// var num=+prompt("Enter number to find its absolute value:");
// document.write("<br>Absolute value of "+num+" is "+Math.abs(num));

//Task 4
// var dice=Math.floor(Math.random()*6)+1;//generates random no from 1 to 6
// document.write(dice);

//Task 5
// var coinToss=Math.floor(Math.random()*2)+1;//generates random no from 1 to 6
// if(coinToss===1){
//     document.write("<br>"+coinToss);
//     document.write("<br>"+"Random coin value:Heads");
// }else{
//     document.write("<br>"+coinToss);
//     document.write("<br>Random coin value:Tails");
// }

//Task 6
// var number=Math.floor(Math.random()*100)+1;//generates random no from 1 to 100
// document.write("Random number betweenn 1 and 100 is"+number);

//Task 7
// var weight=prompt("Enter your weight:");
// var convertedNo=parseFloat(weight);
// alert("The weight of user is:"+convertedNo+"kgs");



//Task 8
// var secretNumber=Math.floor(Math.random()*10)+1;//generates random no from 1 to 100
// var userInput=+prompt("Enter a secret number betweenn 1 and 10:");
// if(secretNumber===userInput){
//     alert("Congratulations you correctly guessed secret number");
// }else{
//     alert("Try again");
// }


//CHAPTER 31-34 
//Task 1
// var date=new Date();
// document.write(date);

//Task 2
// var date=new Date();
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var monthIndex=date.getMonth();
// document.write(months[monthIndex]);

//Task 3

// var date=new Date();
// var stringDate=date.toString();
// document.write("<br>"+stringDate.slice(0,3));

//Task 4

// var date=new Date();
// var Day=date.getDay();
// var stringDate=Day.toString();

// if(stringDate==="0"|| stringDate==="6"){
//     alert("It's a fun day");
// }

//Task 5
// var date=new Date();
// var monthDay=date.getDate();
// var stringDate=monthDay.toString();

// if(stringDate<26){
//     alert("First fifteen days of month");
// }else{
//     alert("last  days of month");
// }


// Task 6
// var date=new Date();
// document.write("Current Date:"+date);
// var milliSeconds=date.getTime();
// document.write("<br>"+" Milliseconds since January 1,1970:"+milliSeconds);
// var minutes=date.getTime();
// document.write("<br>"+"Elapsed Minutes since January 1,1970:"+(milliSeconds / 1000) / 60);



//Task 7
// var date=new Date();

// var hours=date.getHours();
// if(hours>=0 && hours<12){
//     alert("It's A.M");
// }else{
//     alert("It's P.M");
// }
//Task 8
// var laterDate = new Date("December 31, 2020");
// document.write("<br>"+laterDate);



//Task 9
// var ramadanDate = new Date("June 18, 2015");
// var currentDate=new Date();
// var timediff=currentDate.getTime()-ramadanDate.getTime();
// var noOfDays=Math.round(timediff/(1000*60*60*24));
// document.write("<br>"+"No of days passed:"+noOfDays);

//Task 10
// var refDate=new Date("Dec 05,2015");
// var beg2015=new Date("Jan 01,2015")
// var timediff=refDate.getTime()-beg2015.getTime();
// alert(timediff);
// var seconds=timediff/1000
// document.write("<br>"+"No of milliseconds passed:"+seconds);

//task 11
// var date=new Date();
// alert(date);
// var currentHour=date.setHours(date.getHours()-1);
// alert(date);


//task 12

// var date=new Date();
// alert(date);
// var currentHour=date.setFullYear(date.getFullYear()-100);
// alert(date);

//task 13
// var age=+prompt("Enter your age:");
// var date=new Date();

// var birthYear=date.setFullYear(date.getFullYear()-age);
// alert(date.getFullYear());




//task 14
// var customerName=prompt("Enter customer name:");
// var date=new Date();
// var currentMonth=date.getMonth();
// var noOfUnits=+prompt("Kindly enter number of units:");
// var chargePerUnit=16;
// var netAmountPayable=(noOfUnits*chargePerUnit).toFixed(2);
// var latePaymentSurcharge=350;
// var grossAmount=netAmountPayable+latePaymentSurcharge.toFixed(2);
// alert(customerName)
// console.log("\n"+"Customer Name:"+customerName);
// document.write("<br"+"Month:"+currentMonth);
// document.write("<br"+"Number Of Units:"+noOfUnits);
// document.write("<br"+"Charge per unit:"+chargePerUnit);
// document.write("<br"+"Late Payment Surcharge:"+latePaymentSurcharge);
// document.write("<br"+"Gross Amount:"+grossAmount);




//Chapter 38-40

//Task 1
// function tellDate(){
//     var currentDate =new Date();
//     document.write("<br>"+currentDate);
// }
// tellDate();

//Task 2
// function name(firstName,lastName){
//      var a=prompt("Enter first Name:");
//      var b=prompt("Enter last Name ");
//      alert("Hello "+firstName+" "+lastName);
// }

// name(a,b);

//Task 3
// function add(){

//     var a=+prompt("Enter first Number:");
//     var b=+prompt("Enter last Number ");
//     return (a+b);

// }
// document.write(add());

//Task 4
// function calc(a,operator,b){
//     if(operator==="+"){
//         return "Addition is:"+(a+b);
//     }
//     else if(operator==="-"){
//         return "Subtraction is:"+(a-b);
//     }
//     else if(operator==="*"){
//         return "Multiplication is:"+(a*b);
//     }
//     else if(operator==="/"){
//         return "Division is:"+(a/b);
//     }else if(operator==="%"){
//         return "Modulus is:"+(a%b);
//     }else{
//         return "Invalid operation"
//     }
// }
// document.write(calc(1,"+",2));

//Task 5
// function square(number){
//     return number*number;
// }
// document.write("Square of number is:"+square(4));

//Task 6
// function factorial(){
//     var fact=+prompt("Enter a number:");
//     var no=1;
//     for(var i=1;i<=fact;i++){
//         no=no*i;
//     }
//     return no;
// }
// document.write(factorial());

//task 7
// function counting(){
//     var a=+prompt("Enter start number");
//     var b=+prompt("Enter end number:");
//     for(var i=a;i<=b;i++){
//         document.write("<br>"+i);
//     }

// }
// counting();

//task 8
// function calculateHypotenuse(){
//     var base=+prompt("Enter base:");
//     var perp=+prompt("Enter hypotenuse:");
//     var hyp=(base*base)+(perp*perp);
//     function calculateSquare(){
       
//         return (Math.sqrt(hyp));
//     }
//     return calculateSquare();
// }
// document.write(calculateHypotenuse());

//task9
// function Area(width,height){
//     return width*height;
// }
// document.write("<br>"+Area(10,12));
// var width=+prompt("Enter width:");
// var height=+prompt("Enter height");
// document.write("<br>"+Area(width,height));

// task10
// var word=prompt("Enter word to check it is palindrome or not");
// var check="";
// for(var i=word.length-1;i>=0;i--){
//     check+=word[i];
// }
// if(check===word){
//     alert("word is palindrome");
// }



//task11
// function sentenceTitleCase(sentence)
// {
//   var array1 = sentence.split(' ');
//   var convertedArray = [];
    
//   for(var x = 0; x < array1.length; x++){
//       convertedArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return convertedArray.join(' ');
// }
// console.log(sentenceTitleCase("the quick brown fox"));




//task12
// function sentenceTitleCase(sentence)
// {
//   var array = sentence.split(' ');
//     var word=""
//  var large=array[0].length;
//   for(var i = 0; i < array.length; i++){
   
//      if(large<array[i].length){
//          large=array[i].length;
//          word=array[i];
//      }

//   }
//   return word;
// }
// alert(sentenceTitleCase("Web Development Tutorial"));

//task 13

// function countNoOfOccurrences(sentences,letter){
//     var counter=0;
//     for(var i=0;i<sentences.length;i++){
//         if(sentences.charAt(i)===letter){
//             counter++;
//         }
//     }
//     return counter;   
// }
// document.write(countNoOfOccurrences("JSResourceS.com","o"));


//task 14
// function calcCircumference(radius){
//     return "Circumference is:"+(2*3.14*radius);
// }
// function calcCircumference(radius){
//     return "Area is:"+(3.14*radius*radius);
// }
