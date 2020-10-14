const fs = require('fs');
const path = require('path');
const util= require("util");

class Employee {
    constructor(name, id, email, role) {
        

        this.name = name;
        this.id = id;
        this.email = email;
        this.role=role;
    }
    printInfo() {
        console.log(`${this.name} is a new team-member`);
        console.log(`They're role is ${this.id}`);
        console.log(`They're email is ${this.email}`);
        console.log("------------");
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
        return this.role;
    }
};


module.exports= Employee
