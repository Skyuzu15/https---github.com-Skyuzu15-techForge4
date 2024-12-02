class EmailNotification {
    sendEmail(to: string, subject: string, message: string): void {
        console.log(`Enviando email para ${to}: [${subject}] ${message}`);
    }
}

class UserManager {
    private users: string[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(username: string, email: string): void {
        this.users.push(username);
        console.log(`Usuário "${username}" criado.`);
        this.emailNotification.sendEmail(email, "Bem-vindo!", "Obrigado por se registrar.");
    }
}

const emailService = new EmailNotification();
const gerenciadorRefatorado = new UserManager(emailService);
gerenciadorRefatorado.createUser("João", "joao@example.com");
