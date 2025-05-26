const pessoa = {
    nome: "Carlos Eduardo dos Santos",
    dtNacimenta: "33/03/3113",
    cpf: 99345623156,
    sexo: 'M'
}
//console.log(pessoa);
//console.log("Nome: " + pessoa.nome);
for (const key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

const cores = ["Branco", "Azul", "Verde", "Preto", "Roxo", "Amarelo"];
let valores;
for (const elemento of cores) {
    console.log(elemento);

    valores += elemento + ","; 
}
console.log(valores)