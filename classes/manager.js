const Employee= require('./employee')

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role)

        this.name = name;
        this.id = id;
        this.email = email;
        this.role=role;
        this.officeNumber= officeNumber;
    }
    printInfo() {
        console.log(`${this.name} is a new team-member`);
        console.log(`They're role is ${this.id}`);
        console.log(`They're email is ${this.email}`);
        console.log("------------");
    }

    getRole(){
        console.log(this.role);
    }
};

module.exports= Manager
