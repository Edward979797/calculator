const display = document.querySelector('.display');

const digit = document.querySelectorAll('.digit-row button');
digit.forEach(d => {
    d.addEventListener('click', (e) => {
        if (display.innerText.length > 13) {
            window.alert('Exceeded maximum calculator display');
            display.innerText = '0';
        } else if (display.innerText === '0') {
            display.innerText = e.target.innerText;
        } else if (display.innerText.charAt(display.innerText.length - 1).match(/[0123456789.]/)) {
            display.innerText += e.target.innerText;
        } else {
            display.innerText += ` ${e.target.innerText}`;
        }
    });
});

const operator = document.querySelectorAll('.operator-section button');
operator.forEach(o => {
    o.addEventListener('click', (e) => {
        if (display.innerText.length > 13) {
            window.alert('Exceeded maximum calculator display');
            display.innerText = '0';
        } else if (display.innerText.charAt(display.innerText.length - 1).match(/[0123456789.]/)) {
            display.innerText += ` ${e.target.innerText}`;
        }
    });
});

const clear = document.querySelector('#clear-button');
clear.addEventListener('click', () => {
    display.innerText = '0';
});



const equals = document.querySelector('#equals-button');
equals.addEventListener('click', () => {
    if (display.innerText.charAt(display.innerText.length - 1).match(/[0123456789]/)) {

        const expression = display.innerText.split(' ');

        let numOfOperators = 0;

    

        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '+' || expression[i] === '-' || expression[i] === 'x' || expression[i] === '÷') {
                numOfOperators++;
            }
        }

        for (let i = 0; i < numOfOperators; i++) {
            if (expression.includes('÷')) {
                operate(Number(expression[expression.indexOf('÷') - 1]), Number(expression[expression.indexOf('÷') + 1]), expression[expression.indexOf('÷')]);
            } else if (expression.includes('x')) {
                operate(Number(expression[expression.indexOf('x') - 1]), Number(expression[expression.indexOf('x') + 1]), expression[expression.indexOf('x')]);
            } else if (expression.includes('-')) {
                operate(Number(expression[expression.indexOf('-') - 1]), Number(expression[expression.indexOf('-') + 1]), expression[expression.indexOf('-')]);
            } else if (expression.includes('+')) {
                operate(Number(expression[expression.indexOf('+') - 1]), Number(expression[expression.indexOf('+') + 1]), expression[expression.indexOf('+')]);
            }
        }
    } else {
        const expression = display.innerText.split(' ');
        expression.pop();

        let numOfOperators = 0;

    

        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '+' || expression[i] === '-' || expression[i] === 'x' || expression[i] === '÷') {
                numOfOperators++;
            }
        }


        for (let i = 0; i < numOfOperators; i++) {
            if (expression.includes('÷')) {
                operate(Number(expression[expression.indexOf('÷') - 1]), Number(expression[expression.indexOf('÷') + 1]), expression[expression.indexOf('÷')]);
            } else if (expression.includes('x')) {
                operate(Number(expression[expression.indexOf('x') - 1]), Number(expression[expression.indexOf('x') + 1]), expression[expression.indexOf('x')]);
            } else if (expression.includes('-')) {
                operate(Number(expression[expression.indexOf('-') - 1]), Number(expression[expression.indexOf('-') + 1]), expression[expression.indexOf('-')]);
            } else if (expression.includes('+')) {
                operate(Number(expression[expression.indexOf('+') - 1]), Number(expression[expression.indexOf('+') + 1]), expression[expression.indexOf('+')]);
            }
        }
    }

})





function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            display.innerText = display.innerText.replace(`${num1} ${operator} ${num2}`, (num1 + num2).toString());
            break;
        case '-':
            display.innerText = display.innerText.replace(`${num1} ${operator} ${num2}`, (num1 - num2).toString());
            break;
        case 'x':
            display.innerText = display.innerText.replace(`${num1} ${operator} ${num2}`, (num1 * num2).toString());
            break;
        case '÷':
            display.innerText = display.innerText.replace(`${num1} ${operator} ${num2}`, (num1 / num2).toString());
            break;
    }

    
}