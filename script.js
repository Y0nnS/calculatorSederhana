let display = document.getElementById('display');
let lastOperator = '';

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function () {
        let value = this.value;

        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLast();
        } else if (['+', '-', '*', '/'].includes(value)) {
            appendOperator(value);
        } else if (value === '=') {
            calculateResult();
        } else {
            appendValue(value);
        }
    });
});

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendOperator(operator) {
    display.value = display.value.replace(/[\+\-\*\/]$/, '') + operator;
}


function calculateResult() {
    display.value = eval(display.value) || '';
}

function appendValue(value) {
    display.value += value;
}

