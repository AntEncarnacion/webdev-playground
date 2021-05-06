let arr = [1, 1, 1, "2", "3", 2];


const answer = (arr) => {
    const arrNum = arr.filter((T, i, num, array) => {
        if (typeof (T) === 'number') {
            return true;
        }
        return false;
    });
    const arrString = arr.filter((T, i, num, array) => {
        if (typeof (T) === 'string') {
            return true;
        }
        return false;
    });

    arrNum.sort(function (a, b) { return a - b });
    let counter = 0;
    let ans = [[]];

    arrNum.forEach((element, index, arr) => {
        if (arr[index] == arr[index + 1]) {
            counter++;
        } else if (counter > 0 && arr[index] != arr[index + 1]) {
            counter++;
            let tempArr = [];
            for (let i = 0; i < counter; i++) {
                tempArr.push(arr[index]);
            }
            ans[0].push(tempArr);
            counter = 0;
        } else {
            ans[0].push(arr[index]);
        }
    });


    ans.push(arrString);

    return ans;
}

console.log(answer(arr));
