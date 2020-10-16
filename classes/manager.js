const Employee= require('./employee')

class Manager extends Employee{
    // these are the recievers; local variables
    constructor(name, email, id, officeNumber) {
        console.log("inside Manager")
        console.log(email);
        super(name, id, email)

        this.officeNumber= officeNumber;
    }

    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

};


module.exports= Manager
