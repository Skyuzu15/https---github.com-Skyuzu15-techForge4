interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

// Exemplo
const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "Aventura na Floresta", autor: "Autor A", genero: "Aventura", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "Romance Inesquecível", autor: "Autor B", genero: "Romance", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "Ficção Espacial", autor: "Autor C", genero: "Ficção", disponivel: true });

console.log(bibliotecaGestao.filtrarPorGenero("Aventura")); 
console.log(bibliotecaGestao.buscarPorAutor("Autor C")); 
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados()); 
