// Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log("Auuuu!");
    }
}

let husky = new Cachorro('Husky', 4, 'Cinza');

husky.uivar();