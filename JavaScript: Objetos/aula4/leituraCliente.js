const cliente = require("./cliente.json");

console.log(cliente);
console.log(typeof cliente);
console.log("--------------------------------------------");
const clienteEmString = JSON.stringify(cliente);


console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log("--------------------------------------------");
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
console.log(typeof objetoCliente);