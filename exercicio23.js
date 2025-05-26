import rl from "readline-sync"

let texto = rl.question("Informe o texto para ser convertido: ");
console.log(Maisculas(texto));
function Maisculas(valor){
    return valor.toUpeperCase();
}