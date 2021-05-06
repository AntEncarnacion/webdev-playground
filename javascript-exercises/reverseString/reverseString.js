const reverseString = function(str) {
    let strArr = str.split("");
    let finalStr = '';
    
    let temp = str.split("");
    temp = temp.reverse();
    finalStr = temp.join("");
    return finalStr;
    
}

reverseString('hello there');

module.exports = reverseString
