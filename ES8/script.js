//  adds n amount of spaces in front or back
"turtle".padStart(10);
//      turtle
//or .padEnd(n)


//  ending comma is valid
const fun = (a, b, c, d, ) => {
  console.log(a);
};

fun(1, 2, 3, 4);


Object.values
Object.entries
Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Grinch'
}


//  old method
//  iterates through the properties of an object like if it were an array
//  prints out property name along with property value
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})


//  gives you an array that has th property name in the first index and has the property value on the next index
Object.entries(obj).forEach(value => {
  console.log(value);
})


//  Example:
Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})
//  takes teh newusername and adds the id number (last digit) to the end of it