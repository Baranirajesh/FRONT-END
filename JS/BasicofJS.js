const a=10;
const b=20;
const sum=a+b;
console.log("The sum of two number is"+sum);

var age=25;
var age=26;
console.log("The age is"+age);

let a2=10;
let a3=30;
let sum3=a2+a3;
console.log("The sum is"+sum3);

greet ();// Function declaration are fully hoisted with their body, so you can call it before
function greet()
{
  console.log("Hello SLA")
}

let a1;//hoisted declaration 
a1=10;//assignment happens
console.log(a1);//undefined

if(condition) {
  //coe to run the condition is true
}

else{
  //code to run the conditon is false
}

let age=25;

if(age>=18)
{
  console.log("You are Eligible to vote")
}

else{
  console.log("You are Not eligible to vote")
}