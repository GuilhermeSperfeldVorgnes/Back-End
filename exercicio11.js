class Imovel {
    constructor(quartos,tipo,endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;

    }
    exibirInformacoes() {
        return `uma pessoa mora numa ${this.tipo} no endereço ${this.endereco} e dentor da moradia tem ${this.quartos} de quartos`

    }
}

let moradia1 = new moradia(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
let moradia2 = new moradia(2, "Apartamento", "Avenida da Paz, 123 - Centro");


