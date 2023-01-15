const listaDeClientes = require("./clientes.json");

function ordenarLista (lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }else if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    });

    return resultado;
};

const ordenacaoPorNome = ordenarLista(listaDeClientes,"nome");

console.log(ordenacaoPorNome);