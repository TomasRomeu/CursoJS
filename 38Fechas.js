
var fecha= new Date();

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();
var hour = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La Hora es: ${hour} 
`;
console.log(textoHora);

console.log(Math.ceil(Math.random()*1000000000000000));