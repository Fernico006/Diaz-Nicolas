const prompt = require('prompt-sync')();
var num1 = parseFloat(prompt('Ingrese un numero: '));

function divisible(num) {
    return num % 5 === 0;
}

if (divisible(num1)) {
    console.log('El numero ' + num1 + ' es divisible por 5');
} else {
    console.log('El numero' + num1 + ' no es divisible por 5');
}
