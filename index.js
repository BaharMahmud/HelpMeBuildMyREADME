const generateReadMe=({title, description, installation, usage, contributing, tests,  license, gitHub, email})=>
`# ${title}
${description}`
;

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
choices:["Public domain license",  "GNU Lesser General Public License", "Permissive license", "Copyleft license", "Proprietary license"],
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

const readMeFileContent=generateReadMe(response);
fs.writeFile("README.md",readMeFileContent,(err)=>
err ? console.log(err) : console.log ("README was created successfully")

);
}
)