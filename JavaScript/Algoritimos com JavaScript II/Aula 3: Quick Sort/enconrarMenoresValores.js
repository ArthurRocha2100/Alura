const listaLivros = require("./array");

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    selecionarMenoresValores(pivo, array);
    let valoreMenores = 0;

    for(indiceEmAnalise = 0; indiceEmAnalise < array.length; indiceEmAnalise++) {
        let atual = array[indiceEmAnalise];

        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocarObjetoDePosicaoNoArray(array, indiceEmAnalise, valoreMenores);
            valoreMenores++
        };
    };
    
    return array;
};

function selecionarMenoresValores(pivo, array) {
    let menorValor = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco){
            menorValor++
        };
    };

    trocarObjetoDePosicaoNoArray(array, array.indexOf(pivo), menorValor);
    return array;
};

function trocarObjetoDePosicaoNoArray(array, posicaoOriginal, posicaoDeDestino) {
    const elementoUm = array[posicaoOriginal];
    const elementoDois = array[posicaoDeDestino];

    array[posicaoOriginal] = elementoDois;
    array[posicaoDeDestino] = elementoUm;
};

// console.log(divideNoPivo(listaLivros));

// console.log(selecionarMenoresValores(listaLivros[2],listaLivros));

module.exports = trocarObjetoDePosicaoNoArray;