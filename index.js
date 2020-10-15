const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const util = require("util");

// maybe move everything from input.js to employee.js? that way the classes actually work together??
// employee modules; still dont understand why we need these if we are promting questions through inputs.js
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");


// to store employee inputs
let team = [];

const newTeamMember = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What role do they have",
            name: "role"
        }
    ]).then(res => {
        const { role } = res;
        switch (role) {
            case "manager":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"
                    },
                    {
                        type : "input",
                        message : "What is their email",
                        name: "email"
                    },
                    {
                        type : "input",
                        message : "what is their office number",
                        name : "officeNumber"
                    }
                    ]
                ).then(res => {
                    // instantiate the new role and push to the array
                    let { name, id, role = "manager", email, officeNumber } = res
                    let newManager = new Manager(name, role,email, id, officeNumber)
                    team.push(newManager)
                })
                break
            case "intern":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",

                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"

                    },
                    {
                        type : "input",
                        message : "what is their email",
                        name : "email"
                    },
                    {
                        type : "input",
                        message : "what is their school",
                        name : "school"    
                    }
                    ]
                ).then(res => {
                    // instantiate the new role and push to the array
                    let { name, id, role = "intern", email, school } = res
                    let newIntern = new Intern(name, role, id, email, school)
                    team.push(newIntern)
                })
                break
                case "engineer":
                inquirer.prompt(
                    [{
                        type: "input",
                        message: "what is their name",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is their id",
                        name: "id"
                    },
                    {
                        type : "input",
                        message : "what is their email",
                        name : "email"
                    },
                    {
                        type : "input",
                        message : "what is their gitHub username",
                        name : "username"    
                    }
                    ]
                ).then(res => {
                    // instantiate the new role and push to the array
                    let { name, id, role = "engineer", email, username } = res
                    let newEngineer = new Engineer(name, role, id, email, usesrname)
                    team.push(newEngineer)
                })
        }
    });
};

async function init() {
    await newTeamMember();
}

init()
