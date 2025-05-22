import ul from 'readline-sync';

let aluno = ul.question("Digite quantos alunos a nsta turma: ")
let bimestre = 1;
let cnt =1;
let alunocnt =0
let mdaluno = 0;
let medturma = 0;

while (cnt <= aluno) {
    while (bimestre <= 4){
        let all = ul.question(`Qual nots dp ${cnt}º aluno no ${bimestre}º bimestre: `);
        cnt += all;
        bimestre++ ;   
    }
    console.log(`A media do ${cnt}º aluno, é de: ${mdaluno/4}`);
    medturma += mdaluno;
    mdaluno = 0;
    bimestre = 1;
}