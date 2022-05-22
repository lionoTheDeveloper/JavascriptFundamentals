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
  //arr2 = arr1;
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();

// console.log(arr2);

//destructuring assignment
var voxel = {x:1,y:2,z:3};

const {x:a,y:b,z:c} = voxel;

// console.log(a,b,c);

const AVG_TEMPERATURES = {
  today:32,
  tomorrow:33
}

function getTempOfTomorrow(avgTemperatures){
  "use strict";
  const {tomorrow:tempOfTomorrow} = AVG_TEMPERATURES;
  return tempOfTomorrow;
}

// console.log(getTempOfTomorrow(AVG_TEMPERATURES));


const LOCAL_FORECAST = {
  today:{min:10,max:20},
  tomorrow:{min:15,max:39}
};

function getMaxOfTmrw(forecast){
  "use strict";
  const {tomorrow:{max:maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
// console.log(getMaxOfTmrw(LOCAL_FORECAST));



const [x,,,y,,z] = [1,2,3,4,5,6];

// console.log(x,y,z);

let i = 8; let j = 3;

(() => {
  [j,i] = [i,j];
})();

// console.log(i,j);

//destructuring assignment with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){

    const [,,...arr] = list;
  return arr;
}

const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);


const stats = {
  max:33,
  min:23,
  median:23,
  average:24

}

const half = (function(){

  // return function(stats){
  //     return (stats.min + stats.max)/2;
  // }
  return function({min,max}){
    return (min + max)/2;
  }

})();

// console.log(stats);
// console.log(half(stats));

//class
class Vegetable {

   constructor(name){
     this.name = name;
  }

}

const carrot = new Vegetable('carrot');
const lemon = new Vegetable('lemon');

// console.log(carrot.name);
// console.log(lemon.name);

//getter setter

class Thermostat{

  constructor(temp){
    this._temp = 5/9 * (temp - 32);
  }

  get temperature() {
    return this._temp;
  }

  set temperature(updatedTemp){
    this._temp = updatedTemp;
  }

}

const thermos = new Thermostat(75);
// console.log(thermos.temperature);
thermos.temperature = 33;
// console.log(thermos.temperature);

//import export

// import { capitalizeString } from "./string_function.js";
// const cap = capitalizeString('hello');
// console.log(cap);

// import { capitalizeString,hello,world } from "./string_function.js";

// const cap = capitalizeString(`${hello} ${world}`);

// console.log(cap);

import * as Capitalizer from "./string_function.js";
const cap = Capitalizer.capitalizeString(`${Capitalizer.hello} ${Capitalizer.world}`);
// console.log(cap);

//default export import
import subtract from "./math_functions.js";

console.log(subtract(3,1));