// require/import all the packages
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");

const teamArray = [];

// inquirer, fs

// global array variable

// functions

// 1. MAIN -> function to ask what the userwant to do -> provide choices
// create Manager, create Engineer or create Intern //// exit/finish
// conditonal statement to call another function

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What do you want to do?",

        choices: [
          "create a manager",
          "create an engineer",
          "create an intern",
          "finish application",
        ],
      },
    ])
    .then((userInput) => {
      console.log(userInput.choice);
      switch (userInput.choice) {
        case "create a manager":
          // call afunction
          createManager();
          break;
        case "create an engineer":
          // call a function
          createEngineer();
          break;
        case "create an intern":
          createIntern();
          break;

        default:
          generateHTML();
      }
    });
}

main();

// 2. creating a manager function
// ---> ask about the manager information using inquirer
// ----------> name, id, email, officeNumber
// -----> .then() --> creating a new manager using the class
//  const newManager = new Manager(....)
// pushing the newManager to your global array
// MAIN function call
function createManager() {
  console.log("creating a manager");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },

      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },

      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((userInput) => {
      const newManager = new Manager(
        userInput.managerName,
        userInput.managerId,
        userInput.managerEmail,
        userInput.managerOfficeNumber
      );
      teamArray.push(newManager);

      main();
    });
}

// 3. create engineer

function createEngineer() {
  console.log("creating an engineer");
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github?",
      },
    ])
    .then((userInput) => {
      const newEngineer = new Engineer(
        userInput.engineerName,
        userInput.engineerId,
        userInput.engineerEmail,
        userInput.engineerGithub
      );
      teamArray.push(newEngineer);

      main();
    });
}

// 4. create Intern

function createIntern() {
  console.log("creating an intern");
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },

      {
        type: "input",
        name: "internID",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
    ])
    .then((userInput) => {
      const newEngineer = new Intern(
        userInput.internName,
        userInput.internId,
        userInput.internEmail,
        userInput.internSchool
      );
      teamArray.push(newIntern);

      main();
    });
}

// 5. generateHTML function
// prepare the template
//insert the global array data into the template
// write the output to an HTML file

function generateHTML() {
  console.log(teamArray);

  function generateManagerCard(data) {
    return ` <div class="card" style="width: 18rem;">
    <div class="card-header">
      ${data.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office Number: ${data.number}</li>
    </ul>
  </div>`;
  }

  const template = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
   

      ${teamArray.map((employee) => {
        if (employee.getRole() == "Manager") {
          return generateManagerCard(employee);
        }
      })}
  </body>
</html>
`;
  console.log(template);

  // write the HTML file

  fs.writeFile("./dist/index.html", template, () => {
    console.log("html file successfully generated");
  });
}
