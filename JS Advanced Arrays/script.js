//for each function
//  iterates on each element, can modify or not (has a lot of side effects)

const array = [1, 2, 10, 17];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("for each", double);
//  (4) [2, 4, 20, 34]

//  map function (pure function)
//  always needs a return element, and it will store the return on each iterartion (no side effects)
const mapArray = array.map((num) => num * 2);

/* const mapArray = array.map((num) => {
  return num * 2;
}); */

console.log("map array", mapArray);

//  filter function
//  passes the element observed to the new array if thhe return is true, if its false it does not pass it
const filterArray = array.filter((num) => num > 5);

console.log(filterArray);
//  (2) [10, 17]

//  reduce
//  remembers the first parameter all across the iterations
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log("reduce", reduceArray);
//  30

const reduceArray2 = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);

console.log("reduce", reduceArray2);
//  35
