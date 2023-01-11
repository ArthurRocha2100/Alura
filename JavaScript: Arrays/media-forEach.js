const listaDeNotas = [10,6.5,8,7.5];
let somaDasNotas = 0;

listaDeNotas.forEach(function(nota){
    somaDasNotas += nota;
});

const media = somaDasNotas / listaDeNotas.length;

console.log(`A média das notas inforamadas é: ${media}.`);