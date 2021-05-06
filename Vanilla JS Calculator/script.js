let expression = '';
const display = document.getElementById('display');

document.addEventListener('keydown', onKeyPress);

function onKeyPress(e) {
    let key = e.key;
    if (!isNaN(key) || (key === '+') || (key === '-') || (key === '*') || (key === '/') || (key === '.') || (key === '=')) {
        onButtonPress(key);
    } else if(key === 'Enter') {
        onButtonPress('=');
    }
}

function onButtonPress(key) {
    if((key === '=') && (expression.length > 0)) {
        if(isNaN(expression[expression.length - 1])) {
            expression = expression.slice(0, -1);
            expression = eval(expression).toString();
            display.value = expression;
        } else {
            expression = eval(expression).toString();
            display.value = expression;
        }
    } else {
        switch(true) {
            case (key === '+') && (expression.length > 0) && !isNaN(expression[expression.length - 1]):
            case (key === '-'):
            case (key === '*') && (expression.length > 0) && !isNaN(expression[expression.length - 1]):
            case (key === '/') && (expression.length > 0) && !isNaN(expression[expression.length - 1]):
            case !isNaN(key) || (key === '.'):
                expression += key;
                display.value = expression;
                break;
            default:
                break;
        } 
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

