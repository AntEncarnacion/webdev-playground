var uniqueInOrder = function (iterable) {
  const newArray = iterable.filter(function (current, index, array) {
    if (index === 0) {
      return true;
    } else if (array[index - 1] === array[index]) {
      return false;
    } else {
      return true;
    }
  });
  console.log(newArray);
  return newArray;
};

uniqueInOrder([1,2,3,4,5,6,7]);
