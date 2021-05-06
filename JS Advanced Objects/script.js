//  reference type

[] === [];
//false

[1] === [1];
//false

let object1 = { value: 10 };
let object2 = object1; //  object2 is a reference to object1
let object3 = { value: 10 };

object1 === object2;
//true

object1 === object3;
//false

object2.value = 15; //  since this a reference to the same value as object1 they will both change

object2.value;
//15

object3.value;
//10

//  context

//  not to be confused with scope! a scope starts within a block {}

console.log(this);
//  window object

// this === window;
//true

//  this is the object environment you are currently within (this object)
//  in this case it would be the window object

const objX = {
  a: function a() {
    console.log(this);
  },
};
objX.a();
//{ a: [Function: a] }

//  instatiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}.`);
  }
}

//  syntax for inheritance
class Wizard extends Player {
  constructor(name, type) {
    super(name, type); //  uses parent constructor
  }
  play() {
    console.log(`Weee im a ${this.type}.`);
  }
}

let objY = new Wizard("Anthony", "Healer");
objY.play();

//  Cloning objects (not passing it by reference)
let objO = { info: 213 };
let clone = Object.assign({}, objO);
let clone2 = { ...objO };

//  Shallow clone that doesnt copy the obj inside:
//  to clone it properly just use the JSON method
let objS = { info: 213, more: { deep: 23425 } };
let clone3 = Object.assign({}, objO);
let clone4 = { ...objO };
let superClone = JSON.parse(JSON.stringify(objO));
