const prompt = require('prompt-sync')();

var color = prompt('Ingrese un color: ');

function coloingle(color) {
    switch (color.toLowerCase()) { 
        case 'azul':
            return 'blue';
        case 'rojo':
            return 'red';
        case 'verde':
            return 'green';
        case 'naranja':
            return 'orange';
        case 'amarillo':
            return 'yellow';
        default:
            return 'Color not found';
    }
}

var resultado = coloringle(color);
console.log(resultado);
