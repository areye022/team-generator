class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the strength.");
        }
        if (!email) {
            throw new Error("You are missing the hitPoints.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }
    printInfo() {
        console.log(`${this.name} is a new team-member`);
        console.log(`They're role is ${this.id}`);
        console.log(`They're email is ${this.email}`);
        console.log("------------");
    }
};