//  Destructuring

const obj = {
  player: "Leon",
  exp: 100,
  newGamePlus: false,
};

/* //  A way to access an objects attributes
const player = obj.player;
const experience = obj.exp;
let newGamePlus = obj.newGamePlus; */

//  A more efficient way to access and initialize variables with object attributes
const { player, experience } = obj;
let { newGamePlus } = obj;

//  a dynamic way of naming variables by taking using variables or any other info introduced
const name = "john snow";

const obj2 = {
  [name]: "hello",
  [1 + 2]: "jijasasd",
};

//  {3: "jijasasd", john snow: "hello"}

//  if property name and value are the same:
const a = "john";
const b = false;
const c = 0.14;

const obj3 = {
  a,
  b,
  c,
};
//  {a: "john", b: false, c: 0.14}

//  Template Strings

//not very efficient
const greeting = "Hello " + name + "how are you?";

//THE BEST WAY
//  `` allows you to use '' and "" inside your string
//  using this syntax allows you to dynamically add variable info inside the string
// const bestGreeting = `Hello ${name} you seem to be ${a}`;

//  Default arguments
//  aka default parameters

//  if the values do not get modified the parameter values will be the default used
function greet(a = "", b = true, c = 1.14) {
  return `Hello ${name} you seem to be ${c - 1}`;
}

//  Symbol type
//  not used often

//  These creates unique types. To avoid issues.
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

//  sym2 != sym3

//  arrow functions

//  common function
function add(x, y) {
  return x + y;
}

//  shorter alternative
const mult = (x, y) => {
  x * y;
};

//  even shorter alternative
// const mult = (x, y) => x * y;
