
// parseFloat converts the string to a floating-point number


function calculate(operator) {
    const num1 = parseInt(document.querySelector('.num1').value);
    const num2 = parseInt(document.querySelector('.num2').value);

    let result = "Invalid Input";

    if(!isNaN(num1) && !isNaN(num2)) {
        if(operator === '+') result = num1 + num2;
        if(operator === '-') result = num1 - num2;
        if(operator === '*') result = num1 * num2;
        if(operator === '/') result = num1 / num2;

     
    const re = document.querySelector('#result');
    re.innerText += result;


    }
}




