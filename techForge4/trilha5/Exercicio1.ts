abstract class TaskManager {
    protected tasks: Set<string> = new Set();

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada ao projeto.`);
        } else {
            console.log(`Tarefa "${task}" já existe no projeto.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa diária "${task}" adicionada.`);
        } else {
            console.log(`Tarefa diária "${task}" já existe.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

const projeto = new Project();
projeto.addTask("Finalizar relatório");
projeto.addTask("Revisar código");
projeto.addTask("Finalizar relatório");
console.log(projeto.listTasks());

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Lavar louça");
tarefasDiarias.addTask("Ler um capítulo de livro");
tarefasDiarias.addTask("Lavar louça");
console.log(tarefasDiarias.listTasks());
