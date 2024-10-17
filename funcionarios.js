function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá"); //aqui vai dá um console.log em todos que são this.nome nesse caso
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    this.dizSalario = function() {
        console.log(this.salario);
    }
}
//aqui vou criar a função construtora
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    //aqui vou chamar a função erança, e tem que chamar a pessoa la em cima nesse caso primeiro
    Pessoa.call(this, nome); //call significa chamar, é por isso que se fala chamar a função porque literalmente chama a função

}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();

