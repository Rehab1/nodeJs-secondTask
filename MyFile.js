// const yargs= require('yargs').array(['add','sub','mul','div','rem']).argv;
// //().argv
// //const operation=require('./Operations/index');
// //const result=operation(yargs);
// console.log(yargs)
const operations = require("./Operations");

const params = require("yargs").array(['add','sub','mul','div','rem']).argv;
const ourOperation = ['add','sub','mul','div','rem'];
let numbers;
let selected = ourOperation.filter(
  operation => params[operation]
);
console.log(selected);
[operation] = selected;
let func = operations[operation];

if (operation === "add") {
  operation = selected;
  numbers = params.add;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "div") {
  operation = selected;
  numbers = params.div;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}

if (operation === "sub") {
  operation = selected;
  numbers = params.sub;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "mult") {
  operation = selected;
  numbers = params.mult;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "rem") {
  operation = selected;
  numbers = params.rem;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}


 
