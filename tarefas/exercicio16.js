import rl from 'readline-sync';

let salario = rl.question("Informe seu salário: ");
let cat = rl.question("Informe a categoria de bonificação: ").toUpperCase();
let bonus = 0;

switch (cat) {
    case 'A':
        bonus = salario * 0.05
        console.log(`Seu novo salario é: ${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}.`);
        break;
    case 'B':
        bonus = salario * 0.10
        console.log(`Seu novo salario é: ${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}.`);
        break;
    case 'C':
        bonus = salario * 0.15
        console.log(`Seu novo salario é: ${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}.`);
        break;
    case 'D':
        bonus = salario * 0.20
        console.log(`Seu novo salario é: ${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}.`);
        break;
    default:
        console.log('bonificação invalida!');
        break;
}