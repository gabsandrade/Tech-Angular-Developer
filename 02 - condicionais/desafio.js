//Faça um porgrama para calcular o valor de uma viagem.

//Você terá 5 variáveis. Sendo elas:
//1 - Preço etanol;
//2 - Preço gasolina;
//3 - O tipo de de combustivel que está no seu carro;
//4 - Gasto médio de combustivel do carro por KM;
//5 - Distancia em KM da viagem;

//Imprima no console o valor que será gasto para atualizar esta viagem.


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}




