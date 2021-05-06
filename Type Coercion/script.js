//  Type coercion means that the language converts data into the needed type.

//  Type coercion only occurs when you use ==
1 == "1";
//  true

1 === "1";
//  false

//  Always try to use === to be clear and precise

//  Comparison table:
//  https://dorey.github.io/JavaScript-Equality-Table/

-0 === +0;
//  true

Object.is(-0, +0);
//  false

NaN === NaN;
//  false

Object.is(NaN, NaN);
//  true

//  ref:
//  https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
