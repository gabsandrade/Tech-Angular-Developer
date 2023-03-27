/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigcos da tabela a saguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- à vista débito, recebe 10% de desconto;
- à vista no dinheiro ou PIX, recebe 15% de desconto;
- em duas vezes, preço normal de etiqueta sem juros;
- acima de duas veze, preço normal de eyique com juros de 10%;
*/

const precoOriginal = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log(precoOriginal - (precoOriginal * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoOriginal - (precoOriginal* 0.15));
} else if (formaPagamento === 3) {
    console.log(precoOriginal);
} else {
    console.log(precoOriginal + (precoOriginal * 0.1));
}
