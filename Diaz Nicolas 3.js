const prompt = require('prompt-sync')();

var pal1 = prompt('Primer palabra: ');
var pal2 = prompt('Segunda palabra: ');

var igual = pal1 === pal2;
var longitud = pal1.length === pal2.length;

console.log('Las palabras son iguales: ', igual);
console.log('Es mas larga: ', longitud);