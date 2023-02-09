const listaLivros = require("./array");
const trocarObjetoDePosicaoNoArray = require ("./enconrarMenoresValores");

function quickSort(array, esquerda, direita) {
    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);

        if(esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1)
        }
        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    };

    // return array
};

function particiona(array, esquerda, direita) {   
    let pivo = array[Math.floor((esquerda + direita) / 2)]; //5
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    console.log('esquerda / direita / pivo', esquerda, direita,pivo);
    console.log(array);

    while( atualEsquerda <= atualDireita){
        
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        };

        while(array[atualDireita].preco > pivo.preco) {
            atualDireita--
        };

        if(atualEsquerda <= atualDireita) {
            trocarObjetoDePosicaoNoArray(array,  atualDireita, atualEsquerda);
            atualEsquerda++;
            atualDireita--;
            
        };
    };

    return atualEsquerda;
};

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));