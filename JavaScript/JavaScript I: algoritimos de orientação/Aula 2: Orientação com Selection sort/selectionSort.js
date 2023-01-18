const livros = require ("../Aula 1: Pensando em algoritimos/listaLivrosEPrecos");
const menorValor = require ("../Aula 1: Pensando em algoritimos/menorValor");

console.log(livros);

for (let atual = 0; atual<livros.length; atual++){

  let menor =  menorValor(livros,atual);

  let livroAtual = livros[atual];
  console.log('Posição atual:',atual);
  console.log('Livro atual:', livros[atual]);
  
  let livroMenorPreco = livros[menor];
  console.log('Livro com menor preço:', livros[menor]);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
};

console.log(livros);