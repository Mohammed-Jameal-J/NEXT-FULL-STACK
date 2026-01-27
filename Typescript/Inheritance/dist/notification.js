"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailNotification {
    recipient;
    constructor(recipient) {
        this.recipient = recipient;
    }
    send(message) {
        console.log(`Sending email to ${this.recipient}: ${message}`);
    }
    getType() {
        return "Email";
    }
}
class SMSNotification {
    recipient;
    constructor(recipient) {
        this.recipient = recipient;
    }
    send(message) {
        console.log(`Sending SMS to ${this.recipient}: ${message}`);
    }
    getType() {
        return "SMS";
    }
}
const emailNotif = new EmailNotification("user@example.com");
const smsNotif = new SMSNotification("Number12345");
emailNotif.send("Hello via Email!");
smsNotif.send("Hello via SMS!");
//# sourceMappingURL=notification.js.map