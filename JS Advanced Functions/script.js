const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

//  Closures  -
//  child scopes always have access to parent variables

const newFunc = first();
newFunc();
//  'Hi'

//  Old method
/* function first() {
  var greet = "hi";
  function second() {
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc(); */

//  Currying

//  Old method
const multiply = (a, b) => a * b;

//  curried
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3);
//returns a function which would be (b) => a*b;

curriedMultiply(3)(4);
//  returns 12 using cascaded like effect

//  Something useful to use this for:

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(6);
//  prints: 30

//  so we can use this to store a function instance with pre filled parameters so we can use it again

//  Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);
//  prints: 7

//  Avoiding side effects, functional purity.

//  Side effect is when a function changes anything outside. It is good to try to avoid this.

//  Functional purity is to avoid side effects and only change things via returns. This makes things more simplified and understandable.
