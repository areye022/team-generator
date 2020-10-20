const Employee= require('./employee')

class Engineer extends Employee{
    constructor(name, email, id, gitHub) {
        // super calls the constructor of whatever we are extending
        super(name, id, email)

        this.gitHub= gitHub;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.gitHub
    }
    
};

module.exports= Engineer;