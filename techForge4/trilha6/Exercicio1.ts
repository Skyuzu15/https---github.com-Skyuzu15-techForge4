class Cart {
    private items: { name: string; price: number }[] = [];

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems(): { name: string; price: number }[] {
        return this.items;
    }
}

class Payment {
    private status: string = "pending";

    processPayment(amount: number): void {
        if (amount > 0) {
            this.status = "paid";
            console.log("Pagamento processado com sucesso.");
        } else {
            console.log("O valor do pagamento é inválido.");
        }
    }

    getStatus(): string {
        return this.status;
    }
}

class Shipping {
    private status: string = "not shipped";

    updateShippingStatus(paymentStatus: string): void {
        if (paymentStatus === "paid") {
            this.status = "shipped";
            console.log("Pedido enviado.");
        } else {
            console.log("O pagamento ainda não foi processado.");
        }
    }

    getStatus(): string {
        return this.status;
    }
}

class Order {
    private cart: Cart = new Cart();
    private payment: Payment = new Payment();
    private shipping: Shipping = new Shipping();

    addItem(name: string, price: number): void {
        this.cart.addItem(name, price);
    }

    processOrder(): void {
        const totalPrice = this.cart.getTotalPrice();
        console.log(`Total do pedido: R$${totalPrice}`);
        this.payment.processPayment(totalPrice);
        this.shipping.updateShippingStatus(this.payment.getStatus());
    }
}

const pedidoRefatorado = new Order();
pedidoRefatorado.addItem("Notebook", 2500);
pedidoRefatorado.addItem("Mouse", 150);
pedidoRefatorado.processOrder();
