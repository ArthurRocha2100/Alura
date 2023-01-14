// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro: Endereço não cadastrado");
};