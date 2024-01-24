const generateReadMe=({title, description, installation, usage, contributing, tests,  license, gitHub, email})=>
`# README file for ${title} project \n
![GitHub License] ${license} \n \n

Description:\n
${description}  \n \n \n

## Table of contents \n

*[Installation](#installation)


 Installation : \n
${installation} \n \n
Usage : \n
${usage} \n \n
Contribution : \n
${contributing} \n \n
Test: \n
${tests} \n \n

Questions: \n
If you have any questions about the repo, open an issue or contact me  directly at ${email}.You can find more 
of my work at ${gitHub} 

`;



const inquirer = require('inquirer');
const fs=require('fs');


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
badges:["https://opensource.org/licenses/Apache-2.0","https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
"https://img.shields.io/badge/License-FDL_v1.3-blue.svg","https://img.shields.io/badge/License-ISC-blue.svg","https://img.shields.io/badge/License-MIT-yellow.svg"]

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
.then((response) =>{
var respond=response.license;
if(response.license==="Apache 2.0"){
license="https://opensource.org/licenses/Apache-2.0";
}
if(response.license==="Boost Software License 1.0"){
    license="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    }
const readMeFileContent=generateReadMe(response);
fs.writeFile("README.md",readMeFileContent,(err)=>
err ? console.log(err) : console.log ("README was created successfully")

);
}
)