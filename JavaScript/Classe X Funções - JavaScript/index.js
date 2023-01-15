console.log("");
console.log("-------------------------------------------------------");
console.log("");

const livro = {
    titulo: "livro legal",
    editora: "Bom de ler",
    quantidadeDePaginas: 154,
    anunciar: function() {
        console.log(`"${this.titulo}" é um livro publidade pela editora "${this.editora}" 
        contendo ${this.quantidadeDePaginas} páginas.`);
    }
};

livro.anunciar();

console.log("");
console.log("-------------------------------------------------------");
console.log("");

/* Por se tratar de um objeto, não é possível criar novos novos "livros" com outros parâmetros.
por conta disso se faz necessário a criação de funções. Segue o exemplo */

const criarLivro = function (titulo, editora, paginas){
    novoTitulo = titulo,
    novoEditora = editora,
    novoPaginas = paginas
    
    this.getNome = function(){
        return novoTitulo;
    };
    this.getEditora = function(){
        return novoEditora;
    };
    this.getPaginas = function(){
        return novoPaginas;
    };
};

const novoLivro = new criarLivro("livro mais legal", "melhor de ler", 199);

console.log(`"${novoLivro.getNome()}" é um livro da editora "${novoLivro.getEditora()}"
contendo ${novoLivro.getPaginas()} páginas.`);

console.log("");
console.log("-------------------------------------------------------");
console.log("");

/* A partir da versão ES2015 foi implemnetado a possibidade de criação de classes, segue exemplo: */

class criarLivroDois {
    constructor(titulo, editora, paginas) {
            this.novoTitulo = titulo,
            this.novoEditora = editora,
            this.novoPaginas = paginas
        }

        getNome(){
            return this.novoTitulo;
        };
        getEditora() {
            return this.novoEditora;
        };
        getPaginas() {
            return this.novoPaginas;
        };
};

const outroLivro = new criarLivroDois("JavaScript","daculá",999)

console.log(`"${outroLivro.getNome()}" é um livro da editora "${outroLivro.getEditora()}"
contendo ${outroLivro.getPaginas()} páginas.`);

console.log("");
console.log("-------------------------------------------------------");
console.log("");



/* Herança */


class capaDolivro extends criarLivroDois{
    constructor(titulo, subtitulo){
        super(titulo);
        this.subtitulo = subtitulo;
    };

    tituloCompleto(){
        console.log(`${this.novoTitulo}
        ${this.subtitulo}`);
    } 
};


const livroManeiro = new capaDolivro("livro Maneiro","Um livro sobre pessoas legais");


livroManeiro.tituloCompleto();

console.log("");
console.log("-------------------------------------------------------");
console.log("");