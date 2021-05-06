var database = [
  { username: "antus12345", password: "pass123" },
  { username: "justin67623", password: "justintime" },
  { username: "ivan4657", password: "4657988" },
];

var newsFeed = [
  { username: "antus122345", timeline: "Its my bday!" },
  { username: "justin67623", timeline: "Happy bday antus!" },
  { username: "ivan4657", timeline: "Today is a lovely day" },
];

var usernamePrompt = prompt("Enter username: ");
var passwordPrompt = prompt("Enter password: ");

function isUserValid(user, pass) {
  for (let i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      console.log(newsFeed);
      return true;
    } else {
      console.log("Incorrect username or password. Try again.");
      return false;
    }
  }
}

function signIn(user, pass) {
  console.log(isUserValid(user, pass));
  // for (let i = 0; i < database.length; i++) {
  //   if (user === database[i].username && pass === database[i].password) {
  //     console.log(newsFeed);
  //     break;
  //   } else {
  //     console.log("Incorrect username or password. Try again.");
  //   }
  // }
}

signIn(usernamePrompt, passwordPrompt);
