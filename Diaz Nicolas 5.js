const prompt = require('prompt-sync')();
var fa = parseFloat(prompt('Ingrese la temperatura en grados Fahrenheit: '));

function convertidor(f) {
    return (f - 32) * 5 / 9;
}

var cel = convertidor(fa);
console.log(fa + 'Los grados Fahrenheit son ' + cel.toFixed(2) + ' en grados Celsius');
