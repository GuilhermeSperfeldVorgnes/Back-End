import express from 'express';
const app = express();
import { efetuarCalculoIMC , retornaStatusIMC, validaParametro} from './servicos/calculadoraIMC.js';

app.get('/',(req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if(validaParametro(peso) && validaParametro(altura)){

        let imc = efetuarCalculoIMC(peso, altura);
        let status = retornaStatusIMC(imc);
    
        res.json({imc: imc, status: status})
    }else{
        res.status(400).json({Erro: 'Peso e/ou altura inválidos!'})
    }
});


app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});