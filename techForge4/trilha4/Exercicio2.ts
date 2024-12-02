interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    constructor(
        public titulo: string,
        public conteudo: string
    ) {}

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const documento = new Texto("Meu Primeiro Texto", "Este é o conteúdo do texto.");
console.log(documento.exibir());
