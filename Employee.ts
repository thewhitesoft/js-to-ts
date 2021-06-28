export default class Employee {
    private lastName: string;
    private firstName: string;

    constructor(lastName: string, firstName: string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    hello(companion) {
        return this.makeHello("mr. " + companion);
    }

    private makeHello(companion) {
        return `Hi, ${companion}. I'm ${this.lastName} ${this.firstName}`;
    }
}