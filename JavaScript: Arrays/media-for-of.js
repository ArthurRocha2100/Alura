const listaDeNotas = [10,6.5,8,7.5];

let somaDasNotas = 0;

for(let nota of listaDeNotas){
    somaDasNotas += nota;
}

const media = somaDasNotas / listaDeNotas.length;

console.log(`A média das notas inforamadas é: ${media}.`);