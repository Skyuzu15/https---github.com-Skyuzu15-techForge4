abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1; 
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05; 
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`Salário final: ${salarioFinal}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("João", 5000),
    new Operario("Maria", 3000)
];

calcularSalarioComBonus(funcionarios);
