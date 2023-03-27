function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;

}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Gabrielly') + ' e sou maior de idade');
    } else {
        console.log(escrevaMeuNome('Gabrielly') + ' e sou menor de idade');
    }
}

verificarIdade(15);  