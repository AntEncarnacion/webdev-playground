var list = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index = 0; index < list.length; index++) {
  console.log(list[index]);
}

list.forEach(function (lis, i) {
  console.log(lis, i);
});

function logList(lis, i) {
  console.log(list, i);
}

list.forEach(logList);

var i = 0;
while (i < Number(list.length)) {
  console.log(list[i]);
  i++;
}

var j = 0;
while (j < Number(list.length)) {
  console.log(list[j]);
  j++;
}

j = 0;
do {
  console.log(list[j]);
  j++;
} while (j < Number(list.length));
