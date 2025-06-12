import rl from "readline-sync"

for (let i = 1; i <= 10; i++) {
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o Salário de ${nome}: `);
    let ir = 0;
    if (salario <= 2100){
        ir = 0
    } else if (salario <= 2800) {
        ir = salario * 0.075;
    } else if(salario <= 3750){
        ir = salario * 0.15;
    } else if(salario <= 4660){
        ir = salario * 0.225;
    } else {
        ir = salario * 0.275;
    }
    console.log(`\n---Imposto de Renda Devido---`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${ir.toFixed(1)}\n`);
}