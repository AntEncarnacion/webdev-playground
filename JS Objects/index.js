var user = {
  name: "Anthony",
  age: 34,
  job: "Coder",
  skills: ["html", "css", "c++"],
  call: function () {
    console.log("ANTHONY!!!");
  },
};
console.log(user.name);

user.isMarried = false;
user.age = 35;

console.log(user);

var list = [
  { username: "andy", password: "pass" },
  { username: "tess", password: "123" },
];

//andy password
console.log(list[0].password);

user.call();

var nullObj = null;
nullObj.name = "John";
