const cliente = {
    nome:"Marcos",
    idade:32,
    email:"marcos@dominio.com",
    telefone:["8500000000","9900000000"],
    saldo:150,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
            console.log(`Saldo insuficiente. Saldo atual ${this.saldo}.`);
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. Saldo atual: ${this.saldo}.`);
        }
    }
}

cliente.efetuaPagamento(200)