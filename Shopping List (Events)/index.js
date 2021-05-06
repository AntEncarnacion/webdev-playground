//  Stores the selected object for ease of access
var h1 = document.querySelector("h1");

h1.className = "coolTitle";

//Shows class list
//document.querySelector("li").classList;

//  Adds and removes classes from selector
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");

//  Toggles class on and off
document.querySelector("li").classList.toggle("done");
document.querySelector("li").classList.toggle("done");

//  DANGEROUS!!!!
//document.querySelector("h1").innerHTML = "<strong>!!!!!!!!!</strong>";

//  Gives you teh second li
document.querySelectorAll("li")[1];

//  Selects the parent of li[1] whichj is ul
document.querySelectorAll("li")[1].parentElement;

//  Gives you the body element
document.querySelectorAll("li")[1].parentElement.parentElement;

//  VERY IMPORTANT TO CACHE SELECCTORS IN VARIABLES LIKE AT THE BEGGINING
var li = document.querySelector("li");
