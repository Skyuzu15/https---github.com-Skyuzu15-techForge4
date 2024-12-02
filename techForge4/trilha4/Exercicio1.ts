interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number
    ) {}
}

const produto = new ItemLoja(1, "Notebook", 2500);
console.log(produto);
