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

for(let chaveDaVariavel in cliente){
    let tipo = typeof cliente[chaveDaVariavel];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`O campo ${chaveDaVariavel} tem o valor: ${cliente[chaveDaVariavel]}`);
    }
};