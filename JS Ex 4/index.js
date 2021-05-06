var userAge = prompt("Enter age: ");
userAge = Number(userAge);
if (userAge < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (userAge === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  alert("Powering On. Enjoy the ride!");
}
