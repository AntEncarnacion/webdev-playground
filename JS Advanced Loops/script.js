const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 4, oranges: 10, grapes: 9
}

//  old methods

//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

//  for of
//  Iterating - arrays, strings (most of the time objects are not iterable)
for (item of basket) {
    console.log(item);
}

//  for in - properties
//  enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}
//prints the name of the properties of an array

//  prints out the indexes of the array
for (item in basket) {
    console.log(item);
}
//0
//1
//2
