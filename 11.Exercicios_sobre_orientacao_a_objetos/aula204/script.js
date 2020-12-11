// Crie um objeto que simula um endereço de um cliente 

// Propriedades: Rua, Bairro, Cidade e Estado 

// No construtor o endereço já deve ser definido por completo 

// Crie métodos para atualizar todas as propriedades

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }


    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}


let endereco = new Endereco("Rua das Gaivotas", "Terrario", "São Joaquim", "SC");

console.log(endereco);

endereco.novaRua = "Rua Cordeirópolis";
endereco.bairro = "Jardim São Paulo";
endereco.cidade = "Suzano";
endereco.estado = "São Paulo";