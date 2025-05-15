
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o 1º número: ', (num1) => {

    rl.question('Digite o 2º número: ', (num2) => {
        
        rl.question('Digite qual operação vc quer (+,-,*,/): ', (operacao) => {


            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch(operacao) {
                case '+':
                    resultado = num1 + num2;
                    console.log(`${num1} + ${num2} = ${resultado}`);
                    break;
                
                case '-':
                    resultado = num1 - num2;
                    console.log(`${num1} - ${num2} = ${resultado}`);
                    break;  
                    
                case '*':
                    resultado = num1 * num2;
                    console.log(`${num1} * ${num2} = ${resultado}`);
                    break;

                case '/':
                    resultado = num1 / num2;
                    console.log(`${num1} / ${num2} = ${resultado}`);
                    break;

                default:
                    console.log("Operação incorreta!");
            }
            rl.close();
        });
    
    });
});

