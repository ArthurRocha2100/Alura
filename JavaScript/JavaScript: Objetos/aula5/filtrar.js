const listaDeClientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const listaDeClientesFiltrados = filtrarApartamentoSemComplemento(listaDeClientes);

console.log(listaDeClientesFiltrados);