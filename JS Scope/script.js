//  Scope
//  Root Scope (window)
var b = "whats up foo";

function bb() {
  //  child scope
  var a = "hello";
  b = "sike";
  //    This print funtion does have access to the variable b because this function is a part
  //    of the root scope, and the var b is part of the root scope
}

bb();
console.log(b);

//  THIS WONT WORK BECAUSE THE VARIABLE A IS LIMITED TO THE SCOPE OF THE FUNCTION.
// console.log(a);

//  Variables declared inside of functions or blocks cannot be accessed by the outside scope.
