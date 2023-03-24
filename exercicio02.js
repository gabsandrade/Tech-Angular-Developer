/*
O imc é um critério da Organização mundial da saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
Formula do IMC:
IMC = peso/(altura * altura)

Elabore um algoritmo que dado o peso e a altura d euma pessoa, mostre sua condição de acordo com a table abaixo.

IMC em adultos:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- entre 25 e 30 = acima do peso;
- entre 30 e 40 = obesidade;
- acima de 40 = obesidade grave;

*/
const peso = 50;
const altura = 1.65;
const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5){
    console.log('abaixo do peso');
} else if (imc >= 18.5 && imc = 25) {
    console.log('peso normal');
} else if (imc >= 25 && imc = 30) {
    console.log('acima do peso');
} else if (imc >= 30 && imc = 40) {
    console.log('obesidade');
} else {
    console.log('obesidade grave')
}

