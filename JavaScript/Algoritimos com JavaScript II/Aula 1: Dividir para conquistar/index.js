const {edFolha, edGalho} = require('./arrays');

function juntarListas(listaUm, listaDois){
    let listaUnificada = [];
    let indiceAtualListaUm = 0;
    let indiceAtualListaDois = 0;
    let indiceAtualListaUnificada = 0;

    while(indiceAtualListaUm < listaUm.length && indiceAtualListaDois < listaDois.length){
        let produtoAtualListaUm = listaUm[indiceAtualListaUm];
        let produtoAtualListaDois = listaDois[indiceAtualListaDois];

        if(produtoAtualListaUm.preco < produtoAtualListaDois.preco){
            listaUnificada.push(produtoAtualListaUm);
            indiceAtualListaUm++;
        } else{
            listaUnificada.push(produtoAtualListaDois);
            indiceAtualListaDois++;

        }

        indiceAtualListaUnificada++;
    };

    while(indiceAtualListaUm < listaUm.length){
        listaUnificada.push(listaUm[indiceAtualListaUm]);
        indiceAtualListaUm++;
        indiceAtualListaUnificada++;
    };

    while(indiceAtualListaDois < listaDois.length){
        listaUnificada.push(listaDois[indiceAtualListaDois]);
        indiceAtualListaDois++;
        indiceAtualListaUnificada++;
    };

    return listaUnificada;
};

console.log(juntarListas(edFolha, edGalho));


