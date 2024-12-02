class Animal {
    private energia: number = 100;

    comer(quantidade: number): void {
        this.energia += quantidade;
    }

    gastarEnergia(quantidade: number): void {
        this.energia -= quantidade;
    }

    statusEnergia(): void {
        console.log(`Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("Leão caçando...");
        this.gastarEnergia(20); 
        super.comer(30);        
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("Pássaro se alimentando...");
        super.comer(10);
    }
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();
