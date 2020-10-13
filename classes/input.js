const fs = require('fs');
const inquirer= require('inquirer');
const path = require('path');
const util= require("util");


// employee modules
const employee = require("./employee.html")

// to store employee inputs
let team = [];

const newTeamMember = (name, id, email) => {
inquirer.prompt([
    //Name
    {
        type:'input',
        message:"What is the new employee's name?",
        name:'name',
    },

    //ID
    {
        type:"input",
        message:"What role will the employee have?",
        name:'id',
        choices: ['manager', 'engineer', 'intern'],
    },

    //Email
    {
        type:"input",
        message:"what is the employee's email ",
        name:'email'
    },
]).then(res => {
        const {name,id,email} =res;
        console.log(res)
});
};