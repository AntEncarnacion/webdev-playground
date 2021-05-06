// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons1 = ["Tim", "Johnathan", "Sandy", "Sarah"];
dragons1.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ["Tim", "Johnathan", "Sandy", "Sarah"];
dragons2.filter((name) => name.includes("John"));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = (num) => num ** 100;
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

console.log(pow100(10000));
//Infinity

/*
The MAX_VALUE property returns the largest number possible in JavaScript. This static property 
has a value of 1.7976931348623157e+308. Note: Numbers larger than MAX_VALUE are represented as infinity.
*/
