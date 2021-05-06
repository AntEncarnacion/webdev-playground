//  Function constructor

// let john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

//  this works as if the function was a method declared on top. instead we are adding a new method on the go. also works with
//  properties. Note, this method is being added to the proto parent not to the Person object 
Person.prototype.calculateAge = this.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
};

let john = new Person('John', 1990, 'teacher');
john.calculateAge();
//  30


//  Object.create (Alternative)

// let personProto = {
//     calculateAge: () => {
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// let max = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// //  better way
// let jane = Object.create(personProto, 
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });




//  Primitives vs objects

//  primitives contain a value, while objects contain a reference



//////////////////////////////////////////////////////
//  Passing functions as arguments

let years = [1990, 1992, 1924, 2000, 2010];

const arrayCalc = (arr, fn) => {
    let arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

const calculateAge = (el) => {
    return 2020 - el;
}

console.log(arrayCalc(years, calculateAge));


////////////////////////////////////////////////////
//  Funcitons returning functions

const frf = (job) => {
    if(job === 'designer') {
        return (name) => {
            console.log(name + ', can you explain what UX is?');
        }
    } else if (job === 'teacher') {
        return (name) => {
            console.log(`What subject do you teach ${name}?`);
        }
    } else {
        return (name) => {
            console.log(`Hello ${name}`);
        }
    }
} 







///////////////////////////////////////
//  IIFE (Immediately invoked function method)

//old way
// const game = () => {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

//IIFE
(() => {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

//  one of the benefits is that you cant access the values of the function from the outside as it is an expression not a declaration
//  you can only call an IIFE once
//  its good for data privacy and doesnt interfere with outside code


//////////////////////////////////////
//  Closures

const retirement = (retirementAge) => {
    let a = ' years left until retirement.';
    return (yearOfBirth) => {
        let age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

const retirementUS = retirement(66);
retirementUS(1990);
//same as 
retirement(66)(1990);

//  summary:
//  an inner function always has access to the variables and parameters of its outer function,
//  even after the outer function has returned.

//  challenge

const frf = (job) => {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you explain what UX is?');
        } else if (job === 'teacher') {
            console.log(`What subject do you teach ${name}?`);
        } else {
            console.log(`Hello ${name}`); 
        }
    }
} 