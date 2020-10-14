const fs = require('fs');
const inquirer= require('inquirer');
const path = require('path');
const util= require("util");

// maybe move everything from input.js to employee.js? that way the classes actually work together??
// employee modules; still dont understand why we need these if we are promting questions through inputs.js
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");


// to store employee inputs
let team = [];

const roleMember =() =>{
    inquirer.prompt([
    {
        type:"checkbox",
        message:"what is the employee's role ",
        choices: ['manager','engineer','intern'],
        name:'role'
    },
]).then(response => {
        const {role} =response;
    console.log(response);
    team.push(response)
// able to push the role into the team array, however now it it not within the same object as 
// the following teamMember info. Also, i keep getting error on my if statement
    if(team[0].role==='manager'){
        console.log('success');
    }else{
        // keep getting error message so this if statement is not functioning properly
        console.log('error');
    }

    newTeamMember(role)
});
}

roleMember();

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
    // {
    //     type:"checkbox",
    //     message:"what is the employee's role ",
    //     choices: ['manager','engineer','intern'],
    //     name:'role'
    // },
]).then(res => {
        const {name,id,email,role} =res;
        // console.log(res)
        // pushing the response into the team array
        team.push(res)
        console.log(team);
});
};

// switch statement with cases for each employee type
switch(team) {
    case 'manager':
        if (role ==='manager'){
            inquirer.prompt([
                {
                    type:'input',
                    message:"what is your office phone number?",
                    name:"Contact Number",
                }])
        }
        // inquirer.prompt([
        //     {
        //         type:'input',
        //         message:"what is your office phone number?",
        //         name:"Contact Number",
        //     }])
}

// newTeamMember();
