/* //ternary operator (conditional operators)
condition ? expr1 : expr2;
 */

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter:" : "Access Denied";

var automatedAnswer =
  "Your account # is " +
  (isUserValid(true) ? "You may enter" : "Not Avaialble");

/* //  If/else alternative to ternary above
function condition(isUserValid(true)) {
    if (isUserValid(true)) {
        return "You may enter";
    }else{
        return "Access denied";
    }
} */

// Switch and case
var choice = 0;

while (choice != 3)
  switch (choice) {
    case 0:
      choice = 1;
      console.log(choice);
      break;
    case 1:
      choice = 2;
      console.log(choice);
      break;
    case 2:
      choice = 3;
      console.log(choice);
      break;
    default:
      //If the case was not found
      break;
  }
