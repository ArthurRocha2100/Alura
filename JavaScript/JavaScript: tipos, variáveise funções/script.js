//var (pode ser utilizado, desde que declarado no código, e pode ter seu valor alterado)
var altura = 2;
var comprimento = 7;
var area = altura * comprimento;
console.log(area);

//let (precisa ser declarada antes de usar e pode ter seu valor alterado)
let forma2 = 'triângulo'
let altura2 = 2;
let comprimento2 = 5;
let area2;

if (forma === 'retângulo'){
    area2 = altura * comprimento;
} else {
    area2 = (altura  * comprimento)/2;
}

console.log(area2)

//const (precisa ser declarada antes de usar e não pode ter seu valor alterado)
const forma3 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;
let area3 = null;

if (forma === 'quadrado'){
    area3 = altura * comprimento;
} else {
    area3 = (altura * comprimento)/2;
}

console.log(area3);