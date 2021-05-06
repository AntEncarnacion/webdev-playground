var list = ["tiger", "void", "josh"];
list[1];

for (let index = 0; index < list.length; index++) {
  console.log(list[index]);
}

list.shift();
console.log(list);

list.push("Scarful");

list.pop();

console.log(list);

list.forEach(function (item, index, array) {
  console.log(item, index);
});

list = list.concat("xtyles", "eagle");

list.sort();

console.log(list);
