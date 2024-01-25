const generateReadMe=({title, description, installation, usage, contributing,license, tests, gitHub, email})=>
`# README file for ${title} project \n
 ${licensea}\n \n

Description:\n
${description}  \n \n \n

## Table of contents \n

* [Installation](#installation) \n
* [Usage](#usage) \n
* [License](#license) \n
* [Contributing](#contributing) \n
* [Tests](#tests) \n
* [Questions](#questions)\n\n



 ## Installation  \n
${installation} \n \n
 ## Usage  \n
${usage} \n \n
 ## License \n
 ${license} \n\n
 ## Contributing  \n
${contributing} \n \n
## Tests: \n
${tests} \n \n

## Questions: \n
If you have any questions about the repo, open an issue or contact me  directly at ${email}. You can find more of my work at ${gitHub} `;



const inquirer = require('inquirer');
const fs=require('fs');
var licensea="";

inquirer
.prompt([{
type:'input',
message:"What is your project title?",
name:"title",
},

{ type:'input',
message:'Provide description for your project.',
name:"description",
},

{
    type:'input',
message:'Provide installation instructions.',
name:"installation",
},
{

    type:'input',
message:'What are your usage information?',
name:"usage", 
},

{
    type:'input',
message:'What are your contribution guidelines?',
name:"contribution",
},

{
    type:'input',
message:'Add your test instructions if you have.',
name:"tests",
},
{
    type:'list',
message:'Which lisence would you like to add to your README file.',
name:"license",
choices:["Apache 2.0",  "Boost Software License 1.0", "GNU FDL v1.3", "ISC License (ISC)", "The MIT License"],
},

{
    type:'input',
message:'What is your GitHub username?',
name:"gitHub",
},

{
    type:'input',
message:'Please provide your email address for additional questions',
name:"email",
},

])
.then((answers) =>{

if(answers.license==="Apache 2.0"){
licensea="![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

}
 if(answers.license==="Boost Software License 1.0"){
    licensea="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    }
const readMeFileContent=generateReadMe(answers);
fs.writeFile("README.md",readMeFileContent,(err)=>
err ? console.log(err) : console.log ("README was created successfully")

);
}
)