interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[] = [];

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Celular" });
loja.adicionarProduto({ codigo: 2, nome: "TV" });

const produtoEncontrado = loja.buscarProdutoPorCodigo(1);
console.log(produtoEncontrado); 
