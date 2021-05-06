function print(p) {
  console.log(p);
}

print("Hello!");

// Function declaration
function getSum(num1, num2) {
  var sum = Number(num1) + Number(num2);
  return sum;
}

print(getSum(10, 15));

//  Function expression with anonymous function
var sayBye = function () {
  print("Bye");
};

//  Function expression with name
var sayByeye = function byeB () {
  print("Bye");
};


sayBye();

function multiply(x1, x2) {
  return x1 * x2;
}

print(multiply(4, 2));


