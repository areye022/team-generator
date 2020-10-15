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

    getSchool(){
        console.log(this.school);
    }
    getRole(){
        console.log(this.role);
    }
};

module.exports= Intern