const fs = require('fs');
const path = require('path');
const util= require("util");

class Employee {
    constructor(name, id, email) {

        console.log("inside employee");
        console.log(name);
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "employee";
    }
};


module.exports= Employee
