class ContactValidator {
    validate(contact: { email: string; name: string }): boolean {
        return contact.email.includes("@") && contact.name.trim().length > 0;
    }
}

class EmailSender {
    private validator: ContactValidator;

    constructor(validator: ContactValidator) {
        this.validator = validator;
    }

    sendEmail(contact: { email: string; name: string }): void {
        if (this.validator.validate(contact)) {
            console.log(`Enviando email para ${contact.email}`);
        } else {
            console.log("Contato inválido.");
        }
    }
}

const validator = new ContactValidator();
const emailSenderRefatorado = new EmailSender(validator);
emailSenderRefatorado.sendEmail({ email: "joao@example.com", name: "João" });
emailSenderRefatorado.sendEmail({ email: "joaoexample.com", name: "" });
