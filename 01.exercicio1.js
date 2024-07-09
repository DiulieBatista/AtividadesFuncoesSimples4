// 4. Crie uma função que converta a velocidade de km/h para m/s.

const ler = require('readline-sync');

function velocidadeKM() {
    let velocidade = ler.questionFloat("Digite a velocidade que deseja converter: ");

    let velocidadeConvertida = velocidade * 1000 / 3600; 

    exibir(velocidadeConvertida);
}

function exibir(velocidadeConvertida) {
    console.log("A velocidade convertida para milésimo de segundo é " + velocidadeConvertida);
}

velocidadeKM();
