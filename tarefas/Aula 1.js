let valor = 13.141516;// cria uma variável.
let text= "Meu primeiro projeto em JavaScript";// cria uma variável.
let bool = true;// cria uma variável.

console.log(valor.toFixed(2)); // arredonda o valor para 2 casas decimais antes da vírgula.
console.log("Tipo:"+ typeof valor);// Retorna o tipo da variável.
console.log(text.toUpperCase());// converte o texto para maiúesculas "console.log(text.toLowerCase());" seria para deixar minúsculas.
console.log("Tipo:"+ typeof text);// Retorna o tipo da variável.
console.log(bool.toString());// Converte para texto.
console.log("Tipo:"+ typeof bool);// Retorna o tipo da variável.

let estados = ["São Paulo","Minas Gerais", "Rondônia", "Acre"];
let marcasCarros = [];
marcasCarros.push("Toyota");
console.log(estados[2]);
console.log("Tamanho: "+ estados.length); //Concatenação
console.log(marcasCarros[0]);
console.log("Total letras "+ marcasCarros[0].length);
console.log(`Estados: ${estados[1]}`); //Interpolação

let usuario; //Variavel não definida
console.log(usuario)
//console.log(usuario.length) Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'length')

let idade ;
console.log(idade + 1); // nan - not a number

let nula = null;
//console.log(nula.length) TypeError: Cannot read properties of null (reading 'length')
console.log(nula + 1);

const aula = "JavaScript";
console.log(aula);
//aula = "js"; TypeError: Assignment to constant variable.