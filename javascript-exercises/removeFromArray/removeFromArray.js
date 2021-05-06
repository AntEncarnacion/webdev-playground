const removeFromArray = function(arr, ...args) {
    let finalArr = arr;

    for (let i = 0; i < args.length; i++) {
        if(finalArr.includes(args[i])) {
            console.log(finalArr.indexOf(args[i]));
            finalArr.splice(finalArr.indexOf(args[i]), 1);
        } 
    }
    console.log(finalArr);
    return finalArr;
}

module.exports = removeFromArray
