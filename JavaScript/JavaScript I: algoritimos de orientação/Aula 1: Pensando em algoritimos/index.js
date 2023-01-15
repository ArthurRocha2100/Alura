const livros = require( "./listaLivrosEPrecos");


const precosDosLivros = [25,15,30,50,45,20];

let indiceMenorPreco = 0;

for(let indice = 0; indice < livros.length; indice++){
    if(livros[indice].preco < livros[indiceMenorPreco].preco){
        indiceMenorPreco = indice
    }
};

console.log(`o livro mais barato é:
${livros[indiceMenorPreco].titulo}, custando ${livros[indiceMenorPreco].preco} R$`);