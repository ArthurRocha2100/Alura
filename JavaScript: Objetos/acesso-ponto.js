const cliente = {
    nome:"Arthur",
    idade: 22 ,
    cpf: "12312312323" ,
    email: "arthur@meudominio.com",
};

console.log(`Olá ${cliente.nome}, seja bem vindo !!!`);
console.log(`Por favor, verifique se os três primeiros dígitos do seu cpf são: ${cliente.cpf.substring(0,3)}`);