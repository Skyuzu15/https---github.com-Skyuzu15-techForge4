
class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): void {
        console.log('Compromissos:');
        this.compromissos.forEach(compromisso => console.log(compromisso));
    }
}