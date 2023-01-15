const cliente = {
    nome:"Marcos",
    idade:32,
    email:"marcos@dominio.com",
    telefone:["8500000000","9900000000"],
};

cliente.enderecos = [
    {
        logradouro:"Rua sem internet",
        numero: 123,
        apartamento: false,
        complemento:"***",
    },
];

function ligaParaCliente (telefonePessoal, telefoneComercial){
    console.log(`ligando para: ${telefonePessoal}`);
    console.log(`ligando para: ${telefoneComercial}`);
};

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);