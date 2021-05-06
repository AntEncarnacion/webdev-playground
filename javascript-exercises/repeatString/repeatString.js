const repeatString = function(str, num) {
    if(num >= 0) {
        if(num < 0) throw new Error('')
        let finalStr = '';
        for (let i = 0; i < num; i++) {
            finalStr += str;    
        }
        return finalStr;
    } else {
        return 'ERROR';
    }
    
}

module.exports = repeatString
