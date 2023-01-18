const livros = require( "./listaLivrosEPrecos");


function selecionarMenorValor(listaProdutos, indiceInicial){
    let indiceMenorPreco = indiceInicial;
    
    for(let indice = indiceInicial; indice < listaProdutos.length; indice++){
        if(listaProdutos[indice].preco < listaProdutos[indiceMenorPreco].preco){
            indiceMenorPreco = indice
        }
    };

    return indiceMenorPreco;
};

// console.log(`o livro mais barato é:
// ${livros[indiceMenorPreco].titulo}, custando ${livros[indiceMenorPreco].preco} R$`);

module.exports = selecionarMenorValor;