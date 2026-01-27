// abstract class Notification {
//     constructor(
//         public recipient: string,
//     ) {}
//     abstract send(message: string): void;
//     abstract getType(): string;
// }
interface Notification {
    recipient: string;
    send(message: string): void;
    getType(): string;
}

class EmailNotification implements Notification {
    constructor(
        public recipient: string,
    ) {}
     send(message: string): void {
        console.log(`Sending email to ${this.recipient}: ${message}`);
    }
     getType(): string {
        return "Email";
    }
}
class SMSNotification implements Notification {
    constructor(
        public recipient: string,
    ) {}
     send(message: string): void {
        console.log(`Sending SMS to ${this.recipient}: ${message}`);
    }
     getType(): string {
        return "SMS";
    }
}
const emailNotif = new EmailNotification("user@example.com");
const smsNotif = new SMSNotification("Number12345");
emailNotif.send("Hello via Email!");
smsNotif.send("Hello via SMS!");