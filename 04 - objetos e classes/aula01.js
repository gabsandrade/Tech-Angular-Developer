class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}

/* Classe é a definição do objeto e a instancia é a ocorrencia do objeto */

const gabi = new Pessoa('Gabi', 19);
const renan = new Pessoa('Renan', 25);


console.log(gabi);
console.log(renan);



/*
const Gabi = {
    nome: 'Gabi',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever(); 
*/
