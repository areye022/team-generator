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

    getRole(){
        console.log(this.role);
    }
};

module.exports= Manager
