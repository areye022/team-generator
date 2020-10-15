// required 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// employee modules
const Manager = require("./classes/manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const renderManager = require("./classes/htmlrenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./classes/htmlrenderer");

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
                    let newEngineer = new Engineer(name, role, id, email, username)
                    team.push(newEngineer)
                    // fs.writeFileSync(outputPath, render(team,name))
                })
        }
    });
};

async function init() {
    await newTeamMember();
}
init()

module.exports= newTeamMember
