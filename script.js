const inputNumberElement = document.getElementById('inputNumber');
const inputBaseElement = document.getElementById('inputBase');
const inputTextareaElement = document.getElementById('inputTextarea');

const outputBaseElement = document.getElementById('outputBase');
const outputTextareaElement = document.getElementById('outputTextarea');

const swapButton = document.getElementById('swapButton');
const submitButton = document.getElementById('submitButton');

swapButton.addEventListener('click', () => {
    const inputBaseValue = inputBaseElement.value;
    inputBaseElement.value = outputBaseElement.value;
    outputBaseElement.value = inputBaseValue;
});

submitButton.addEventListener('click', () => {
    const inputNumber = inputNumberElement.value;
    const inputBase = inputBaseElement.value;
    const outputBase = outputBaseElement.value;
    
    const decimalNumber = parseInt(inputNumber, getBaseValue(inputBase));
    const outputNumber = decimalNumber.toString(getBaseValue(outputBase));

    outputTextareaElement.value = outputNumber;
});

function getBaseValue(base) {
    switch (base) {
        case 'decimal': return 10;
        case 'hexadecimal': return 16;
        case 'octal': return 8;
        case 'binary': return 2;
        default: return 10;
    }
}
