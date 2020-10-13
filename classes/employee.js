const fs = require('fs');
const inquirer= require('inquirer');
const path = require('path');
const util= require("util");

const input= require('./input')

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
        console.log(this.name);
    }
    getId(){
        console.log(this.id);
    }
    getEmail(){
        console.log(this.email);
    }
    getRole(){
        console.log(this.role);
    }
};

module.exports= Employee
