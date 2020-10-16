const Employee= require('./employee')

class Engineer extends Employee{
    constructor(name, email, id, gitHub) {
        // super calls the constructor of whatever we are extending
        super(name, id, email)

        this.gitHub= gitHub;
    }

    getGitHub(){
        return this.gitHub
    }
    getRole(){
        return "Engineer"
    }
};

module.exports= Engineer;