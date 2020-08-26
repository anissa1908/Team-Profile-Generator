const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];
const render = require("./lib/htmlRenderer");

// fs.writeFile(outputPath, render(team), err=> console.log(err||"success!"))
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const mainPrompt = {
    type: "list",
    message: "What is your role with the company?",
    name: "role",
    choices: ['manager', 'engineer', 'intern']
};

const empPrompt = [
     {
            type: "input",
            message: "What is your name?",
            name: "name"
        }, {
            type: "input",
            message: "What is your Employee ID?",
            name: "id"
        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
    ]

const customPrompt = {
    manager: {
        message: "What is your office number?",
        name: "officeNumber"
    },
    engineer: {
        message: "What is your github?",
        name: "github"
    },
    intern: {
        message: "What school did you attend?",
        name: "school"
    }
}

const classes = {
    manager: Manager,
    engineer: Engineer,
    intern: Intern
}

function promptUser() {
    inquirer.prompt(mainPrompt)
    .then(function({role}){
        const fullPrompt = [...empPrompt, customPrompt[role]]
       inquirer.prompt(fullPrompt)
       .then(function(emp){
           const Emp = classes[role];
           const employee = new Emp(emp.name,emp.id,emp.email, emp.github || emp.school || emp.officeNumber);
           console.log("your instantiated employee ",employee);
           team.push(employee)
       })

    })
    //  inquirer.prompt([

    //     {
    //         type: "input",
    //         message: "What is your office phone number?",
    //         name: "OfficeNumber"
    //     },

    //     {
    //         type: "input",
    //         message: "What is your Github username?",
    //         name: "github"
    //     },
    //     {
    //         type: "input",
    //         message: "What school do you attend?",
    //         name: "school"
    //     }
    // ])
}
promptUser()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// function render(name, id, email, role, github, school){
//     this.name = name;
//     this.id = id;
//     this.email = email; 
//     this.role = role; 
//     this.github = username;
//     this.school = school;
// }

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
