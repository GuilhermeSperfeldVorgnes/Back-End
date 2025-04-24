class Veiculo {
    constructor(marca,modelo,ano, tipo) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.tipo = tipo
    }

    exibirDetalhes() {
        return `foi mandado para um mecanico consertar ${this.tipo} o veiculo foi lançado a venda em ${this.ano} mais pára conserta ele vai presisar das pessas do original que é ${this.modelo} `
    }
}

let veiculo1 = new veiculo("Toyota", "Corolla", 2022, 'Carro') 
let veiculo2 = new veiculo("Honda", "CBR 600RR", 2021, 'Motocicleta')