//tudo isso é consideredo um objeto
const carroDoJoao = {
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: '2024',
    anoFabricacao: '2024',
    //aqui vai ter uma função
    acelerar: function() {
        console.log("vruumm");
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'ford',
    anoModelo: '2023',
    anoFabricacao: '2022',
    acelerar: function() {
        console.log("vruuum");
    }

}
//notação por pponto, no caso a notação pponto é o ponto que está em baixo, que acessamos a variavel e a propriedade dentro dela


//função contrutora, o acelerar não vem pra cá porquê ele é um método que tem em todos nesse caso
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo; //o THIS faz referência ao pr´prio carro nesse caso
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

//aqui é para termos um retorno, e com o NEW é para termos um retorno, e a primeira letra tem que cer maiúscula nesse caso é a do carro
const carroDoJoao2 = new Carro("fiesta", "ford", 2024, 2024);
const carroDaMaria2 = new Carro("ka", "ford", 2024, 2024);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "Daniel"
const idade = 26
const enMaiorDeIdade = true //aqui é um bolean no caso ele retorna como verdadeiro
const conhecimentos = ["html", "css", "javaScript", "java"]

//aqui vou criar um objeto
const pessoa = {
    nome: nome,
    idade: idade,
    enMaiorDeIdade: enMaiorDeIdade,
    conhecimentos: conhecimentos,
}

//aqui vou acessar um atributo de um objeto com duas maneiras, os dois tem o mesmo retorno
console.log(pessoa.nome)//aqui é uma notação ponto.
console.log(pessoa['nome'])//e aqui é usando arrays

