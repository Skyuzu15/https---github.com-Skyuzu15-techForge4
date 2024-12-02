abstract class Inventory {
    protected inventory: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.inventory[item] = (this.inventory[item] || 0) + quantity;
        console.log(`${quantity} unidades de "${item}" adicionadas ao armazém.`);
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`"${item}" removido do armazém.`);
        } else {
            console.log(`"${item}" não encontrado no armazém.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const currentQuantity = this.inventory[item] || 0;
        const newQuantity = Math.min(currentQuantity + quantity, 10);
        this.inventory[item] = newQuantity;
        console.log(`"${item}" atualizado para ${newQuantity} unidades na loja.`);
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`"${item}" removido da loja.`);
        } else {
            console.log(`"${item}" não encontrado na loja.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

const armazem = new WarehouseInventory();
armazem.addItem("Notebook", 50);
armazem.addItem("Teclado", 30);
armazem.removeItem("Teclado");
console.log(armazem.getInventory());

const loja = new StoreInventory();
loja.addItem("Mouse", 5);
loja.addItem("Mouse", 8);
console.log(loja.getInventory());
