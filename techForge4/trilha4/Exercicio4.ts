interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Livro A", autor: "Autor 1", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Livro B", autor: "Autor 2", disponivel: false });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis); 
