/* Data Types:

    undefined, null, boolean, string, symbol, number, object

*/

/*
  code output
  \' single quote
  \" double quote
  \\ backslash
  \n newline
  \r carriage return
  \t tab
  \b backspace
  \f form feed
*/

//string immutability
// let myString = 'jello world';

// myString[0]='h';

// console.log(myString);
// 'use strict'
// console.log(30 > '31');

// profile lookup
var contacts = [
  {
    "firstName":"Akira",
    "lastName":"Laine",
    "number":"05432365433",
    "likes":["pizza","coding","brownie points"]
  },
  {
    "firstName":"Harry",
    "lastName":"Potter",
    "number":"09932365433",
    "likes":["hogwarts","bird","brownie points"]
  },
  
];

function lookUpProfile(name,prop){
  for(item of contacts){
    if(item.firstName === name){
       return item[prop] || "no such property";
    } 
  }
}

// console.log(lookUpProfile("Akira","like2s"));


//arrow function
const realNumberArray = [4,5.6,-9.8,3.4,42,6,8.34,-2];
const squareList = (arr) => {
  const squaredIntegers = arr.filter(i => i > 0 && Number.isInteger(i)).map(i => i*i);
  return squaredIntegers;
}


const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers)

//rest operator
const sum = (function(){

    return function(...args){
   
    return args.reduce((a,b) => a + b , 0);
  };

})();

// console.log(sum(1,2,3));

//spread operators
const arr1 = ['jan','feb','mar','apr','may'];

let arr2;

(function(){
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();

console.log(arr2);