import rl from "readline-sync"

let num = rl.question("Informe um número: ")

let cont = 1;
while (cont <= 10) {
    console.log(`${num} X ${cont} = ${num * cont}`);
    cont++;
}