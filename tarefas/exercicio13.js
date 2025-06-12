import ul from 'readline-sync';

let dia = ul.questionInt("Informe um valor de 1 a 7: ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Valor invalido!");
        break;
}

/* 

node "exercicio13.js"

*/
