//  Listens to specific events that could be done by the user like mouse click or key press

/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  console.log("click!!!");
}); */

//  Button that adds new bullet points to list. It does not add empty strings
var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var buttonDelete = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for (var i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

ul.onclick = function (event) {
  var target = getEventTarget(event);
  target.classList.toggle("done");
};

//  adding new items:

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.onclick = removeParent;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + " ";
  li.appendChild(btn);

  ul.appendChild(li);

  //  Empties the box after submiting
  input.value = "";
}

function addListAfterClick() {
  //  Validation
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnter(enter) {
  //  Logs the info of the key pressed
  //   console.log(event);

  //  Validation
  if (inputLength() > 0 && event.keyCode /*event.which also works */ === 13) {
    createListElement();
  }
}

//  Click on enter
buttonEnter.addEventListener("click", addListAfterClick);

//  Press enter
input.addEventListener("keypress", addListAfterEnter);

/*
We did not use () at the end of the function calls. Heres the reason:
This is something called a callback function. 
When that line of javascript runs, we don't want the addListAfterClick 
function to run because we are just adding the event listener now to wait for 
click or keypress. We want to let it know though that we want this action to happen 
when a click happens. So the function now automatically gets run (gets added the ()) 
every time the click happens. So we are passing a reference to the function without 
running it.
*/
