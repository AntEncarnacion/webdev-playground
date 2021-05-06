//  let + const

const player = "Ike";
let experience = 100;
let newGamePlus = false;

if (experience > 90) {
  let newGamePlus = true;
  console.log(newGamePlus);
  //  Prints true
}

console.log(newGamePlus);
//  Prints false

//  the let keyword initializes a new variable inside of EVERY type of block
//  Always try to use let over var

//  const

//  player = "Marth";
//  this is an error because const variables cannot be modified.
