const prompt = require('prompt-sync')();

var nume1 = parseFloat(prompt('Ingrese el primer numero: '));
var nume2 = parseFloat(prompt('Ingrese el segundo numero: '));

function mayornum(num1, num2) {
    if (num1 > num2) {
        console.log('El numero mayor es: ' + num1);
    } else if (num2 > num1) {
        console.log('El numero mayor es: ' + num2);
    } else {
        console.log('Los numeros son iguales');
    }
}

mayornum(nume1, nume2);