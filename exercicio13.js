let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite um número de 1 a 7 para se referir um dia da semana: ', (numeroDia) => {
    let dia = perseInt(numeroDia);

switch (dia) {
        case 1:
            console.log("Segunda");
            break;
        
        case 2:
            console.log("Terça");
            break;
        
        case 3:
            console.log("Quarta");
            break;
        
        case 4:
            console.log("Quinta");
            break;
    
        case 5:
            console.log("Sexta");
            break;   
    
        case 6:
            console.log("Sabado");
            break;
            
        case 7:
            console.log("Domingo");
            break;
            
        default:
            console.log("Não é um numero da semana");
            break;
    }

    rl.close();
});
