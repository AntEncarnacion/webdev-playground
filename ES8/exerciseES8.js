// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart

//  answer: trim removes spaces at the end and at the start. padEnd with two parameters simply does the same
//but instead of spaces it will fill out the chars with the value in the second parameter
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'


Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})