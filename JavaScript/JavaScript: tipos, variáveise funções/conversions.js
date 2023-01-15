//implicit conversion
const numero = 456;
const numeroStrig = "456";

console.log(numero + numeroStrig);

//explicit conversion

//Number()
console.log( numero + Number(numeroStrig));

//String()
console.log(typeof String(numero));


//dynamic typing
let myVar = 4568;
console.log(myVar);

myVar = 'test';
console.log(myVar);