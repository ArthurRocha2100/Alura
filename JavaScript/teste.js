/* function teste (num){
    let digitos = (""+num).split("");
    let multiplicacaoDosDigitos = digitos.reduce((a,b) => (a*b));
    let novosDigitos = (""+multiplicacaoDosDigitos).split("");
    console.log(novosDigitos);
}

teste(54); */



/* function persistence(num) {
    let numInArray = (""+num).split("");
    let counter = 0;

    for (let i = 1; numInArray.length > 1; i++){
        newNum = numInArray.reduce((a,b) => (a*b));
        numInArray = (""+newNum).split("");
        counter = i;
    };
    console.log(counter);
};

persistence(999); */

function findOutlier(integers){
    let counterPar = 0;
    let conuterImpar = 0; 
    const listaImparPar = [];

    for(let indice = 0; indice < integers.length; indice++ ){
        if( integers[indice] % 2 === 0){
            listaImparPar.push("par");
            counterPar++
        }else{
            listaImparPar.push("impar");
            conuterImpar++
        }
    };

    if(counterPar > conuterImpar){
        indice = listaImparPar.indexOf("impar");
        console.log(integers[indice]);
    }else{
        indice = listaImparPar.indexOf("par");
        console.log(integers[indice]);
    }
};

findOutlier ([0, 1, 2]);