const precoCombustivel = 5.79;
const  kmPorLitros = 10;
const distanciaKm = 100;

var litroConsumido = distanciaKm / kmPorLitros;
var valorGasto = kmPorLitros * precoCombustivel;
console.log(valorGasto.toFixed(2));



