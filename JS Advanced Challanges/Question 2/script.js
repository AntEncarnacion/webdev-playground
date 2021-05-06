

const answer = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return 0;
}
debugger;
console.log(answer([1, 2, 3], 4));