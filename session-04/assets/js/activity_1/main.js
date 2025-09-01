import {} from "";

console.log(); // 5
console.log(); // 3


import multiply, { add, subtract, divide as myDivide } from "./math.js";


console.log(add(3, 2)); // 5
console.log(subtract(5, 2)); // 3


// default multiply function
console.log(multiply(3, 2)); // 6
import multiply from "./math.js";

multiply(3, 2); // 6

// divide function with alias myDivide
console.log(myDivide(6, 2)); // 3 

// render resuslts with ternary operator
multiply(3, 2) > 5 ? console.log("Result is greater than 5") : console.log("Result is less than or equal to 5");
  

// render results in the DOM
const multiply = document.querySelector("#result");