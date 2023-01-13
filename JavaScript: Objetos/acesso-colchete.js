const cliente = {
    nome:"Arthur",
    idade: 22 ,
    cpf: "12312312323" ,
    email: "arthur@meudominio.com",
};

const chaves = ["nome","idade","cpf","email"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});