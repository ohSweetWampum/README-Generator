const inquirer = require('inquirer');
const fs = require('fs');

// making the prompts

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
      },
    {
        type: 'input',
        name: 'website',
        message: 'Enter a 1 sentence description of your application',
      },
    {
        type: 'input',
        name: 'website',
        message: 'Enter link to deployed site',
      },
    
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application',
      },
      //table of contents
      {
        type: 'input',
        name: 'installation',
        message: 'Provide any installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide description of how to use your application:',
      },
      {
        type: 'input',
        name: 'technology',
        message: 'Enter links to the offical sites of the technologies you used',
      },
      {
        type: 'input',
        name: 'gifUrl',
        message: 'Enter the URL of your demo GIF',
      },
      {
        type: 'input',
        name: 'codeSnippet',
        message: 'Enter your code snippet',
      },
      {
        type: 'input',
        name: 'codeDescription',
        message: 'Provide description of the code snippet',
      },
    {
        type: 'input',
        name: 'learning',
        message: 'Provide any things you learned making this application',
      },
       {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub profile link:',
      },
      {
        type: 'input',
        name: 'portfolio',
        message: 'Enter your portfolio link',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your linkedin profile link',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
      },
  ])






  .then((response) => {
    console.log(response)
    response.confirm === response.password
      ? console.log('')
      : console.log('')
  }
  );
