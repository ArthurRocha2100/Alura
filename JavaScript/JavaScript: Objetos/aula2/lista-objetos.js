const cliente = {
    nome:"Marcos",
    idade:32,
    email:"marcos@dominio.com",
    telefone:["8500000000","9900000000"],
}

cliente.enderecos = [{
    logradouro:"Rua sem internet",
    numero: 123,
    apartamento: false,
    complemento:"***",
}]

cliente.enderecos.push({
    logradouro:"Rua sem fim",
    numero: 321,
    apartamento: true,
    complemento:"Bloco A, Apto 143",
})


const listaDeApartamentoDoCliente = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaDeApartamentoDoCliente);