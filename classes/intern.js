const Employee= require('./employee')

class Intern extends Employee{
    constructor(name, id, email, role, school) {
        super(name, id, email, role, school)

        this.name = name;
        this.id = id;
        this.email = email;
        this.role=role;
        this.school=school;
    }
    printInfo() {
        console.log(`${this.name} is a new team-member`);
        console.log(`They're role is ${this.id}`);
        console.log(`They're email is ${this.email}`);
        console.log("------------");
    }

    getSchool(){
        console.log(this.school);
    }
    getRole(){
        console.log(this.role);
    }
};

module.exports= Intern