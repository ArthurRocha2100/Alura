const listaLivros = require("./array");

function margeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const primeiraParte = margeSort(array.slice(0, meio));
        const segundaParte = margeSort(array.slice(meio, array.length));
        array = ordenarArray(primeiraParte, segundaParte);
    };
    return array;
};

function ordenarArray (primeiroArray, segundoArray){
    let posicaoAtualPrimeiroArray = 0;
    let posicaoAtualSegundaArray = 0;
    const arrayOrdenado = [];
    
    while(posicaoAtualPrimeiroArray < primeiroArray.length && posicaoAtualSegundaArray < segundoArray.length){
        let objetoAtualPrimeiroArray = primeiroArray[posicaoAtualPrimeiroArray];
        let objetoAtualSegundoArray = segundoArray[posicaoAtualSegundaArray];
        
        if(objetoAtualPrimeiroArray.preco < objetoAtualSegundoArray.preco){
            arrayOrdenado.push(objetoAtualPrimeiroArray);
            posicaoAtualPrimeiroArray++;
        } else{
            arrayOrdenado.push(objetoAtualSegundoArray);
            posicaoAtualSegundaArray++;
        };
        
        // arrayOrdenado.push(verificarMenorPreco(objetoAtualPrimeiroArray,objetoAtualSegundoArray));
    };
    
    return arrayOrdenado.concat(posicaoAtualPrimeiroArray < primeiroArray.length 
        ? primeiroArray.slice(posicaoAtualPrimeiroArray)
        : segundoArray.slice(posicaoAtualSegundaArray)
        );
};

// function verificarMenorPreco(primeiroObjeto, segundoObjeto){
//     if(primeiroObjeto.preco < segundoObjeto.preco){
//         return primeiroObjeto;
//     }else{
//         return segundoObjeto;
//         }
// };

console.log(margeSort(listaLivros));