const Employee= require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role, gitHub)

        this.name = name;
        this.id = id;
        this.email = email;
        this.role=role;
        this.gitHub= gitHub;
    }
    printInfo() {
        console.log(`${this.name} is a new team-member`);
        console.log(`They're role is ${this.id}`);
        console.log(`They're email is ${this.email}`);
        console.log("------------");
    }

    getGitHub(){
        console.log(this.gitHub)
    }
    getRole(){
        console.log(this.role);
    }
};

module.exports= Engineer;