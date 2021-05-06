

const array = [1, [2, 3], [4, 5]];
array.flat();
//  returns [1,2,3,4,5]
const array2 = [1, 2, [3, 4, [5]]];
array.flat();
//  returns [1,2,3,4,[5]]
//  so it only removes the first layer of array

//  but we can manipulate the amount of layers we want to remove
const array3 = [1, 2, [3, 4, [5]]];
array.flat(2);
//  returns [1,2,3,4,5]


//  if you want to remove all of the nests and you don't know how many there are then just put a big number like 50

//  flat also removes commas of empty entries for example


//  .flatMap(FUNCTION) flattens the array but also allows you to modify each iteration just like a regular map function

//  trim function
const userEmail1 = '          useremail@mail.com';
const userEmail2 = 'useremail@mail.com          ';
userEmail1.trimStart();
//trims the spaces in the start
userEmail2.trimEnd();
//trims the spaces in the end

userEmail1.trim();
//  trims both the start and the end of spaces

userProfiles = [['dragoonMega', 23], ['scarful', 40], ['han'], 18];

Object.fromEntries(userProfiles);
//  returns an object with the property name as teh first index of every nested array and the value as the second index of an array
//  basically an inverse 'entries' function


//  exception handling
try {
    //  this will be attempted
} catch {
    //  this block will run if try has an error
}

//  old method - you had to catch the object error, now it is optional
try {
    true + hi
} catch (error) {
    console.log('you messed up ' + error);
}