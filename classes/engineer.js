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

    getGitHub(){
        console.log(this.gitHub)
    }
    getRole(){
        console.log(this.role);
    }
};

module.exports= Engineer;