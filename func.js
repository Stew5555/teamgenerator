//node
const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./codeStyle/index");
//lib files
const Engineer = require("./lib/engineer");
const Intern = require("./lib//intern");
const Manger = require("./lib/manager");


const newEmployeeInfo = [];

//questtions for users
const questions = async () => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your ID number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
        },
        {
          type: "list",
          message: "What is your role?",
          name: "role",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
  
  
      
            //  console.log(answers);
             // if manager selected, answer these specific question
            if (answers.role === "Manager") {
            const managerAnsewrs = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your office number",
                name: "officeNumber",
              },
            ])
            const newManger = new Manger(
                answers.name,
                answers.id,
                answers.email,
                managerAnsewrs.officeNumber
            )
            newEmployeeInfo.push(newManger);


            }else if (answers.role ==="Engineer") {
            const githubAnsewrs = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your GitHub user name?",
                    name: "github",
                  }
                ])
                  const newEngineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    githubAns.github
                  );
                  newEmployeeInfo.push(newEngineer);

            }else if (answers.role === "Intern") {
                    const internAnswer = await inquirer
                    .prompt([{ 

                        type: "input",
                        message: "What university did you attend?",
                        name: "school",
                     }
                ])
                    const newIntern = new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        internAns.school
                      );
                      newEmployeeInfo.push(newIntern); 

                }
            
        };

async function promptQuestions() {
    await questions()

    const addMemberAnswers = await inquirer
    .prompt([{
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
    }])
}
    

};