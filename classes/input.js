const fs = require('fs');
const inquirer= require('inquirer');
const path = require('path');
const util= require("util");


// employee modules
const Employee = require("./employee")

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
        message:"What is the employees id number?",
        name:'id',
    },

    //Email
    {
        type:"input",
        message:"what is the employee's email ",
        name:'email'
    },
    // not sure if i should make this section its own function?
    //  then we can prompt questions based on what this answer is?
    {
        type:"checkbox",
        message:"what is the employee's role ",
        choices: ['manager','engineer','intern'],
        name:'role'
    },
]).then(res => {
        const {name,id,email,role} =res;
        // console.log(res)
        // pushing the response into the team array
        team.push(res)
        console.log(team);
});
};

// switch statement with cases for each employee type
switch(team){
    case 'manager':
        inquirer.prompt([
            {
                type:'input',
                message:"what is your office phone number?",
                name:"Contact Number",
            }])
}

newTeamMember();