const livros = require("../Aula 1: Pensando em algoritimos/listaLivrosEPrecos");

function insertionSort (lista){

    for (let indice = 0; indice < lista.length; indice++ ){
        let objetoAtual = indice;
        while (objetoAtual > 0 && lista[objetoAtual].preco < lista[objetoAtual - 1].preco){
            let itemAtual = livros[objetoAtual];
            let itemAnterior = livros[objetoAtual - 1];
            livros[objetoAtual] = itemAnterior;
            livros[objetoAtual - 1] = itemAtual;
            objetoAtual--
        };
    };

    console.log(lista);
};

insertionSort(livros);
