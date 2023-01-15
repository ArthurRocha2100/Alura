const listaDeClientes = require("./clientes.json");

function encontrarClente (lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
};

const clienteEncontrado = encontrarClente(listaDeClientes, "telefone", "19918820860");

console.log(clienteEncontrado);