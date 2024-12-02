abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            console.log(`Filme "${item}" adicionado aos favoritos.`);
        } else {
            console.log(`Filme "${item}" já está nos favoritos.`);
        }
    }

    getFavorites(): string[] {
        return this.favorites.sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item);
            console.log(`Livro "${item}" adicionado aos favoritos.`);
        } else {
            console.log(`Livro "${item}" já está nos favoritos.`);
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Inception");
filmes.addFavorite("Interstellar");
filmes.addFavorite("Inception");
console.log(filmes.getFavorites());

const livros = new BooksFavoriteManager();
livros.addFavorite("1984");
livros.addFavorite("Admirável Mundo Novo");
console.log(livros.getFavorites());
