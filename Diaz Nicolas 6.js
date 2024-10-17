const prompt = require('prompt-sync')();
var angulo1 = parseFloat(prompt('Ingrese el primer ángulo del triángulo :'));
var angulo2 = parseFloat(prompt('Ingrese el segundo ángulo del triángulo: '));
var angulo3 = parseFloat(prompt('Ingrese el tercer ángulo del triángulo: '));

function tvalido(a1, a2, a3) {
    return (a1 + a2 + a3) === 180;
}

if (tvalido(angulo1, angulo2, angulo3)) {
    console.log('El triángulo es válido');
} else {
    console.log('El triángulo no es válido');
}
