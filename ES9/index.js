//Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    turtle: 20
}

const {tiger, ...rest} = animals;

// tiger var has 23
// rest var has {lion: 5, monkey: 2}


//previous method use to be only for arrays
array = [1,2,3,4,5]
sum = (a,b,c,d,e) => {
    return a+b+c+d+e;
}

sum(...array);
// returns 15

//  another object spread operator example

function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

objectSpread(tiger, lion, ...rest);
//  23
//  6
// { monkey: 2, turtle: 20 }
