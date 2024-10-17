const prompt = require('prompt-sync')();

var anio = parseInt(prompt('Ingrese un año: '));

function bisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if (bisiesto(anio)) {
    console.log('El año ingresado es bisiesto');
} else {
    console.log('El año ingresado no es bisiesto');
}