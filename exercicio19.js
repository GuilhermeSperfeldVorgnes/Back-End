import rl from "readline-sync"

const numAleatorio = Math.floor(Math.random()*100)+1;

let tentativa;

do {
    tentativa = rl.question("Tente adivinhar o número (entra 1 e 100): ");
    if (tentativa === numAleatorio) {
        console.log("Parabéns! Você adiinhou o número.")
    } else if (tentativa < numAleatorio) {
        console.log("Tente um numero maior.");

    }else{
        console.log("Tente um numero menor.")
    }
} while (tentativa !== numAleatorio);