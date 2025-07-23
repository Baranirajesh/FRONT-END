//You can't use break or return a array
//array,forEach(value,index){}
let fruits=["apple","jackfruit","chikku"];
fruits.forEach (function(fruit,index){

  console.log(index+":"+fruits);

});
let numbers=[1,2,3];
numbers.forEach(num=>{
 console.log(num*2); 
});

let n=[1,2,3];
numbers.forEach(function(number,index){

let doubled=n.map((num)=>num*2);

console.log(doubled)});


//converting map() to froeach()
let num=[1,2,3];
let doub=[];//empty array
num.forEach((n1)=>{
doub.push(n*2)//n will be multiplied and pushed into doubled
});
console.log(doub);
//object
//name,age,isStudent are key,Ram,47,true are values
let person={
  name:"Ram",
  age:47,
  isStudent:true};
console.log(person.name);
person.city="New Work";
console.log(person.city);//deleted
delete (person.isStudent);
//printing the obj
for(let key in person)
{
  console.log(key+":"+person[key]);
}
//obj using function
let user1={
  name:"Hari",//using this i want to fetch the name
  greet1:function()
  {
    console.log(this.name);//name is the obj ref
  }
}; 
user1.greet1();
//Array of objects
let flowers=[
  {name:"rose",type:"flowering",color:"red"},
  {name:"fern",type:"non-lowering",color:"green"}
];
//loop thru all flowers
flowers.forEach(flower=>{
console.log(`${flower.name} is a ${flower.type} plant is usually ${flower.color}.`);
});